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
		$('.carousel').carousel({
		  interval: 8000
		})
	});
	
})(jQuery, this);