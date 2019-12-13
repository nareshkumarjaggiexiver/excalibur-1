(function ($) {
	'use strict';


	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
					$('#back-top').fadeIn(500);
				} else {
					$('.header_area').removeClass('navbar_fixed');
					$('#back-top').fadeOut(500);
				}
			});
		}
	}
	navbarFixed();

	// sticky
	// TOP Menu Sticky
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 400) {
				$("#sticky-header").removeClass("sticky");
				$('#back-top').fadeOut(500);
			} else {
				$("#sticky-header").addClass("sticky");
				$('#back-top').fadeIn(500);
			}
		});
	/* ---------------------------------------------
        scroll body to 0px on click
     --------------------------------------------- */
	$('#back-top a').on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	/* ---------------------------------------------
		Isotope js Starts
		--------------------------------------------- */
	$(window).on('load', function () {
		$('.project-filter ul li').on('click', function () {
			$('.project-filter ul li').removeClass('active');
			$(this).addClass('active');

			var data = $(this).attr('data-filter');
			$workGrid.isotope({
				filter: data
			});
		});

		if (document.getElementById('portfolio')) {
			var $workGrid = $('.portfolio-grid').isotope({
				itemSelector: '.all',
				percentPosition: true,
				masonry: {
					columnWidth: '.all'
				}
			});
		}
	});

	/*----------------------------------------------------*/
	/* Start Magnific Pop Up
	/*----------------------------------------------------*/
	if ($('.project-gal').length > 0) {
		$('.project-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	$('.video-play-box').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.play-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	/*----------------------------------------------------*/
	/*  End  Magnific Pop Up
	/*----------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  screen slider
	-------------------------------------------------------------------------------*/
	if ($('#screen-active').length) {
		$('#screen-active').owlCarousel({
			items: 5,
			nav: false,
			dots: true,
			loop: true,
			margin: 30,
			singleItem: false,
			autoplay: 2500,
			slideSpeed: 400,
			paginationSpeed: 500,
			smartSpeed: 800,
			responsiveClass: true,
			autoplayHoverPause: true,
			center:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992:{
					items: 3,
				},
				1280: {
					items: 3
				},
				1665: {
					items: 3
				}
			}
		});
	}
	/*-------------------------------------------------------------------------------
	  screen slider end
	-------------------------------------------------------------------------------*/
	/*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			autoplay: 2500,
			autoplayHoverPause: true,
			responsiveClass: true,
			slideSpeed: 300,
			paginationSpeed: 500,
			navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				}
			}
		})
	}
	/*-------------------------------------------------------------------------------
	  End testimonial slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
	if ($('#testimonial2').length) {
		$('#testimonial2').owlCarousel({
			loop: true,
			margin: 15,
			nav: true,
			autoplay: 2500,
			dots: false,
			autoplayHoverPause: true,
			responsiveClass: true,
			slideSpeed: 300,
			paginationSpeed: 500,
			navText: ['<img src="img/left-arrow.png">', '<img src="img/right-arrow.png">'],
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				600: {
					items: 2,
				},
				1200: {
					items: 3
				}
			}
		})
	}
	/*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
	if ($('.testimonial-carousel3').length) {
		$('.testimonial-carousel3').owlCarousel({
			center:true,
			loop: true,
			margin: 30,
			nav: true,
			autoplayHoverPause: true,
			dots: false,
			autoplay: 2500,
			responsiveClass: true,
			slideSpeed: 300,
			paginationSpeed: 500,
			navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				600: {
					items: 2,
					nav: false
				},
				1200: {
					items: 4
				}
			}
		})
	}
	/*-------------------------------------------------------------------------------
	  End testimonial slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  Portfolio slider
	-------------------------------------------------------------------------------*/
	if ($('#portfolioDetails').length) {
		$('#portfolioDetails').owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			autoplay: 2500,
			nav: false,
			autoplayHoverPause: true,
			dots: false,
			responsiveClass: true,
			slideSpeed: 300,
			paginationSpeed: 500,
			navText: ['<img src="img/left-arrow.png"> Previous', 'Next <img src="img/right-arrow.png">']
		})
	}
	/*-------------------------------------------------------------------------------
	  End Portfolio slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  Portfolio slider
	-------------------------------------------------------------------------------*/
	if ($('#portfolioDetails-1').length) {
		$('#portfolioDetails-1').owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			autoplay: 2500,
			nav: false,
			autoplayHoverPause: true,
			dots: false,
			responsiveClass: true,
			slideSpeed: 300,
			paginationSpeed: 500,
			navText: ['<img src="img/left-arrow.png"> Previous Project', 'Next Project <img src="img/right-arrow.png">']
		})
	}
	/*-------------------------------------------------------------------------------
	  End Portfolio slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  Start Happy Client slider
	-------------------------------------------------------------------------------*/
	if ($('#happyClient').length) {
		$('#happyClient').owlCarousel({
			items: 5,
			nav: false,
			dots: true,
			loop: true,
			autoplayHoverPause: true,
			margin: 0,
			singleItem: false,
			autoplay: 2500,
			slideSpeed: 400,
			paginationSpeed: 500,
			smartSpeed: 800,
			responsiveClass: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsive: {
				0: {
					items: 2,
				},
				768: {
					items: 4
				},
				1280: {
					items: 4
				},
				1665: {
					items: 5
				}
			}
		});
	}
	/*-------------------------------------------------------------------------------
	  End Happy Client slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  Start Happy Client slider
	-------------------------------------------------------------------------------*/
	if ($('#happyClient2').length) {
		$('#happyClient2').owlCarousel({
			items: 5,
			nav: false,
			dots: true,
			loop: true,
			margin: 0,
			autoplayHoverPause: true,
			singleItem: false,
			autoplay: 2500,
			slideSpeed: 400,
			paginationSpeed: 500,
			smartSpeed: 800,
			responsiveClass: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsive: {
				0: {
					items: 2,
				},
				768: {
					items: 4
				},
				1280: {
					items: 4
				},
				1665: {
					items: 6
				}
			}
		});
	}
	/*-------------------------------------------------------------------------------
	  End Happy Client slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  Start Latest Project Slider
	-------------------------------------------------------------------------------*/
	if ($('#latestProject').length) {
		$('#latestProject').owlCarousel({
			items: 4,
			nav: true,
			dots: false,
			loop: true,
			margin: 10,
			singleItem: false,
			autoplay: 2500,
			slideSpeed: 400,
			autoplayHoverPause: true,
			paginationSpeed: 500,
			smartSpeed: 800,
			responsiveClass: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			navText: ['<img src="img/left-arrow.png">', '<img src="img/right-arrow.png">'],
			responsive: {
				0: {
					items: 1,
				},
				991: {
					items: 2,
					margin: 0
				},
				1280: {
					items: 3
				},
				1665: {
					items: 4
				}
			}
		});
	}
	/*-------------------------------------------------------------------------------
	  End Latest Project Slider
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	 testmonial6-active
	-------------------------------------------------------------------------------*/
	if ($('.testmonial6-active').length) {
		$('.testmonial6-active').owlCarousel({
			center:true,
			loop: true,
			margin: 0,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
			autoplay: 2500,
			responsiveClass: true,
			slideSpeed: 800,
			paginationSpeed: 1000,
			navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				1200: {
					items: 1
				}
			}
		})
	}
	/*-------------------------------------------------------------------------------
	  testmonial6-active end
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	team-v2-active
	-------------------------------------------------------------------------------*/
	if ($('.team-v2-active').length) {
		$('.team-v2-active').owlCarousel({
			center:false,
			loop: true,
			margin: 0,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
			autoplay: 2500,
			responsiveClass: true,
			slideSpeed: 800,
			paginationSpeed: 1000,
			navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false
				},
				600: {
					items: 2,
					nav: false,
					margin: 20,
				},
				1200: {
					items: 2
				}
			}
		})
	}
	/*-------------------------------------------------------------------------------
	  team-v2-active
	-------------------------------------------------------------------------------*/

	var owl = $('.portfolio-v9-active').owlCarousel({
		loop:true,
		nav:true,
		slideSpeed: 800,
		paginationSpeed: 1000,
		autoplayHoverPause: true,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:4,
				nav:false
			},
			1200:{
				items:4
			}
		}
	})
	var owl = $('.portfolio-v10-active').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		slideSpeed: 800,
		paginationSpeed: 1000,
		autoplayHoverPause: true,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false,
				margin:0
			},
			1000:{
				items:3,
				nav:true
			},
			1200:{
				items:3
			}
		}
	})

	var owl = $('.portfolio-details-active').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		slideSpeed: 800,
		paginationSpeed: 1000,
		autoplayHoverPause: true,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false,
				margin:0
			},
			1000:{
				items:1,
				nav:true
			},
			1200:{
				items:1
			}
		}
	})

	// portfolio-details-v3-active
	var owl = $('.portfolio-details-v3-active').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		autoplayHoverPause: true,
		slideSpeed: 800,
		paginationSpeed: 1000,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false,
				margin:0
			},
			1000:{
				items:1,
				nav:true
			},
			1200:{
				items:1
			}
		}
	})

	// portfolio-details-v4-active
	var owl = $('.portfolio-details-v4-active').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		slideSpeed: 800,
		autoplayHoverPause: true,
		paginationSpeed: 1000,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false,
				margin:0
			},
			1000:{
				items:1,
				nav:true
			},
			1200:{
				items:1
			}
		}
	})

	// portfolio-banner-small-active
	var owl = $('.portfolio-banner-small-active').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		slideSpeed: 800,
		autoplayHoverPause: true,
		paginationSpeed: 1000,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false,
				margin:0
			},
			1000:{
				items:1,
				nav:true
			},
			1200:{
				items:1
			}
		}
	})

	// portfolio-v11-active
	var owl = $('.portfolio-v11-active').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		slideSpeed: 800,
		autoplayHoverPause: true,
		paginationSpeed: 1000,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false,
				margin:30
			},
			768:{
				items:2,
				nav:false,
				margin:30
			},
			1000:{
				items:3,
				nav:true
			},
			1200:{
				items:3
			}
		}
	})
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
	// $('ul#navigation').slicknav({
	// 	prependTo: ".mobile_menu"
	// });


