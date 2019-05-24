$(document).ready(function () {


    /**
     *  UI 스크립트
     */

    pantone.init();

});

const pantone = {
    init: function () {
        // pantone.swiper();
        pantone.slick();
        pantone.isScroll();
    },

    // swiper : function () {
    //     var slideIndex = 0;
    //     var slide = document.getElementsByClassName('slide-image');
    //     activeDivs(slideIndex);
    //     carousel();
    //
    //     function plusDivs(n) {
    //         activeDivs((slideIndex += n));
    //         console.log(slideIndex)
    //
    //     }
    //
    //     function activeDivs(n) {
    //         if (n > slide.length) {
    //             slideIndex = 1;
    //         }
    //         if (n < 1) {
    //             slideIndex = slide.length;
    //         }
    //         for (var i = 0; i < slide.length; i++) {
    //             slide[i].style.display = "none";
    //             slide[i].className = slide[i].className.replace(' currentPage', "");
    //         }
    //
    //         slide[slideIndex - 1].style.display = "block";
    //         slide[slideIndex - 1].className += " is-active"
    //     }
    //
    //     function carousel() {
    //         for (var i = 0; i < slide.length; i++) {
    //             slide[i].style.display = "none";
    //         }
    //         slideIndex++;
    //         if (slideIndex > slide.length) {
    //             slideIndex = 1;
    //         }
    //         slide[slideIndex - 1].style.display = "block";
    //         slide[slideIndex - 1].className += " is-active"
    //
    //         setTimeout(carousel, 9000);
    //
    //     }
    // },

    slick: function () {
        $('.slider ul').slick({
            autoPlay: true,
            speed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
        })
    },

    isScroll: function () {
        $(window).on('scroll',function () {
            var sct = $(window).scrollTop();

            if(sct > 100) {
                $('html, body').addClass('isScroll')
            } else {
                $('html, body').removeClass('isScroll')
            }
        })

    }
}