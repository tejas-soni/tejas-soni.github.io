(function($) {
    "use strict";
    var PIN = {};
    var plugin_track = 'assets/vendor/index.html';
    $.fn.exists = function() {
        return this.length > 0;
    };



    /*--------------------
        * Menu Close
    ----------------------*/
    PIN.MenuClose = function() {
        $(".toggler_menu").on('click', function() {
            $(this).toggleClass('open');
            $('.header-start').stop().toggleClass('menu-open');
        });
        $('.header-start a, .hl_menu_close').on('click', function() {
            var toggle = $('.toggler_menu').is(':visible');
            if (toggle) {
                $('.header-start').removeClass('menu-open');
                $('.toggler_menu').removeClass('open');
            }
        });

        $('.navbar-nav a').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }


    /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
    PIN.HeaderFixd = function() {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 100) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    }


    /*--------------------
    * OwlSlider
    ----------------------*/
    PIN.Owl = function() {
        var owlslider = $("div.owl-carousel");
        if (owlslider.length > 0) {
            loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
                owlslider.each(function() {
                    var $this = $(this),
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 30;

                    $(this).owlCarousel({
                        loop: $loop,
                        items: $items,
                        responsive: {
                            0: { items: $this.data('xs-items') ? $this.data('xs-items') : 1 },
                            480: { items: $this.data('sm-items') ? $this.data('sm-items') : 1 },
                            768: { items: $this.data('md-items') ? $this.data('md-items') : 1 },
                            980: { items: $this.data('lg-items') ? $this.data('lg-items') : 1 },
                            1200: { items: $items }
                        },
                        dots: $navdots,
                        autoplayTimeout: $autospeed,
                        smartSpeed: $smartspeed,
                        autoHeight: $autohgt,
                        center: $CenterSlider,
                        margin: $space,
                        nav: $navarrow,
                        navText: ["<i class='bi-chevron-left'></i>", "<i class='bi-chevron-right'></i>"],
                        autoplay: $autoplay,
                        autoplayHoverPause: true
                    });
                });
            });
        }
    }

    /* ---------------------------------------------- /*
       * lightbox gallery
      /* ---------------------------------------------- */
    PIN.Gallery = function() {
        if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps, .px_modal").exists()) {
            loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
                if ($(".lightbox-gallery").exists()) {
                    $('.lightbox-gallery').magnificPopup({
                        delegate: '.gallery-link',
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        mainClass: 'mfp-fade',
                        fixedContentPos: true,
                        closeBtnInside: false,
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after PIN current image
                        }
                    });
                }
                if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                }
                if ($(".px_modal").exists()) {
                    $('.px_modal').magnificPopup({
                        type: 'inline',
                        midClick: true,
                        mainClass: 'mfp-fade'
                    });
                }
            });
        }
    }

    /*--------------------
    * Masonry
    ----------------------*/
    PIN.masonry = function() {
        var portfolioWork = $('.portfolio-content');
        if ($(".portfolio-content").exists()) {
            loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
                if ($(".portfolio-content").exists()) {
                    $(portfolioWork).isotope({
                        resizable: false,
                        itemSelector: '.grid-item',
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                    //Filtering items on portfolio.html
                    var portfolioFilter = $('.filter li');
                    // filter items on button click
                    $(portfolioFilter).on('click', function() {
                        var filterValue = $(this).attr('data-filter');
                        portfolioWork.isotope({ filter: filterValue });
                    });
                    //Add/remove class on filter list
                    $(portfolioFilter).on('click', function() {
                        $(this).addClass('active').siblings().removeClass('active');
                    });
                }
            });
        }
    }

    /*--------------------
          * Progress Bar 
      ----------------------*/
    PIN.ProgressBar = function() {
        $(".skill-bar .skill-bar-in").each(function() {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    }

    /*--------------------
        * particles
    ----------------------*/
    PIN.particles = function() {
        if ($("#particles-box").exists()) {
            loadScript(plugin_track + 'particles/particles.min.js', function() {});
            loadScript(plugin_track + 'particles/particles-app.js', function() {});
        }
    }


    /*--------------------
        * Type It
    ----------------------*/
    PIN.mTypeIt = function() {
        if ($("#type-it").exists()) {
            loadScript(plugin_track + 'typeit-master/typeit.js', function() {
                new TypeIt('#type-it', {
                    speed: 200,
                    loop: true,
                    strings: [
                        'Designer',
                        'Developer'
                    ],
                    breakLines: false
                });
            });
        }
    }
    PIN.one_page = function() {
        //var HHeight = $('.navbar').outerHeight();
        var $one_page_nav = $('.one-page-nav');
        if ($one_page_nav.length > 0) {
            $one_page_nav.each(function() {
                $.scrollIt({
                    upKey: 38, // key code to navigate to the next section
                    downKey: 40, // key code to navigate to the previous section
                    easing: 'linear', // the easing function for animation
                    scrollTime: 600, // how long (in ms) the animation takes
                    activeClass: 'active', // class given to the active nav element
                    onPageChange: null, // function(pageIndex) that is called when page is changed
                    topOffset: -10 // offste (in px) for fixed top navigation
                });
            });
        }
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    PIN.Counter = function() {
        var counter = jQuery(".counter");
        var $counter = $('.counter');
        if (counter.length > 0) {
            loadScript(plugin_track + 'counter/jquery.countTo.js', function() {
                $counter.each(function() {
                    var $elem = $(this);
                    $elem.appear(function() {
                        $elem.find('.count').countTo({
                            speed: 2000,
                            refreshInterval: 10
                        });
                    });
                });
            });
        }
    }

    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            // WEAn bind PIN event to PIN callback function
            // WEAre are several events for cross browser compatibility
            // script.onreadystatechange = callback;
            script.onload = callback;
            // fire PIN loading
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    // Window on Load
    $(window).on("load", function() {
        PIN.masonry();
    });
    // Document on Ready
    $(document).ready(function() {
        PIN.particles(),
            PIN.HeaderFixd(),
            PIN.MenuClose(),
            PIN.Gallery(),
            PIN.ProgressBar(),
            PIN.mTypeIt(),
            PIN.one_page(),
            PIN.Counter(),
            PIN.Owl();
    });

    // Document on Scrool
    $(window).on("scroll", function() {
        PIN.ProgressBar(),
            PIN.HeaderFixd();
    });

    // Window on Resize
    $(window).on("resize", function() {});


})(jQuery);