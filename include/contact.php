<?php
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["formName"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["formEmail"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["formMessage"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! Ocurrió un error al enviar tu mensaje. Por favor completá el formulario e intentá nuevamente.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "hola@tapirus.com.ar";

        // Set the email subject.
        $subject = "Nuevo mensaje enviado desde Tapirus.";
        
        // Build the email content.
        $email_content = "Nombre: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Mensaje:\n$message\n";

        // Build the email headers.
        $email_headers = "From: Contacto Web Tapirus <hola@tapirus.com.ar>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Muchas Gracias!. Tu mensaje fue enviado con éxito, te responderemos a la brevedad.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Te pedimos disculpas. Ocurrió un error al enviar tu mensaje. Por favor intentá nuevamente.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Te pedimos disculpas. Ocurrió un error al enviar tu mensaje. Por favor intentá nuevamente.";
    }

?>
