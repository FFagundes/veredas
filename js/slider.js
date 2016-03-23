(function($){
	$(document).ready(function(){

		start_sliders();

		$('.slider-active').css('display', 'block');
		add_pager();

		$('.slider-right-arrow').click(function(e){
			e.preventDefault();
			var parent = $(this).closest('.slider-content');
			slider('right', parent);
		});

		$('.slider-left-arrow').click(function(e){
			e.preventDefault();
			var parent = $(this).closest('.slider-content');
			slider('left', parent);
		});

		$('.slider-pager-link').click( function(e){
			e.preventDefault();

			var item_num = $(this).attr('data-slide-index'),
				parent = $(this).closest('.slider-content'),
				current = parent.find('.slider-active'),
				next = parent.find('li:eq(' + item_num + ')');

			if (current[0] != next[0]){
				var slider_pager = parent.find('.slider-pager');
				fade_out(current, slider_pager);
				fade_in(next, item_num, slider_pager);
			}

		});

		timer();

		function timer(){
			setTimeout(function(){
				$('.slider-content').each( function(){
					slider('right', $(this));
				});
				timer();
			} , 8000);
		}

		function slider(direction, parent){
			var sliderList = parent.find('.slider-list');
			direction = direction || 'right';

			if (direction === 'left'){
				next = sliderList.find('.slider-active').prev();
				if (!next.length) next = sliderList.find('li').last();

			} else if (direction === 'right'){
				next = sliderList.find('.slider-active').next();
				if (!next.length) next = sliderList.find('li').first();
			} else {
				return false;
			}
			
			var current = sliderList.find('.slider-active');

			var slider_pager = parent.find('.slider-pager');
			fade_out(current, slider_pager);
			fade_in(next, next.index(), slider_pager);
		}

		function add_pager(){
			var sliders = $('.slider-list'),
				sliderContent;

			sliders.each( function(){
				var counter = $(this).find('li').length,
					container = document.createElement('div');

				$(container).addClass('slider-pager slider-default-pager');

				for (var x=0; x < counter; x++){
					element = document.createElement('a');
					$(element).attr('href', '#');
					$(element).attr('data-slide-index', x);
					$(element).attr('class', 'slider-pager-link');
					$(element).text(x);
					$(element).appendTo($(container));
				}

				sliderContent = $(this).closest('.slider-content');
				$(container).find('a:eq(0)').addClass('active');
				$(container).appendTo(sliderContent);
			});
		}

		function fade_out(element, parent){
			element.fadeOut();
			element.removeClass('slider-active');
			parent.find('.slider-pager-link').removeClass('active');
		}

		function fade_in(element, position, parent){
			element.fadeIn();
			element.addClass('slider-active');
			parent.find('.slider-pager-link[data-slide-index="' + position + '"]').addClass('active');
		}

		function start_sliders(){
			var sliders = $('.slider-content');

			sliders.each( function(i, val){
				$(this).attr('id', 'slider-' + i);
			});
		}

	});
})(window.jQuery);
