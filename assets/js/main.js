(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
  -------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.sigma_preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Team Socials Trigger
  -------------------------------------------------------------------------------*/
  $("a.trigger-team-socials").on('click', function(e) {
    e.preventDefault();
    $('.sigma_sm').toggleClass('visible');
  });

  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".sigma_search-trigger").on('click', function(e) {
    e.preventDefault();
    $(".sigma_search-form-wrapper").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
  -------------------------------------------------------------------------------*/
  $(".aside-trigger-right").on('click', function() {
    var $el = $(".sigma_aside-right-panel");
    $el.toggleClass('open');
    if ($el.hasClass('open')) {
      setTimeout(function() {
        $el.find('.sidebar').fadeIn();
      }, 300);
    } else {
      $el.find('.sidebar').fadeOut();
    }
  });

  $(".aside-trigger-left").on('click', function() {
    $(".sigma_aside-left").toggleClass('open');
  });

  $(".sigma_aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
    -------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();

  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({type: 'iframe'});
  $('.popup-vimeo').magnificPopup({type: 'iframe'});
  $('.popup-video').magnificPopup({type: 'iframe'});
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*-------------------------------------------------------------------------------
  Countdown
  -------------------------------------------------------------------------------*/
  $(".sigma_countdown-timer").each(function() {
    var $this = $(this);
    $this.countdown($this.data('countdown'), function(event) {
      $(this).text(event.strftime('%D days %H:%M:%S'));
    });
  });

  /*-------------------------------------------------------------------------------
  Counter
  -------------------------------------------------------------------------------*/

  $(".counter").each(function() {
    var $this = $(this);
    $this.one('inview', function(event, isInView) {
      if (isInView) {
        $this.countTo({speed: 2000});
      }
    });
  });

  /*-------------------------------------------------------------------------------
  Progress bar on view
  -------------------------------------------------------------------------------*/
  $(".sigma_progress").each(function() {
    var progressBar = $(this).find(".progress-bar");
    var progressCount = $(this).find(".sigma_progress-count");
      $(progressBar).on('inview', function(event, isInView) {
        if (isInView) {
          $(progressBar).animate({
            width:$(progressBar).attr("aria-valuenow") + "%"
          });
          $(progressCount).animate({
            left:$(progressBar).attr("aria-valuenow") + "%"
          });
          setTimeout(function(){
            $(progressBar).closest('.sigma_progress').addClass('active');
          }, 4000);
        }
      });
   });

  /*-------------------------------------------------------------------------------
  Progress bar on view
  -------------------------------------------------------------------------------*/
  $(".sigma_progress-round").each(function() {
    var animateTo = $(this).data('to'),
      $this = $(this);
    $this.one('inview', function(event, isInView) {
      if (isInView) {
        $this.css({'stroke-dashoffset': animateTo});
      }
    });
  });

  /*-------------------------------------------------------------------------------
  Testimonials slider
  -------------------------------------------------------------------------------*/
  $(".sigma_testimonial-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Arrow Slider
  -------------------------------------------------------------------------------*/
  $(".basic-arrow-slider").each(function(){

    var $this = $(this);

    $this.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      nextArrow: $this.closest('.basic-arrow-slider-wrap').find('.next'),
      prevArrow: $this.closest('.basic-arrow-slider-wrap').find('.prev'),
      autoplay: true
    });
  });

  /*-------------------------------------------------------------------------------
  Dots Slider
  -------------------------------------------------------------------------------*/
  $(".basic-dot-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true
  });

  /*-------------------------------------------------------------------------------
  Banner slider (Home v3)
  -------------------------------------------------------------------------------*/
  $(".banner-3 .sigma_banner-slider, .banner-2 .sigma_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });

  /*-------------------------------------------------------------------------------
  Portfolio slider
  -------------------------------------------------------------------------------*/
  $(".portfolio-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Team slider
  -------------------------------------------------------------------------------*/
  $(".team-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $(".team-slider-2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Shop slider
  -------------------------------------------------------------------------------*/

  $(".shop-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $(".shop-slider-2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Shop Detail Slider
  -------------------------------------------------------------------------------*/

  $(".detail-slider-1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: false,
      arrows: false,
      dots: false,
      asNavFor: '.detail-slider-2',
  });

  $(".detail-slider-2").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: false,
      arrows: false,
      dots: false,
      focusOnSelect: true,
      asNavFor: '.detail-slider-1',
      responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4,
            },
          }, ],
  });

  /*-------------------------------------------------------------------------------
  Range Slider
  -------------------------------------------------------------------------------*/

  $(".js-range-slider").ionRangeSlider({
      type: "single",
      grid: true,
      min: 20,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({itemSelector: '.masonry-item'});
  });

  /*------------------------------------------------------------------------------
  Isotope
  ------------------------------------------------------------------------------*/

  function doIsotope() {
    var $portfolioGrid = '';

    $('.masonry').imagesLoaded(function() {
      $portfolioGrid = $('.portfolio-filter').isotope({
        itemSelector: '.col-lg-4',
        percentPosition: true,
        masonry: {
          columnWidth: '.col-lg-4'
        }
      });
    });

    $('.filter-items').on('click', '.portfolio-trigger', function() {
      var filterValue = $(this).attr('data-filter');
      $portfolioGrid.isotope({filter: filterValue});
    });

    $('.portfolio-trigger').on('click', function(e) {
      $(this).closest('.filter-items').find('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

  }
  doIsotope();

  /*-------------------------------------------------------------------------------
  Add / Subtract Quantity
  -------------------------------------------------------------------------------*/
  $('.minus-btn').on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                var $input = $this.closest('.quantity-box').find('input');
                var value = parseInt($input.val());
                if (value > 1) {
                    value = value - 1;
                } else {
                    value = 1;
                }
                $input.val(value);
            });
            $('.plus-btn').on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                var $input = $this.closest('.quantity-box').find('input');
                var value = parseInt($input.val());
                if (value < 100) {
                    value = value + 1;
                } else {
                    value = 100;
                }
                $input.val(value);
            });

  /*-----------------------------------
    Back to Top
    -----------------------------------*/
  $('.sigma_back-to-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // init wow js
  new WOW().init();

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();

  });

  //On resize events
  $(window).on('resize', function() {});

})(jQuery);
