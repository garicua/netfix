
$(document).ready(function(){

    <!--responsive menu-->

    var touch = $('#touch-menu');
    var close = $('#close-menu');
    var menu = $('.main-header__nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(close).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 1100 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    // Scroll Events - fixed
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        // Activate menu
        if (wScroll > 600) {
            $('.main-header').addClass('active_menu');
        }
        else {
            $('.main-header').removeClass('active_menu');
        };
    });

    <!--discount-->
    $('.discount').addClass('active-discount');
    $('#close-discount').on('click', function(e) {
        $('.discount').removeClass('active-discount');
    });
    $('#open-discount').on('click', function(e) {
        $('.discount-open').addClass('active-discount');
        $('.discount').removeClass('active-discount');
    });
    $('.close').on('click', function(e) {
        $('.discount-open').removeClass('active-discount');
    });

    // slider
    $('.slider .bxslider').bxSlider({
        slideWidth: 480,
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 30,
        auto: true,
        pause: 7000
    });

    // slider-mob
    $('.choice-mob .bxslider').bxSlider({

    });

// anchor links
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


});

// select styles
(function($) {
    $(function() {
        $('input[type=number], select').styler({
            selectSearch: true,

        });
    });
})(jQuery);
$('select').styler('destroy');

//form calculate
function Calc() {
    // var currency = + document.getElementsByClassName('currency').value
    var service = + document.getElementById('typeService').value;
    var assignements = + document.getElementById('typeAssignements').value;
    var academicLevel = + document.getElementById('academicLevel').value;
    var time = + document.getElementById('time').value;
    var pages = + document.getElementById('pages').value;
    document.getElementById('total').value = service * assignements * academicLevel * time * pages;
}


// Animation for header
$(function() {
    body = $('body'),
    header = $('.main-header'),
    discount = $('.discount'),
    h1 = $('h1'),
    form = $('.start-page__form'),
    tl = new TimelineMax();

    tl
        .to(body, 2, {autoAlpha:1,ease:Power1.easeOut}, "+=0.5")
        .from(header, 0.5, {autoAlpha:0, position: 'relative', top: 20, ease:Power1.easeOut})
        // .from(h1, 1, {text:"", ease:Power0.easeNone})
        .from(h1, 1, {autoAlpha:0, top:-50, right: -50, ease:Power1.easeOut})
        .from(form, 1, {autoAlpha:0, scale: 0.05, ease:Power1.easeOut})


        .from(discount, 2.5, {autoAlpha:0, ease: Bounce.easeOut, y: -500}, "+=15")

    // .from(h1, 1, {autoAlpha:0, top:-150, ease:Power1.easeOut})
        // .from(h4, 1, {autoAlpha:0, bottom:-50, ease:Power1.easeOut})
        // .from(btn, 1, {autoAlpha:0, left: -50, ease:Power1.easeOut})
        // .from(scroll, 1, {autoAlpha:0, bottom: 50, ease:Power1.easeOut})
    // .from(btn, 1, {autoAlpha:0, left:150, ease:Power1.easeOut})


});

// Animation for Choise
$(function() {
    main = $('.choice'),
    h2 = $('.choice h2'),
    item = $('.choice__item'),
    scrollMagicController = new ScrollMagic(),
    tlPartners = new TimelineMax();
    tlPartners
        .from(main, 0.5, {autoAlpha:0, ease:Power1.easeOut})
        .from(h2, 1, {autoAlpha:0, top:-50, position: 'relative', ease:Power1.easeOut})
        .staggerFrom(item, 0.3,{cycle: {
            y:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.7)

    var scene = new ScrollScene({
        triggerElement: '.choice',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);
});

// Animation for Slogan
$(function() {
    h2 = $('.slogan h2'),
    h5 = $('.slogan h5'),
    scrollMagicController = new ScrollMagic(),
    tlPartners = new TimelineMax();
    tlPartners
        .from(h2, 2, {text:"", ease:Power0.easeNone})
        .from(h5, 1, {autoAlpha:0, top:100, position: 'relative', ease:Power1.easeOut})


    var scene = new ScrollScene({
        triggerElement: '.slogan',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);
});

// Animation for slider
$(function() {
    main = $('.slider'),

        scrollMagicController = new ScrollMagic(),
        tlPartners = new TimelineMax();
    tlPartners
        .from(main, 0.5, {autoAlpha:0, ease:Power1.easeOut})

    var scene = new ScrollScene({
        triggerElement: '.slider',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);
});

// Animation for Footer
$(function() {
    main = $('.main-footer'),
    li = $('.main-footer li'),
    scrollMagicController = new ScrollMagic(),
    tlPartners = new TimelineMax();
    tlPartners
        .from(main, 0.5, {autoAlpha:0, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            y:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.1)

    var scene = new ScrollScene({
        triggerElement: '.main-footer',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);
});
