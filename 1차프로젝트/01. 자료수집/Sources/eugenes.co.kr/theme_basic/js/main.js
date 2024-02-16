document.addEventListener('DOMContentLoaded', function(){


    /*===== GSAP Plugin setting ===== */
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


    /*===== MAIN FUNCTION ===== */
    var filter = "win16|win32|win64|mac|macintel"; 
    if ( navigator.platform ) { 
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { //mobile 
            $('.cursor').hide();
        } else { 
            $('.cursor').show();
        } 
    }   
    

    /*===== FIRST SCROLL PREVENT ===== */
    $('html,body').addClass('scrollhide'); 


    /*===== FUNCTION ===== */
    deviceChk()
    smoothScroll()
    if(navigator.userAgent.indexOf("Trident") > 0){ //익스 일때
        $('.cursor').hide();
    }else{
        cursorFunc()
    }
    // VISUAL SLIDER
    var visualSlider = new Swiper('.visual-slider', { 
		effect:'fade',
		autoplay:true,
		speed : 1000,
		loop:true,
        pagination: {
            el: '.visual-slider .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.visual-slider .swiper-button-next',
            prevEl: '.visual-slider .swiper-button-prev',
        },
    });
    visualSlider.autoplay.stop();

    snsSliderFunc()
    businessSliderFunc()
    popFunc()
    introTl()
    headerTl()
    headerFunc()
    newsCursor()
    valueTl()


    /*===== SETTIMEOUT ===== */
    window.addEventListener('load', function(){
        setTimeout(function(){
            $('html,body').removeClass('scrollhide');
            ScrollTrigger.update(); 
            ScrollTrigger.refresh(); 
            visualSlider.autoplay.start();
            gsap.fromTo('.main-visual .visual-slider', {
                width:90+"%",
                height:90+"%"
            }, {
                duration: 0.8,
                ease: 'none',
                width:100+"%",
                height:100+"%"
            });
            $('.loading-wrap').fadeOut();
        }, 500); 
    });    
    



    /*===== RESIZE ===== */
    window.addEventListener('resize', function(){
        var $window = $(window);
        var lastWindowWidth = $window.width();

        $window.resize(function () {
            var windowWidth = $window.width();
            if (lastWindowWidth !== windowWidth) {
                businessSliderFunc()
                setTimeout(function(){
                    ScrollTrigger.update(); 
                    ScrollTrigger.refresh(); 
                },100);
                lastWindowWidth = windowWidth;
            }
        });
        
        //
    });


    /*===== REFRESH ===== */
    //ScrollTrigger.refresh(); 
});





/*==================== */
/*===== FUNCTION ===== */
/*==================== */





/*===== DEVICE CHECK ===== */
function deviceChk(){
    var $html = $('html'); 
    var w = $(window).width();
    if( w < 768 ) $html.addClass('mobile');
    else if( w < 1024 ) $html.addClass('tablet');
    else if( w < 1281 ) $html.addClass('laptop');
    else $html.addClass('desktop');
}


