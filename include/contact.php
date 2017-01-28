<?php

// configure
$from = 'Contacto Web Tapirus <web@tapirus.com.ar>';
$sendTo = 'Hola Tapirus <hola@tapirus.com.ar>';
$subject = 'Nuevo mensaje enviado desde el formulario de contacto de http://tapirus.com.ar';
$fields = array('name' => 'Nombre', 'email' => 'Email', 'message' => 'Mensaje'); // array variable name => Text to appear in the email
$okMessage = 'Tu mensaje fue enviado con éxito. Muchas Gracias, te responderemos a la brevedad!.';
$errorMessage = 'Te pedimos disculpas. Ocurrió un error al enviar tu mensaje. Por favor intentá nuevamente.';

// let's do the sending

try
{
    $emailText = "Tienes un nuevo mensaje enviado desde el formulario de contacto de http://tapirus.com.ar";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value \r\n";
        }
    }

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\r\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
