(function($){
	$(function(){   
		var nav = $('#header');   
		$(window).scroll(function () { 
			if ($(this).scrollTop() > 150) { 
				nav.addClass("fixed-header"); 
			} else { 
				nav.removeClass("fixed-header"); 
			} 
		});
	
		$('.menu-link').on('click', function(e){
			var link = $(this).attr('href'),
				margin = $(header).height();
			e.preventDefault();

			console.log(margin);
			$('html, body').animate({
				scrollTop: $(link).offset().top - margin
			}, 500);
		});
	});
})(window.jQuery);
