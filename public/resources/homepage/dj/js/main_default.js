$(function(){

	// 배너 & 갤러리 반응형 대응
	var _width = $(window).width();
	var _book;

	var Book = function(){
		if( _book ) _book.destroySlider();
		
		if( _width < 555 ){
			_book = $('.munhwaList ul').bxSlider({
				auto: true,
				autoHover: true,
				pager: false,
				maxSlides: 1,
				slideWidth: 262,
				slideMargin: 20,
				onSliderLoad: function(){
					$(".bx-clone").find("a").prop("tabIndex","-1");
				},
				onSlideAfter: function(){
					$(".munhwaList ul").children("li").each(function(){
						if($(this).attr("aria-hidden") == "false"){
							$(this).find("a").attr("tabIndex","0");
						}else{
							$(this).find("a").attr("tabIndex","-1");
						}
					});
				}
			});
		}
		else if( _width < 1024 && _width > 555 ){
			_book = $('.munhwaList ul').bxSlider({
				auto: true,
				autoHover: true,
				pager: false,
				maxSlides: 2,
				slideWidth: 262,
				slideMargin: 20,
				onSliderLoad: function(){
					$(".bx-clone").find("a").prop("tabIndex","-1");
				},
				onSlideAfter: function(){
					$(".munhwaList ul").children("li").each(function(){
						if($(this).attr("aria-hidden") == "false"){
							$(this).find("a").attr("tabIndex","0");
						}else{
							$(this).find("a").attr("tabIndex","-1");
						}
					});
				}
			});
		}
		else {
			_book = $('.munhwaList ul').bxSlider({
				auto: true,
				autoHover: true,
				pager: false,
				maxSlides: 4,
				slideWidth: 262,
				slideMargin: 20,
				onSliderLoad: function(){
					$(".bx-clone").find("a").prop("tabIndex","-1");
				},
				onSlideAfter: function(){
					$(".munhwaList ul").children("li").each(function(){
						if($(this).attr("aria-hidden") == "false"){
							$(this).find("a").attr("tabIndex","0");
						}else{
							$(this).find("a").attr("tabIndex","-1");
						}
					});
				}
			});
		}
	};

	//Book();

	// 웹 접근성

	$('.munhwaList ul a').focusin(function () {
		//mainSlider.stopAuto();
	});


	$(window).on('resize', function(){
		_width = $(window).width();
		//Book();
	});

});

