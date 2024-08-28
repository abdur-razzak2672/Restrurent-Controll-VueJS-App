'use strict'
$(document).ready(function () {

    /* page load as iframe */
    if (self !== top) {
        $('body').addClass('iframe');
    } else {
        $('body').removeClass('iframe');
    }

    /* active link url */
    var url = window.location;
    $(".header .navbar-nav a").removeClass("active").parent().removeClass("active").closest('.nav-item').removeClass("active");
    var element = $(".header .navbar-nav a").filter(function () {
        return this.href == url;
        alert('url')
    }).addClass("active").parent().addClass("active").closest('.nav-item').addClass("active");
  
    
});

function megamenu() {
    $('.megamenu').each(function () {
        $(this).css({
            top: $('.header').height()
        })
    });
}

function searchglobal() {
    if ($(window).width() < 1281) {
        $('.search-btn').on('click', function () {
            $('.search').slideDown();
        });
        $('.main-container').on('click', function () {
            $('.search').slideUp();
        });
    } else {
        $('.search').css('display', "inline-block");
    }
}

(function ($) {
    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

})(jQuery);


$(window).on('load', function () {
    setTimeout(function () {
        $('.pageloader').fadeOut('slow');
    }, 500);


    /* header height and main container padding top fixed header */
    if ($('.header').hasClass('fixed-top') === true) {
        if ($('.main-container > div:first-child').hasClass('banner-hero') === true) {
            $('.header + .main-container').css('padding-top', '0');
        } else {
            $('.header + .main-container').css('padding-top', $('.header').outerHeight() + 15);
        }
    } else {
        $('.header + .main-container').css('padding-top', '15px');
    }

    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30) {
        $('.header').addClass('active');
        setTimeout(function () {
            megamenu();
        }, 300);

    } else {
        $('.header').removeClass('active');
        setTimeout(function () {
            megamenu();
        }, 300);
    }

    /* sidemenu close */
    $('.main-container').on('click', function () {
        if ($('.header .navbar-collapse.collapse').hasClass('show') === true) {
            $('.header .navbar-collapse.collapse').removeClass('show')
        }
        if ($('.sidebar-right').hasClass('active') === true) {
            $('.sidebar-right').removeClass('active');
            $('.colorsettings').removeClass('active')
        }
    })

    /* .search button click mobile device */
    if ($(window).width() < 1281) {
        searchglobal()
    }

    /* Background */
    $('.background').each(function () {
        var imgpath = $(this).find('img');
        $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
        imgpath.hide();
    })

    /* Iframes components preview resizing for devices. */
    $('.device-selection button.btn').on('click', function () {
        if ($(this).hasClass('active') !== true) {
            var parentcurrent = $(this).parent().find('.btn.active').attr('data-class');
            var parentclass = $(this).attr('data-class');
            $(this).parent().find('.btn').removeClass('active');
            $(this).addClass('active').closest('.demo-view').find('.iframeselements').addClass(parentclass).removeClass(parentcurrent);
        } else {

        }

    });

    /* nav small btn expand collapse and sidemenu open close */
    if ($('.header .navbar').hasClass('navbar-expand-all') === true) {
        $('.main-container').on('click', function () {
            $('.header .navbar .navbar-collapse').removeClass('show');
        });
    } else {}

    /* login row */
    $('.login-row').css('min-height', ($(window).height() - 80));


    /* number counter comes into viewport animate */
    $('.countertext').each(function () {
        var $this = $(this);
        $(this).rCounter({
            duration: 30
        });
    });

    /* home page hover text demo */
    $('.hover-text span').on('mouseenter', function () {
        $('.demolive-wraper').slideDown();
        $('.close-demolive-wrapper').fadeIn();

        $('.fullscreen .demolive-wraper').on('mouseleave', function () {
            var thiswrap = $(this);
            if (thiswrap.closest('.fullscreen').hasClass('active') === true) {
                thiswrap.slideUp();
                thiswrap.closest('.fullscreen').find('.close-demolive-wrapper').fadeOut();
            }
        });
    });

    $('.fullscreen.active, .close-demolive-wrapper').on('click', function () {
        $('.demolive-wraper').slideUp();
        $('.close-demolive-wrapper').fadeOut();
    });


    /* Fullscreen btn and area */
    $('.fullscreen-btn').on('click', function () {
        var fullscreenwrap = $(this).closest('.fullscreen');
        fullscreenwrap.toggleClass('active');
        $('body').toggleClass('overflow-hidden');
        if ($('.fullscreen').hasClass('active') !== true) {
            $('.demolive-wraper').slideDown();
        }
        if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    });

    /* scroll to top  button  */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').show();
            setTimeout(function () {
                $('.scrollup').addClass('active');
            }, 500);

        } else {
            $('.scrollup').hide();
            setTimeout(function () {
                $('.scrollup').removeClass('active');
            }, 500);
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.scrollup').addClass('atbottom');
    } else {
        $('.scrollup').removeClass('atbottom');
    }

    /* sidebar right color scheme */
    $('.colorsettings').on('click', function () {
        $(this).toggleClass('active');
        $('.sidebar-right').toggleClass('active');
    })


    /* loading button load more */
    $('.loading-btn ').on('click', function () {
        var thisbtn = $(this)
        thisbtn.addClass('active');

        setTimeout(function () {
            thisbtn.removeClass('active').blur();
        }, 3000)
    });


    /* smooth scroll */
    $(document).on('click', '.smoothscroll', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });

});

$(window).on('scroll', function () {
    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30 && $('.header').hasClass('fixed-top') === true) {
        $('.header').addClass('active');
        setTimeout(function () {
            megamenu();
        }, 300);
    } else {
        $('.header').removeClass('active');
        setTimeout(function () {
            megamenu();
        }, 300);
    }

    /* scroll to top  button  hide when at bottom of page*/
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.scrollup').addClass('atbottom');
    } else {
        $('.scrollup').removeClass('atbottom');
    }

});


$(window).on('resize', function () {
    /* login row */
    $('.login-row').css('min-height', ($(window).height() - 80));

    /* .search button click mobile device */
    if ($(window).width() < 1281) {
        searchglobal()
    }
});
