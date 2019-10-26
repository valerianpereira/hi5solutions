/**
 * Copyright KOPATHEME
 * Licensed MIT
 */

"use strict";

jQuery(document).ready(function () {
    /*--- menu ---*/

    jQuery('.main-menu').superfish({
        delay: 500, // one second delay on mouseout
        animation: {
            opacity: 'show',
            height: 'show'
        }, // fade-in and slide-down animation
        speed: 'fast', // faster animation speed
    });
    mmenu_sub_direction(mmenu_ul, mmenu_li, sfmmenu_ul);

    jQuery('.mobile-main-menu').navgoco({
        accordion: true
    });


    /*--- slider ---*/

    jQuery('.slider-pro-1').sliderPro({
        width: 1366,
        height: 604,
        forceSize: 'fullWidth',
        arrows: false,
        buttons: false,
        waitForLayers: false,
        autoplay: false,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        responsive: true,
        slideDistance: 0,
        autoplayDelay: 1000,
    });
    jQuery('.slider-pro-2').sliderPro({
        width: 1349,
        height: 470,
        forceSize: 'fullWidth',
        arrows: false,
        buttons: true,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        responsive: true,
        slideDistance: 0,
        autoplayDelay: 3000,
    });

    jQuery('.slider-pro-3').sliderPro({
        width: 1289,
        height: 552,
        // forceSize: 'fullWidth',
        arrows: false,
        buttons: true,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: false,
        responsive: false,
        slideDistance: 0,
        autoplayDelay: 5000,
        breakpoints: {
            2000: {
                width: 1169,
                height: 552,
            },
            1366: {
                width: 1289,
                height: 552,
            },
            1024: {
                width: 1024,
                height: 549
            },
            768: {
                width: 768,
                height: 549,
            },
            359: {
                width: 359,
                height: 457,
            }
        }
    });

    jQuery('.slider-pro-4').sliderPro({

        arrows: true,
        buttons: false,
        waitForLayers: false,
        autoplay: true,
        fadeArrows: false,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        responsive: true,
        slideDistance: 25,
        autoplayDelay: 5000,

        width: 692,
        height: 330,
        thumbnailWidth: 214,
        thumbnailHeight: 130,

        visibleSize: '100%',
        breakpoints: {
            1023: {
                width: 500,
                height: 238,
                thumbnailWidth: 155,
                thumbnailHeight: 94,
            },
        },

        init: function () {
            jQuery(".slider-pro").show();
        }
    });

    jQuery('.slider-pro-4 .sp-previous-arrow').append("<img src='images/p33/1.png' alt=''>");
    jQuery('.slider-pro-4 .sp-next-arrow').append("<img src='images/p33/2.png' alt=''>");


    jQuery('.slider-pro-5').sliderPro({

        width: 1170,
        height: 435,
        // forceSize: 'fullWidth',
        arrows: true,
        fadeArrows: false,
        buttons: false,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: false,
        slideDistance: 0,
        autoplayDelay: 5000,
        init: function () {
            jQuery(".slider-pro").show();
        }
    });


    jQuery('.slider-pro-5 .sp-previous-arrow').append("<span class='ti-arrow-left'></span>");
    jQuery('.slider-pro-5 .sp-next-arrow').append("<span class='ti-arrow-right'></span>");


    jQuery('.slider-pro-6').sliderPro({
        width: 740,
        height: 500,
        orientation: 'vertical',
        loop: false,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: true,
        thumbnailWidth: 370,
        thumbnailHeight: 235,
        autoplay: false,
        autoScaleLayers: false,
        breakpoints: {
            1160: {
                width: 673,
                height: 379,
                thumbnailWidth: 216,
                thumbnailHeight: 108
            },

            1023: {
                width: 515,
                height: 290,
                thumbnailWidth: 216,
                thumbnailHeight: 108
            },
            979: {
                width: 450,
                height: 253,
                thumbnailWidth: 216,
                thumbnailHeight: 108
            },
            767: {
                width: 405,
                height: 228,
                thumbnailWidth: 176,
                thumbnailHeight: 80,

            },
            639: {
                width: 460,
                height: 259,
                thumbnailWidth: 110,
                thumbnailHeight: 70,
                thumbnailsPosition: 'bottom',

            },
            359: {
                width: 300,
                height: 169,
                thumbnailWidth: 110,
                thumbnailHeight: 70,
                thumbnailsPosition: 'bottom',

            }
        }
    });
    jQuery('.slider-pro-6 .sp-lightbox').on('click', function (event) {
        event.preventDefault();
        if (jQuery('.slider-pro-6').hasClass('sp-swiping') === false) {
            jQuery.fancybox.open(this);
        }
    });

    jQuery('.slider-pro-7').sliderPro({
        width: 840,
        height: 472,
        thumbnailWidth: 270,
        thumbnailHeight: 135,
        orientation: 'vertical',
        loop: false,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        breakpoints: {
            1160: {
                width: 673,
                height: 379,
                thumbnailWidth: 216,
                thumbnailHeight: 108
            },

            1023: {
                width: 515,
                height: 290,
                thumbnailWidth: 216,
                thumbnailHeight: 108
            },
            979: {
                width: 450,
                height: 253,
                thumbnailWidth: 216,
                thumbnailHeight: 108
            },
            767: {
                width: 405,
                height: 228,
                thumbnailWidth: 176,
                thumbnailHeight: 80,

            },
            639: {
                width: 460,
                height: 259,
                thumbnailWidth: 110,
                thumbnailHeight: 70,
                thumbnailsPosition: 'bottom',

            },
            359: {
                width: 300,
                height: 169,
                thumbnailWidth: 110,
                thumbnailHeight: 70,
                thumbnailsPosition: 'bottom',

            }

        }
    });
    jQuery('.slider-pro-7 .sp-lightbox').on('click', function (event) {
        event.preventDefault();
        if (jQuery('.slider-pro-7').hasClass('sp-swiping') === false) {
            jQuery.fancybox.open(this);
        }
    });


    jQuery('.slider-pro-8').sliderPro({
        width: 560,
        height: 571,
        orientation: 'horizontal',
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'bottom',
        thumbnailPointer: true,
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        autoplay: false,

    });
    jQuery('.slider-pro-8 .sp-lightbox').on('click', function (event) {
        event.preventDefault();
        if (jQuery('.slider-pro-8').hasClass('sp-swiping') === false) {
            jQuery.fancybox.open(this);
        }
    });


    /*--- Owl Carousel ---*/

    var owl_1 = jQuery('.owl-carousel-1');
    if (owl_1.length) {
        owl_1.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<span class='ti-angle-left'></span>", "<span class='ti-angle-right'></span>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            slideSpeed: 5000,
        });
    }

    var owl_2 = jQuery('.owl-carousel-2');
    if (owl_2.length) {
        owl_2.owlCarousel({
            // items: 5,
            loop: true,
            nav: true,
            navText: ["<img src='images/p33/1.png' alt=''>", "<img src='images/p33/2.png' alt=''>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            slideSpeed: 5000,
            responsiveClass: true,
            responsive: {
                1024: {
                    items: 5,
                },
                479: {
                    items: 3,
                },
                0: {
                    items: 1,
                },
            }
        });
    }

    var owl_3 = jQuery('.owl-carousel-3');
    if (owl_3.length) {
        owl_3.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<span class='ti-angle-left'></span>", "<span class='ti-angle-right'></span>"],
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            slideSpeed: 5000,

        });
    }

    var owl_4 = jQuery('.owl-carousel-4');
    if (owl_4.length) {
        owl_4.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<span class='ti-arrow-left'></span> Previous Hole", "Previous Hole <span class='ti-arrow-right'></span>"],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            slideSpeed: 5000,
        });
    }


    jQuery('.owl-carousel-4 button').on('click', function () {
        jQuery(this).closest(".item").find("iframe").toggleClass("hidden");
    });


    var owl_5 = jQuery('.owl-carousel-5');
    if (owl_5.length) {
        owl_5.owlCarousel({
            // items: 3,
            loop: true,
            nav: true,
            navText: ["<span class='ti-arrow-left'></span>", "<span class='ti-arrow-right'></span>"],
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            slideSpeed: 5000,
            responsive: {
                1024: {
                    items: 3,
                },
                639: {
                    items: 2,
                },
                0: {
                    items: 1,
                },
            }
        });
    }


    var owl_6 = jQuery('.owl-carousel-6');
    if (owl_6.length) {
        owl_6.owlCarousel({
            // items: 5,
            loop: true,
            nav: true,
            navText: ["<img src='images/p33/1.png' alt=''>", "<img src='images/p33/2.png' alt=''>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            slideSpeed: 5000,
            responsiveClass: true,
            responsive: {
                1024: {
                    items: 6,
                },
                479: {
                    items: 4,
                },
                0: {
                    items: 1,
                },
            }
        });
    }


    /*--- scroll (on banner) ---*/
    jQuery('.kopa-scroll').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    /*--- MAP ---*/

    if (jQuery('.kopa-map').length > 0) {

        var id_map = jQuery('.kopa-map').attr('id');
        var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
        var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
        var place = jQuery('.kopa-map').attr('data-place');
        var iconBase = '';

        var map = new GMaps({
            el: '#' + id_map,
            lat: lat,
            lng: lng,
            zoom: 17,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_RIGHT'
            },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            // mousemove: false,
        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place,
            icon: iconBase
        });

    }

    if (jQuery('.kopa-map-2').length > 0) {

        var id_map = jQuery('.kopa-map-2').attr('id');
        var lat = parseFloat(jQuery('.kopa-map-2').attr('data-latitude'));
        var lng = parseFloat(jQuery('.kopa-map-2').attr('data-longitude'));
        var place = jQuery('.kopa-map-2').attr('data-place');
        var iconBase = '';

        var map = new GMaps({
            el: '#' + id_map,
            lat: lat,
            lng: lng,
            zoom: 9,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_RIGHT'
            },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            // mousemove: false,
        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place,
            icon: iconBase
        });

    }


    /*--- match-height  ---*/
    if (jQuery('.ul-mh').length) {
        imagesLoaded(jQuery('.ul-mh'), function () {
            jQuery('.ul-mh').children().matchHeight();
        });

    }

    if (jQuery('.carousel-mh').length) {
        jQuery('.carousel-mh').find(".owl-item").matchHeight();
    }


    /*--- masonry ---*/
    if (jQuery('.ul-ms').length) {
        imagesLoaded(jQuery('.ul-ms'), function () {
            jQuery('.ul-ms').masonry({
                columnWidth: 1,
                itemSelector: '.ul-ms-item',
            });
        });
    }

    /*_____________ tabs _____________*/
    var nav_tab_1 = jQuery('.millside-module-tab-3 a[data-toggle=tab]');
    var ul_ms_1 = jQuery('.millside-module-tab-3 .ul-ms');
    nav_tab_1.each(function () {
        jQuery(this).on('shown.bs.tab', function () {
            ul_ms_1.imagesLoaded(function () {
                ul_ms_1.masonry({
                    columnWidth: '.ul-ms-item',
                    itemSelector: '.ul-ms-item'
                });
            });
        });
    });


    /*--- Accordion ---*/
    var i1 = 0;
    if (jQuery('.kopa-accordion').length) {
        jQuery('.kopa-accordion').each(function () {
            var panel_group = jQuery(this).find('.panel-group');
            panel_group.each(function () {
                var item_index_1 = 'accordion' + i1,
                    item_index_11 = '#' + item_index_1;

                jQuery(this).attr('id', item_index_1);
                jQuery(this).find('.panel').each(function () {
                    jQuery(this).find('.panel-title').children('a').attr('data-parent', item_index_11);
                    jQuery(this).find('.panel-title').children('a').attr('href', item_index_11 + jQuery(this).index());
                    jQuery(this).find('.panel-collapse').attr('id', item_index_11 + jQuery(this).index());
                });
            });
            ++i1;
        });
    }

    jQuery(".kopa-accordion  .panel-group > .panel:first-child").find(".panel-heading").addClass("active");
    jQuery(".kopa-accordion  .panel-group > .panel:first-child").find(".panel-collapse").addClass("in");

    jQuery(".panel-heading").on('click', function () {
        jQuery(this).closest('.kopa-accordion').find(".panel-heading").removeClass("active");
        jQuery(this).closest('.kopa-accordion').find(".panel-collapse").collapse('hide');

        jQuery(this).addClass("active");
        jQuery(this).next().collapse('toggle');
    });

    /*--- datepicker ---*/
    // jQuery(".date-picker").datepicker({
    // 	format: 'mm/dd/yyyy',
    // 	defaultDate:'now',
    // 	todayHighlight: true,
    // 	autoclose: true,
    // });
    // jQuery("input.date-picker + span").on('click', function(){
    // 	jQuery(this).prev().datepicker().focus();
    // });

    // /*--- timepicker ---*/

    // jQuery('.time-picker').timepicker({
    // 	defaultTime: '08:00 AM',
    // 	icons: {
    // 		up: 'fa fa-caret-up',
    // 		down: 'fa fa-caret-down'
    // 	},
    // 	showMeridian: false,
    // 	minuteStep: 5,
    // });

    // jQuery("input.time-picker + span").on('click', function(){
    // 	jQuery(this).prev().timepicker().focus();
    // });

    /*_____________ Loadmore _____________*/


    /*--- custom arrow select ---*/
    jQuery(".woocommerce-ordering::before").on('click', function () {
        jQuery(this).parent().find(".orderby").click();
    });


    /*--- validate form ---*/
    jQuery(".kopa-form-01, .kopa-form-04, .kopa-form-05").validate({
        rules: {
            name: {
                required: true,
                minlength: 10,
            },
            email: {
                required: true,
                email: true,
            },
            msg: {
                required: true,
                minlength: 10,
            },
        },

        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Please enter at least {0} characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            msg: {
                required: "Please enter a message",
                minlength: "Please enter at least {0} characters"
            },
        }

    });

    /*---  ---*/
    jQuery(".kopa-form-02").validate({
        rules: {
            name: {
                required: true,
                minlength: 10,
            },
            phone: {
                required: true,
                number: true,
            },
            email: {
                required: true,
                email: true,
            },
        },

        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Please enter at least {0} characters"
            },
            phone: {
                required: "Please enter your phone number"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
        }

    });

    /*---  ---*/
    jQuery(".kopa-form-03").validate({
        rules: {
            name: {
                required: true,
                minlength: 10,
            },
            phone: {
                required: true,
                number: true,
            },
            email: {
                required: true,
                email: true,
            },
            typeOfEvent: {
                required: true,
                minlength: 10,
            },
            preferred: {
                required: true,
                date: true,
            },
            guest: {
                required: true,
                number: true,
            },
            hear: {
                required: true,
                minlength: 10,
            }
        },

        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Please enter at least {0} characters"
            },
            phone: {
                required: "Please enter your phone number"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            typeOfEvent: {
                required: "Please enter type of event",
                minlength: "Please enter at least {0} characters"
            },
            preferred: {
                required: "Please enter preferred date",
            },
            guest: {
                required: "Please enter guest count",

            },
            hear: {
                required: "Please enter some text",
                minlength: "Please enter at least {0} characters"
            }
        }

    });


    jQuery(".kopa-form-10").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            subject: {
                required: true,
            },
            msg: {
                required: true,
                minlength: 10,
            },
        },

        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please choose a subject",
            },
            msg: {
                required: "Please enter your descriptions",
                minlength: "Please enter at least {0} characters"
            },
        }

    });


    /*_____________ module booking _____________*/
    jQuery(".kopa-navi").on('click', function () {
        jQuery(".kopa-navi").removeClass("active");
        jQuery(this).addClass("active");

        jQuery(".kopa-content").removeClass("show");
        var content = jQuery(this).children("a").attr('href');
        jQuery(content).addClass("show");

    });

    jQuery(".kopa-navi-2").on('click', function () {
        jQuery(".kopa-navi-1").addClass("active");
    });


    /*_____________ tee time detail _____________*/
    jQuery(".rate-choose").on('click', function () {
        jQuery(".rate-choose").removeClass("active");
        jQuery(this).addClass("active");

        if (jQuery(".rate-choose.active").length && jQuery(".golfer.active").length) {
            jQuery(".rate-detail").slideDown();
            jQuery(".notification").slideUp();

        }

    });

    jQuery(".golfer").on('click', function () {
        jQuery(".golfer").removeClass("active");
        jQuery(this).addClass("active");

        if (jQuery(".rate-choose.active").length && jQuery(".golfer.active").length) {
            jQuery(".rate-detail").slideDown();
            jQuery(".notification").slideUp();
        }

    });


    jQuery(".open-menu-3").on('click', function () {
        jQuery(".kopa-menu-3").slideDown();
    });
    jQuery(".close-menu-3").on('click', function () {
        jQuery(".kopa-menu-3").slideUp();
    });


    /*_____________  _____________*/
    var kopa_dropdown_btn_01 = jQuery(".kopa-dropdown-btn");
    if (kopa_dropdown_btn_01.length) {
        jQuery(kopa_dropdown_btn_01).each(function () {
            jQuery(this).on('click', function () {
                jQuery(this).next().slideToggle();

            });
        });
    }

    var preSearch = jQuery(".preSearch");
    if (preSearch.length) {
        jQuery(preSearch).each(function () {
            jQuery(this).on('click', function () {
                jQuery(this).next().find(".search-input").focus();
            });
        });
    }


    jQuery(".preSearch-4").click(function () {
        jQuery(this).addClass("hidden");
        jQuery(".search-box-4 form").addClass("show");
        jQuery(".search-box-4 form input").focus();
    });


    /*_____________  _____________*/
    var menu_xs = jQuery(".menu-xs");
    if (menu_xs.length) {
        menu_xs.each(function () {
            jQuery(this).on('click', function () {
                jQuery(this).next().slideToggle();
            });
        });
    }
    ////////////////////////////////////////////
});


