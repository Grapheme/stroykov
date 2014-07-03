var App = (function(){

	$(document).on('click', '.tabs > li', function(){

		if( !$(this).hasClass('active') ) {
			var allTabs = $('.tabs > li');
			var tabCont = $('.tab');
			var anchor = $(this).attr('id');

			$('.tabs > li').removeClass('active');
			$(this).addClass('active');
			tabCont.removeClass('active').filter('[data-for="' + anchor + '"]').addClass('active');
		}
	});

	$(document).on('click', '.details-dl > dt', function(){
		$(this).parent().find('dd').removeClass('opened');
		$(this).next().addClass('opened');
	});

})();
