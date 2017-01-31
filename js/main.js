/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 *
 * Version 1.0
 * Updated 12/10/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com)
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 *
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 *
 */

 !function(t){function e(e,i){return tallest=e?e:0,this.height("auto").each(function(){t(this).height()>tallest&&(tallest=t(this).height())}),i&&tallest>i&&(tallest=i),this.each(function(){t(this).height(tallest).css("overflow","auto")})}t.fn.equalHeights=function(i,h){var l=this;return t(window).resize(function(){e.call(l,i,h)}),e.call(l,i,h),this}}(jQuery);


 // Custom Scripts...


(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// $(window).load(function(){
		//     $('#preloader').fadeOut('slow',function(){
		//     	$(this).remove();
		//     });
		// });

		// DOM ready, take it away
		// Logo header scroll down...
		// $('header').removeClass("minify");
		$(window).scroll(function() {
			if ($(this).scrollTop() > '80') {  
			    $('header').addClass("minify");
			}
			else{
			    $('header').removeClass("minify");
			}
		});

		// Scrollspy...
		$('body').scrollspy({ 
			target: '#mobile-nav',
			offset: 75
		});

		// Smooth scroll effect...
		smoothScroll.init({
		    offset: 72 // Integer. How far to offset the scrolling anchor location in pixels
		});

		// Set equalCols...
		$(".equalCol").equalHeights();

		// Testimonials carousel...

		$('.testimonials-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: '<a class="slick-prev ion-ios-arrow-left"></a>',
            nextArrow: '<a class="slick-next ion-ios-arrow-right"></a>'
        });

        // Porfolio Gallery Setup //

        $("#elastic_grid").elastic_grid({
            'items' :
            [
                {
                    'title'         : 'Identidad visual y cartelería para Áreas Protegidas de Tucumán',
                    'description'   : ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
                    'thumbnail'     : ['img/porfolio/areas-protegidas/min-ap-0.jpg', 'img/porfolio/areas-protegidas/min-ap-1.jpg', 'img/porfolio/areas-protegidas/min-ap-2.jpg', 'img/porfolio/areas-protegidas/min-ap-3.jpg', 'img/porfolio/areas-protegidas/min-ap-4.jpg', 'img/porfolio/areas-protegidas/min-ap-5.jpg', 'img/porfolio/areas-protegidas/min-ap-6.jpg'],
                    'large'         : ['img/porfolio/areas-protegidas/ap-0.jpg', 'img/porfolio/areas-protegidas/ap-1.jpg', 'img/porfolio/areas-protegidas/ap-2.jpg', 'img/porfolio/areas-protegidas/ap-3.jpg', 'img/porfolio/areas-protegidas/ap-4.jpg', 'img/porfolio/areas-protegidas/ap-5.jpg', 'img/porfolio/areas-protegidas/ap-6.jpg'],
                    'button_list'   :
                    [
                        // { 'title':'', 'url' : '' },
                        // { 'title':'', 'url':''}
                    ],
                    'tags'          : ['']
                },
                {
                    'title'         : 'Identidad Visual del Parque Percy Hill',
                    'description'   : 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
                    'thumbnail'     : ['img/porfolio/percy-hill/min-ph-1.jpg', 'img/porfolio/percy-hill/min-ph-2.jpg', 'img/porfolio/percy-hill/min-ph-3.jpg', 'img/porfolio/percy-hill/min-ph-4.jpg', 'img/porfolio/percy-hill/min-ph-5.jpg'],
                    'large'         : ['img/porfolio/percy-hill/ph-1.jpg', 'img/porfolio/percy-hill/ph-2.jpg', 'img/porfolio/percy-hill/ph-3.jpg', 'img/porfolio/percy-hill/ph-4.jpg', 'img/porfolio/percy-hill/ph-5.jpg'],
                    'button_list'   : [],
                    'tags'          : ['']
                },
                {
                    'title'         : 'Identidad Visual para Bosque Modelo Tucumán',
                    'description'   : 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
                    'thumbnail'     : ['img/porfolio/bosque-modelo/min-bm-1.jpg', 'img/porfolio/bosque-modelo/min-bm-2.jpg', 'img/porfolio/bosque-modelo/min-bm-2.jpg'],
                    'large'         : ['img/porfolio/bosque-modelo/bm-1.jpg', 'img/porfolio/bosque-modelo/bm-2.jpg', 'img/porfolio/bosque-modelo/bm-2.jpg'],
                    'button_list'   : [],
                    'tags'          : ['']
                },
                {
                    'title'         : 'Identidad Visual para Caspinchango',
                    'description'   : 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
                    'thumbnail'     : ['img/porfolio/caspinchango/min-cch-1.jpg', 'img/porfolio/caspinchango/min-cch-2.jpg', 'img/porfolio/caspinchango/min-cch-4.jpg'],
                    'large'         : ['img/porfolio/caspinchango/cch-1.jpg', 'img/porfolio/caspinchango/cch-2.jpg', 'img/porfolio/caspinchango/cch-4.jpg'],
                    'button_list'   : [],
                    'tags'          : ['']
                },
                
            ]
        });
        
        // End Porfolio Gallery //
          
	});
	
})(jQuery, this);