/*===== CURSOR FUNCTION ===== */
function cursorFunc() {
    var cursorBall = $('.cursor-ball');
    var cursorBallSvg = $('.cursor-ball svg');
    var cursorBallSvgCircle = $('.cursor-ball svg circle');
    var cursorAble = $('.cursor-able');

    var pos = { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
    };
    var mouse = { 
        x: pos.x, 
        y: pos.y 
    };
    var speed = 0.35;
    gsap.set(cursorBall, {
        xPercent: -50, 
        yPercent: -50
    });
    
    var xSet = gsap.quickSetter(cursorBall, "x", "px");
    var ySet = gsap.quickSetter(cursorBall, "y", "px");
    
    window.addEventListener("mousemove", function(e){    
        mouse.x = e.x;
        mouse.y = e.y;  
    });
    
    gsap.ticker.add(function(){
      var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
    
    cursorAble.each(function(){
        var cursorTxt = $(this).attr('data-cursor');
        //console.log(cursorTxt);
        $(this).on('mouseenter',function(e){
            if(cursorTxt !== undefined){
                cursorBall.append('<div class="text">'+cursorTxt+'</div>');
                cursorBall.css({'mix-blend-mode':'unset'});
                cursorBallSvgCircle.css({'fill':'#0042bf'});
            }
            gsap.to(cursorBallSvg, .3, {
                scale: 5
            })
        });
        $(this).on('mouseleave',function(e){
            gsap.to(cursorBallSvg, .3, {
                scale: 1
            });
            cursorBall.find(".text").remove();
            cursorBall.css({'mix-blend-mode':'difference'});
            cursorBallSvgCircle.css({'fill':'#f7f8fa'});
        });
    });   
}
  

/*===== SNS SLIDER FUNCTION ===== */
function snsSliderFunc() {
    var snsSlider = new Swiper(".sns-slider", {
        slidesPerView: 3,
        spaceBetween: 100,
        pagination: {
            el: ".sns-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.sns-arrow .swiper-button-next',
            prevEl: '.sns-arrow .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 100
            },
          }
    });    
}


/*===== BUSINESS SLIDER INIT FUNCTION ===== */
function businessSliderFunc(){ 
    var businessSlider = undefined;
    var screenWidth = $(window).width();

    if(screenWidth <= 1200){
        $(".business-slider .swiper-slide").off('mouseover');
        if(businessSlider == undefined) {
            businessSlider = new Swiper(".business-slider", {
                pagination: {
                    el: ".business-slider .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".business-slider .swiper-button-next",
                    prevEl: ".business-slider .swiper-button-prev",
                },
                speed: 800,
                slidesPerView: 2,
                spaceBetween: 20,
                breakpoints: {
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            }); 
        }
    }else if(screenWidth > 1281){
        $(".business-slider .swiper-slide").on('mouseover',function(){
            $(".business-slider .swiper-slide").removeClass("swiper-slide-active");
            $(this).addClass("swiper-slide-active");
        });
        if(businessSlider != undefined){
            businessSlider.destroy();
            businessSlider = undefined;
            $(".business-slider .swiper-wrapper").removeAttr('style');
            $(".business-slider .swiper-slide").removeAttr('style'); 
        }
    }
}


/*===== INTRO TIMELINE ===== */
function introTl() {
    var introPin = $('#main-intro');

    ScrollTrigger.create({
        trigger: introPin,
        start: function start() {
            return 'top 80%';
        },
        toggleClass: {targets: "body", className: "live-ing"}
    }); 

    var introPinTl = gsap.timeline({
        scrollTrigger: {

            trigger: introPin,
            start: function start() {
                return 'top top';
            },
            scrub: 0,
            pin: true,
            pinSpacing:false
        }
    });

    ScrollTrigger.matchMedia({ 
	    "(min-width:1201px)": function() { // PC VER
            var introTl = gsap.timeline({
                scrollTrigger: {
        
                    trigger: introPin,
                    start: function start() {
                        return 'top 80%';
                    },
                    scrub: 0,
                    pinSpacing:false
                }
            });
            
            if($('.wrap').hasClass('ko-wrap')){ // 국문일때
                introTl
                .addLabel('gall-ani-01')
                .fromTo('#gall-item01', {
                    top: 100 + '%',
                    x: 160.35 + '%',
                    y: -0 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 160.35 + '%',
                    y: -101 + '%',
                }, 'gall-ani-01+=0.85')
                .fromTo('#gall-item01 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.85')
                .fromTo('#gall-item02', {
                    top: 100 + '%',
                    x: -22.6 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -22.6 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item02 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item03', {
                    top: 100 + '%',
                    x: 134.2 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 134.2 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item03 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item04', {
                    top: 100 + '%',
                    x: -23 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -23 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.75')
                .fromTo('#gall-item04 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.75')
                .fromTo('#gall-item05', {
                    top: 100 + '%',
                    x: -30 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -30 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=1.32')
                .fromTo('#gall-item05 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.32')
                .fromTo('#gall-item06', {
                    top: 100 + '%',
                    x: 79.7 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 79.7 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=1.5')
                .fromTo('#gall-item06 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.5')
                .fromTo('#main-contents', {
                    top: 100 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                }, 'gall-ani-01+=1.72'); 
                
                introTl.kill(true);
                gsap.set("#gall-item01", {clearProps: true});
                gsap.set("#gall-item01 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item02", {clearProps: true});
                gsap.set("#gall-item02 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item03", {clearProps: true});
                gsap.set("#gall-item03 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item04", {clearProps: true});
                gsap.set("#gall-item04 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item05", {clearProps: true});
                gsap.set("#gall-item05 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item06", {clearProps: true});
                gsap.set("#gall-item06 .gall-item-con", {clearProps: true});
                gsap.set("#main-intro .intro-btnwrap", {clearProps: true});
                gsap.set("#main-contents", {clearProps: true});         
            }else { // 영문일때
                introTl
                .addLabel('gall-ani-01')
                .fromTo('#gall-item01', {
                    top: 100 + '%',
                    x: 160.35 + '%',
                    y: -0 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 160.35 + '%',
                    y: -101 + '%',
                }, 'gall-ani-01+=0.85')
                .fromTo('#gall-item01 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.85')
                .fromTo('#gall-item02', {
                    top: 100 + '%',
                    x: -22.6 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -22.6 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item02 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item03', {
                    top: 100 + '%',
                    x: 134.2 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 134.2 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item03 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item04', {
                    top: 100 + '%',
                    x: -23 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -23 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.75')
                .fromTo('#gall-item04 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.75')
                .fromTo('#main-contents', {
                    top: 100 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                }, 'gall-ani-01+=0.9'); 
                
                introTl.kill(true);
                gsap.set("#gall-item01", {clearProps: true});
                gsap.set("#gall-item01 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item02", {clearProps: true});
                gsap.set("#gall-item02 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item03", {clearProps: true});
                gsap.set("#gall-item03 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item04", {clearProps: true});
                gsap.set("#gall-item04 .gall-item-con", {clearProps: true});
                gsap.set("#main-intro .intro-btnwrap", {clearProps: true});
                gsap.set("#main-contents", {clearProps: true});  
            }
        },
      
        "(min-width:821px) and (max-width: 1200px)": function() { // TABLET
            var introTl = gsap.timeline({
                scrollTrigger: {
        
                    trigger: introPin,
                    start: function start() {
                        return 'top 80%';
                    },
                    scrub: 0,
                    pinSpacing:false
                }
            });
            

            if($('.wrap').hasClass('ko-wrap')){ //국문일때
                introTl
                .addLabel('gall-ani-01')
                .fromTo('#gall-item01', {
                    top: 100 + '%',
                    x: 104.8 + '%',
                    y: -0 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 104.8 + '%',
                    y: -101 + '%',
                }, 'gall-ani-01+=0.92')
                .fromTo('#gall-item01 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.92')
                .fromTo('#gall-item02', {
                    top: 100 + '%',
                    x: -48 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -48 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item02 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item03', {
                    top: 100 + '%',
                    x: 66.5 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 66.5 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item03 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item04', {
                    top: 100 + '%',
                    x: -49.1 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -49.1 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.75')
                .fromTo('#gall-item04 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.75')
                .fromTo('#gall-item05', {
                    top: 100 + '%',
                    x: -55.5 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -55.5 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=1.32')
                .fromTo('#gall-item05 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.32')
                .fromTo('#gall-item06', {
                    top: 100 + '%',
                    x: 66.5 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 66.5 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=1.5')
                .fromTo('#gall-item06 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.5')
                .fromTo('#main-contents', {
                    top: 100 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                }, 'gall-ani-01+=1.72'); 


                introTl.kill(true);
                gsap.set("#gall-item01", {clearProps: true});
                gsap.set("#gall-item01 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item02", {clearProps: true});
                gsap.set("#gall-item02 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item03", {clearProps: true});
                gsap.set("#gall-item03 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item04", {clearProps: true});
                gsap.set("#gall-item04 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item05", {clearProps: true});
                gsap.set("#gall-item05 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item06", {clearProps: true});
                gsap.set("#gall-item06 .gall-item-con", {clearProps: true});
                gsap.set("#main-intro .intro-btnwrap", {clearProps: true});
                gsap.set("#main-contents", {clearProps: true});         
            }else{ //영문일때
                introTl
                .addLabel('gall-ani-01')
                .fromTo('#gall-item01', {
                    top: 100 + '%',
                    x: 104.8 + '%',
                    y: -0 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 104.8 + '%',
                    y: -101 + '%',
                }, 'gall-ani-01+=0.92')
                .fromTo('#gall-item01 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.92')
                .fromTo('#gall-item02', {
                    top: 100 + '%',
                    x: -48 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -48 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item02 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.1')
                .fromTo('#gall-item03', {
                    top: 100 + '%',
                    x: 66.5 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: 66.5 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item03 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.3')
                .fromTo('#gall-item04', {
                    top: 100 + '%',
                    x: -49.1 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    x: -49.1 + '%',
                    y: -101 + '%'
                }, 'gall-ani-01+=0.75')
                .fromTo('#gall-item04 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.75')
                .fromTo('#main-contents', {
                    top: 100 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                }, 'gall-ani-01+=1'); 
                introTl.kill(true);
                gsap.set("#gall-item01", {clearProps: true});
                gsap.set("#gall-item01 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item02", {clearProps: true});
                gsap.set("#gall-item02 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item03", {clearProps: true});
                gsap.set("#gall-item03 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item04", {clearProps: true});
                gsap.set("#gall-item04 .gall-item-con", {clearProps: true});
                gsap.set("#main-intro .intro-btnwrap", {clearProps: true});
                gsap.set("#main-contents", {clearProps: true});                 
            }    
        },
      
        "(max-width: 820px)": function() { // MOBILE VER
            var introTl = gsap.timeline({
                scrollTrigger: {
        
                    trigger: introPin,
                    start: function start() {
                        return 'top 80%';
                    },
                    scrub: 0,
                    pinSpacing:false
                }
            });
            

            if($('.wrap').hasClass('ko-wrap')){ //국문일때
                introTl
                .addLabel('gall-ani-01')
                .fromTo('#gall-item01', {
                    top: 100 + '%',
                    y: -0 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%',
                }, 'gall-ani-01+=1.65')
                .fromTo('#gall-item01 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.65')
                .fromTo('#gall-item02', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=0.2')
                .fromTo('#gall-item02 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.2')
                .fromTo('#gall-item03', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=0.67')
                .fromTo('#gall-item03 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.67')
                .fromTo('#gall-item04', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=1.15')
                .fromTo('#gall-item04 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.15')
                .fromTo('#gall-item05', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=2.1')
                .fromTo('#gall-item05 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=2.1')
                .fromTo('#gall-item06', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=2.55')
                .fromTo('#gall-item06 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=2.55')
                .fromTo('#main-intro .intro-btnwrap', {
                    opacity:0,
                    visibility:'hidden'
                }, {
                    opacity:1,
                    visibility:'visible'
                }, 'gall-ani-01+=3')
                .fromTo('#main-contents', {
                    top: 100 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                }, 'gall-ani-01+=3.2');    

                introTl.kill(true);
                gsap.set("#gall-item01", {clearProps: true});
                gsap.set("#gall-item01 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item02", {clearProps: true});
                gsap.set("#gall-item02 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item03", {clearProps: true});
                gsap.set("#gall-item03 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item04", {clearProps: true});
                gsap.set("#gall-item04 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item05", {clearProps: true});
                gsap.set("#gall-item05 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item06", {clearProps: true});
                gsap.set("#gall-item06 .gall-item-con", {clearProps: true});
                gsap.set("#main-intro .intro-btnwrap", {clearProps: true});
                gsap.set("#main-contents", {clearProps: true});       
            }else{ //영문일때
                introTl
                .addLabel('gall-ani-01')
                .fromTo('#gall-item01', {
                    top: 100 + '%',
                    y: -0 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%',
                }, 'gall-ani-01+=1.65')
                .fromTo('#gall-item01 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.65')
                .fromTo('#gall-item02', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=0.2')
                .fromTo('#gall-item02 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.2')
                .fromTo('#gall-item03', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=0.67')
                .fromTo('#gall-item03 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=0.67')
                .fromTo('#gall-item04', {
                    top: 100 + '%',
                    y: -0 + '%'
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                    y: -101 + '%'
                }, 'gall-ani-01+=1.15')
                .fromTo('#gall-item04 .gall-item-con', {
                    y: -100 + '%',
                }, {
                    y: 0 + '%',
                }, 'gall-ani-01+=1.15')
                .fromTo('#main-intro .intro-btnwrap', {
                    opacity:0,
                    visibility:'hidden'
                }, {
                    opacity:1,
                    visibility:'visible'
                }, 'gall-ani-01+=1.8')
                .fromTo('#main-contents', {
                    top: 100 + '%',
                }, {
                    duration: 1,
                    ease: 'none',
                    top: 0,
                }, 'gall-ani-01+=2');    

                introTl.kill(true);
                gsap.set("#gall-item01", {clearProps: true});
                gsap.set("#gall-item01 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item02", {clearProps: true});
                gsap.set("#gall-item02 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item03", {clearProps: true});
                gsap.set("#gall-item03 .gall-item-con", {clearProps: true});
                gsap.set("#gall-item04", {clearProps: true});
                gsap.set("#gall-item04 .gall-item-con", {clearProps: true});
                gsap.set("#main-intro .intro-btnwrap", {clearProps: true});
                gsap.set("#main-contents", {clearProps: true});   
            }      
        },
          
      });
}


/*===== HEADER TIMELINE ===== */
function headerTl() {
    ScrollTrigger.create({
        trigger: '#header',
        start: function start() {
            return 'top top';
        },
        endTrigger: '#footer',
        end: function end() {
            return 'bottom+=100vh bottom';
        },
        pin: true,
    });   
}


/*===== HEADER FUNCTION ===== */
function headerFunc(){
    var scrollValue = $(window).scrollTop();

    if(scrollValue < 150){
        $("#header").addClass('trans');
    }else{
        $("#header").removeClass('trans');
    }

    $(window).on('scroll',function(){
        scrollValue = $(window).scrollTop();

        if(scrollValue < 150){
            $("#header").addClass('trans');
        }else{
            $("#header").removeClass('trans');
        }
    });
}


/*===== NEWS CURSOR EFFECT ===== */
function newsCursor() {
    var newsItem = $(".news-list > li");
    newsItem.on('mouseenter',function(){
        newsItem.removeClass("cursor-active");
        $(this).addClass("cursor-active");
    });
    newsItem.on('mouseleave',function(){
        newsItem.removeClass("cursor-active");
    });
}


/*===== VALUE TIMELINE ===== */
function valueTl() {
    var valueTl = gsap.timeline( {
        scrollTrigger: {

            trigger: ".value-con",
            start: function start() {
                return 'top bottom';
            },
            end: function end() {
                return 'bottom 50%';
                //return 'bottom 50%+=' + headHeight;
            },
            scrub: 0,
            //markers:true,
        }
    });

    valueTl.fromTo('.value-con .white-sec', {
        clipPath:'polygon(0 120%, 100% 63%, 100% 100%, 0 100%)'
    }, {
        duration: 0.5,
        ease: 'none',
        clipPath:'polygon(0px 0%, 100% 0%, 100% 100%, 0% 100%)'
    });  
}


/*===== POPUP FUNC ===== */
function popFunc() {
    $('.btn-pop-open').on('click',function(e){
        e.preventDefault();
        var popNum = $(this).attr('data-popnum');
        $('.btn-pop-open').removeAttr("data-focus");
        $(this).attr('data-focus','on'); // 팝업 닫기를 위한 포커스
        $('.pop-wrap').attr("tabindex","0"); //포커스
        $('.pop-wrap').focus(); //포커스
        $('.pop-wrap').addClass('open');
        $('.pop-wrap').find('.pop-con').append('<iframe src="https://www.youtube.com/embed/'+popNum+'" frameborder="0" allowfullscreen=""></iframe>');
    });  

    $('.btn-pop-close').on('click',function(e){
        e.preventDefault();
        $("a[data-focus~=on]").focus(); // 원래 포커스로 이동
        $('.pop-wrap').removeAttr("tabindex");
        $('.pop-wrap').removeClass('open');
        $('.pop-wrap').find('.pop-con').html('');
    });  
}


/*===== SMOOTH SCORLL FUNCTION ===== */
function smoothScroll(){
	if(passiveChk()){
		window.addEventListener('wheel', smoothWheelFunc, {
            passive: false
        });
	}else{
		$(window).on('mousewheel DOMMouseScroll', smoothWheelFunc);
	}
}


/*===== PASSIVE OPT CHECK ===== */
function passiveChk(){
    var passiveSupported = false;
    try {
        var options = {
            get passive() {
                passiveSupported = true;
            }
        };
        window.addEventListener('test', null, options);
    } catch(err) {
        passiveSupported = false;
    }
    return passiveSupported;
}


/*===== SMOOTH SCROLL WHEEL FUNCTION ===== */
//참조:https://gist.github.com/muzafferkoluman/
function smoothWheelFunc(event){
    event.preventDefault();

	var scrollTime = 1;
	var delta = 0;

	if(passiveChk()){
		var scrollDistance = $(window).height() / 2.25;
		delta = event.wheelDelta/120 || -event.originalEvent.detail/3;
	}else{
		var scrollDistance = $(window).height() / 2.25;
		if(typeof event.originalEvent.deltaY != 'undefined'){
			delta = -event.originalEvent.deltaY/120;
		}else{
			delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		}
	}

	var scrollTop = $(window).scrollTop();
	var finalScroll = scrollTop - parseInt(delta*scrollDistance);
    
	gsap.to($(window), scrollTime, {
		scrollTo : { y: finalScroll, autoKill:true },
		ease: Power3.easeOut,
		overwrite: 5
	});
}