$(document).ready(function(){

	/* footer */
	$('.ft-site h2').click(function(){
		$('.ft-site ul').slideToggle();
		$('.ft-site').toggleClass('open');
	});  
	$(function() {
		$("#go-top").on("click", function() {
			$("html, body").animate({scrollTop:0}, '500');
			return false;
		});
	});   
	
	/* header */
	$('.hd-search').click(function(){ 
		$('#header').toggleClass('top');
		$('.hd-search-box').toggleClass('hd-sch-open');
		$('.hd-search').toggleClass('close');
		$('.hd-logo').toggleClass('show');
		$('html,body').toggleClass('scr-none');
	}); 
	$('#header .gnb-wrap .gnb > li > ul').hide();
	$('#header .gnb-wrap .gnb > li').mouseover(function(){
		$('#header .gnb-wrap .gnb > li').removeClass('on'); 
		$('#header .gnb-wrap .gnb > li > ul').stop().fadeOut(200); 
		$(this).addClass('on'); 
		$(this).find('ul').stop().fadeIn(200); 
	});
	$('#header').mouseleave(function(){
		$('#header .gnb-wrap .gnb > li').removeClass('on');  
		$('#header .gnb-wrap .gnb > li > ul').stop().fadeOut(200); 
	}); 
	$('.btn-language').mouseover(function(){ 
		$('.hd-language ul').stop().fadeIn(); 
	});
	$('.hd-language').mouseleave(function(){
		$('.hd-language ul').stop().fadeOut(); 
	});

	if (matchMedia("screen and (max-width: 1201px)").matches) { //mobile
			$('.menubar').click(function(){ 
				$('#header').toggleClass('gnb-open');
				$('#header').toggleClass('top'); 
				$('.all-bg').toggle();
				$(".all-menu > ul > li:not(.gnb-sns) > ul").slideUp();  
				$(".all-menu > ul > li:not(.gnb-sns) > ul").slideUp();  
				$(".all-menu > ul > li:not(.gnb-sns) a").removeClass('on');  
			}); 
			$(".all-menu > ul > li:not(.gnb-sns) > ul").addClass('dep2'); 
			$(".all-menu > ul > li:not(.gnb-sns) > a").click(function(){ 
				$(".all-menu > ul > li:not(.gnb-sns) a").removeClass('on');  
				$(".all-menu > ul > li:not(.gnb-sns) > ul").slideUp(); 
				$(".all-menu > ul > li:not(.gnb-sns) > ul.dep2 ul").stop().slideUp();  
				if(!$(this).parent().find('.dep2').is(":visible")){
					$(this).parent().find('.dep2').stop().slideDown();
					$(this).addClass('on'); 
				} 
			}) 
			$(".all-menu > ul > li:not(.gnb-sns) > ul > li > a").click(function(){   
				$(".all-menu > ul > li:not(.gnb-sns) > ul > li.dep3 > a").removeClass('on');
				$(".all-menu > ul > li:not(.gnb-sns) > ul.dep2 ul").stop().slideUp();   
				if(!$(this).parent().find('ul').is(":visible")){
					$(this).parent().find('ul').stop().slideDown(); 
					$(this).addClass('on');  
				}
			}) 

	}else{ 
		$('.menubar').click(function(){ //pc
			$('#header').toggleClass('gnb-open');
			$('#header').toggleClass('top');
			$('html,body').toggleClass('scr-none'); 
		});

	}
});