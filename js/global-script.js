// Если на проекте jQuery
$( document ).ready(function() {
  // code

  $("#main-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    center: false,
    animateOut: 'fadeOut',
    responsive : {
      0 : {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
        dots: true,
        nav: false
      },
      768 : {
        items: 1,
        dots: true,
        nav: false
      },
      992 : {
        items: 1,
      },
      1200 : {
        items: 1,
      },
      1800 : {
        items: 1,
      }
    }
  }).on('change.owl.carousel', function(event) {
    console.log(event);
  });

  $("#main-carousel-01").owlCarousel({
    items: 2,
    nav: false,
    dots: true,
    loop: true,
    margin: 10,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: false,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 2,
      },
      1200 : {
        items: 2,
      },
      1800 : {
        items: 2,
      }
    }
  });
  $("#main-carousel-02").owlCarousel({
    items: 2,
    nav: false,
    dots: true,
    loop: true,
    margin: 30,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: false,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 4,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });

  $(".gallery-carousel").owlCarousel({
    items: 2,
    nav: false,
    dots: true,
    loop: true,
    margin: 30,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: false,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 4,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