/*_____________ menu right to left _____________*/

var mmenu_ul = jQuery('.main-nav').find('.main-menu'),
    mmenu_li = mmenu_ul.children('li'),
    sfmmenu_ul = jQuery('.main-nav').find('.sf-menu');

function menu_rtl(mli_child, mli_osl, mlic_w) {
    mli_child.each(function () {
        var mlic_num = jQuery(this).parents('li').length - 1,
            mlic_osl = mli_osl + (mlic_w * mlic_num),
            mlic_osr = jQuery(window).width() - (mlic_osl);
        if (mlic_w > mlic_osr) {
            jQuery(this).addClass('rtl');
        }
    });
}

function mmenu_sub_direction(mmenu_ul, mmenu_li, sfmmenu_ul) {
    mmenu_li.each(function () {
        var mli_osl = jQuery(this).offset().left,
            mli_osr = jQuery(window).width() - (mli_osl + jQuery(this).outerWidth()),
            mli_child = jQuery(this).find('ul'),
            mlic_w = mli_child.outerWidth();

        menu_rtl(mli_child, mli_osl, mlic_w);

        var mlic_rtl = jQuery('.rtl');
        mlic_rtl.each(function () {
            var mlic_rtl_num = jQuery(this).parents('.rtl').length + 1,
                mlic_rtl_osr = mli_osr + (mlic_w * mlic_rtl_num),
                mlic_rtl_osl = jQuery(window).width() - (mlic_rtl_osr);
            if (mlic_rtl_osl < 0) {
                jQuery(this).removeClass('rtl');
            }
        });

    });
}


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


window.onscroll = function () {
    makeItSticky()
};

var header = document.getElementById("web-header");
var sticky = header.offsetTop;

function makeItSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}