// nice-select

if ($('.main-faq-area').length){
	$('select').niceSelect();
}

	// landing-product-active
	var owl = $('.landing-product-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		slideSpeed: 800,
		paginationSpeed: 1000,
		autoplayHoverPause: true,
		dots: true,
		navText: ["<div class='left-arrow'><i class='ti-arrow-left'></i></div>", "<div class='right-arrow'><i class='ti-arrow-right'></i></div>"],
		responsive:{
			0:{
				items:1,
				nav:false,
				dots: false
			},
			600:{
				items:1,
				nav:false,
				dots: false
			},
			768:{
				items:1,
				dots: false
			},
			1000:{
				items:1,
				dots: false
			},
			1200:{
				items:1,
				dots: false
			},
			1800:{
				items:1,
				dots: true
			}
		}
	})

	

	// owl.owlcarousel2_filter( '.blue' );

	$( '.owl-filter-bar' ).on( 'click', '.item', function() {

		var $item = $(this);
		var filter = $item.data( 'owl-filter' )
	
		$item.addClass( 'current' ).siblings().removeClass( 'current' );
	
		owl.owlcarousel2_filter( filter );
	
	} )
	/*-------------------------------------------------------------------------------
	  portfolio-virson-9 active here
	-------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
	  Wow JS
	-------------------------------------------------------------------------------*/

	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}
	/*-------------------------------------------------------------------------------
	Wow JS
  -------------------------------------------------------------------------------*/



	/*----------------------------------------------------*/
	/*  Google map js
    /*----------------------------------------------------*/
	if ($('#mapBox').length) {
		var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dcdfe6"
            }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              color: "#808080"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#dcdfe6"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              weight: 1.8
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d7d7d7"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ebebeb"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#a7a7a7"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#efefef"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#696969"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#737373"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d6d6d6"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {},
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        }
      ]
    });
	}

	  // counter 
	  var counter = $('.counter');
	  if(counter.length){
		counter.counterUp({
			delay: 1,
			time: 10000
		  });
	  }
	  
	/*----------------------------------------------------*/
	/* Ajax Chimp js
    /*----------------------------------------------------*/
	if ($('#mc_embed_signup').length > 0) {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}

    $(".offcanvas-menu-icon").on("click", function(){
		$(".offcanvas-main-menu").addClass("active");
		$(".ovaelay-offcanvas").addClass("active");
	});
	
    $(".offcanvsa-menu-close,.ovaelay-offcanvas").on("click", function(){
        $(".offcanvas-main-menu").removeClass("active");
        $(".ovaelay-offcanvas").removeClass("active");
	});
	
	// sub-menu
	$(".sub-menu").on("click", function(){
        $(".arrow-icon").toggleClass("roted");
    });
	
	// arrow-icon
	$(".arrow-icon").on("click", function(){
        $(".submenu-inner").toggleClass("active");
    });

	// overlay
	$(".add-to-cart,.profile-active").on("click", function(){
		$(".ovaelay-offcanvas").addClass("active");
	})
	// products-details
	$(".view-details-btn").on("click", function(){
		$(".product-details-area").addClass("active");
		$(".ovaelay-offcanvas").addClass("active");
	})
	// offcanvsa-menu-close
	$(".offcanvsa-menu-close ,.ovaelay-offcanvas").on("click", function(){
		$(".product-details-area").removeClass("active");
		$(".product-details-area").removeClass("active");
		$(".mini-card-area").removeClass("active");
		$(".myprofile-area").removeClass("active");
	})

	// add-to-cart
	$(".add-to-cart").on("click", function(){
		$(".mini-card-area").addClass("active");
	})

	// profile-active
	$(".profile-active").on("click" ,function(){
		$(".myprofile-area").addClass("active");
	})
	// button
	$("button").on("click",function(){
		$(".card-border").addClass("active");
	})




})(jQuery);
