$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log("Scroll position:", scroll);
        if (scroll >= 50) {
            $(".r-nav").addClass("stickyadd");
        } else {
            $(".r-nav").removeClass("stickyadd");
        }
    });
    //scroll nav and text
    var typed = new Typed(".text", { 
        strings: ["FrontEnd Developer", "BackEnd Developer", "Designer ux/ui", "cloud"], 
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    });
    