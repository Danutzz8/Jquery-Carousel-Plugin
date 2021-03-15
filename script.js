// console.log('test');

// $(document).ready(function(){

//   $('.slider').slick({
//     accessibility: true,
//     arrows: true,
//     prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
//     nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
//     autoplay: true,
//     autoplaySpeed: 5000,
//     centerMode: false,
//     centerPadding: '50px',
//     cssEase: 'ease',
//     infinite: true,
//     initialSlide: 0,
//     pauseOnFocus: true,
//   });
// });

$('.responsive').slick({
    accessibility: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    initialSlide: 0,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });