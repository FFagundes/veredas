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
				margin = $(header).height(),
				color = $(this).attr('data-color'),
				time = 500;
				that = this;

			e.preventDefault();

			$('html, body').animate(
				{scrollTop: $(link).offset().top - margin},
				time,
				function(){
					$('.menu-link').removeClass('white green blue orange');
					$(that).addClass(color);
				}
			);
		});
	});
})(window.jQuery);
