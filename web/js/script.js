// Banner Slider

$(document).ready(function () {
  $(".bannerText").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".bannerImage",
    autoplay: true,
    // fade: true,
    // cssEase: "linear",
    speed: 800,
  });
  $(".bannerImage").slick({
    asNavFor: ".bannerText",
    dots: false,
    arrows: false,
    fade: true,
    cssEase: "linear",
  });
});

// =========== Logo SLider =====================

$(document).ready(function () {
  $(".logoSlider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 0,
    speed: 3000,
    variableWidth: !0,
    cssEase: "linear",
    // prevArrow: $(".prev"),
    // nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 2,
        },
      },
    ],
  });
});
// =========== Logo SLider 2 =====================

$(document).ready(function () {
  $(".logoSliderTwo").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // infinite: !0,
    autoplay: !0,
    // autoplaySpeed: 0,
    speed: 3000,
    // variableWidth: !0,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 2,
        },
      },
    ],
  });
});
// =========== Logo SLider 2 =====================
$(document).ready(function () {
  $(".newsSlider").slick({
    slidesToShow: 1.001, // Center one slide
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          centerMode: false,
          slidesToShow: 1, // Keep one slide centered on smaller screens
        },
      },
    ],
  });
});

// ===========Sticky-header=====================

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

$(document).ready(function () {
  function initSlider() {
    if ($(window).width() <= 636) {
      if (!$(".banner-box-slider").hasClass("slick-initialized")) {
        $(".banner-box-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    } else {
      if ($(".banner-box-slider").hasClass("slick-initialized")) {
        $(".banner-box-slider").slick("unslick");
      }
    }
  }

  // Initialize slider on document ready
  initSlider();

  // Reinitialize slider on window resize
  $(window).resize(function () {
    initSlider();
  });
});

// Mobile Sub Menu

jQuery(document).ready(function ($) {
  // Define the SVG icon
  const toggleIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <g clip-path="url(#clip0_1199_608)">
    <path d="M0.943785 3.80183C1.0669 3.80167 1.18883 3.82588 1.30253 3.87308C1.41624 3.92028 1.51948 3.98953 1.60628 4.07683L6.40191 8.87183C6.54701 9.01697 6.71927 9.1321 6.90887 9.21065C7.09847 9.2892 7.30168 9.32962 7.50691 9.32962C7.71213 9.32962 7.91535 9.2892 8.10495 9.21065C8.29455 9.1321 8.46681 9.01697 8.61191 8.87183L13.4 4.08308C13.4865 3.99354 13.59 3.92212 13.7043 3.87299C13.8187 3.82385 13.9417 3.79799 14.0662 3.79691C14.1907 3.79583 14.3142 3.81955 14.4294 3.86669C14.5446 3.91383 14.6493 3.98344 14.7373 4.07146C14.8253 4.15949 14.8949 4.26416 14.9421 4.37938C14.9892 4.49459 15.0129 4.61804 15.0118 4.74252C15.0107 4.867 14.9849 4.99002 14.9358 5.1044C14.8866 5.21878 14.8152 5.32223 14.7257 5.40871L9.93753 10.1975C9.29248 10.8413 8.41831 11.2029 7.50691 11.2029C6.59551 11.2029 5.72134 10.8413 5.07628 10.1975L0.28066 5.40246C0.149462 5.27134 0.0601057 5.10426 0.0238969 4.92235C-0.012312 4.74043 0.00625437 4.55187 0.0772465 4.38051C0.148239 4.20915 0.268466 4.0627 0.422715 3.95969C0.576964 3.85669 0.758303 3.80175 0.943785 3.80183Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_1199_608">
      <rect width="15" height="15" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

  // Add the toggle button with the SVG icon to menu items with children
  $(".mobile_left_menu  .menu-item-has-children").append(
    '<span class="sub-menu-toggle">' + toggleIcon + "</span>"
  );

  // Handle click event for sub-menu toggle
  $(".sub-menu-toggle").on("click", function () {
    $(this).siblings(".sub-menu").slideToggle();
    $(this).toggleClass("active");
  });
});
