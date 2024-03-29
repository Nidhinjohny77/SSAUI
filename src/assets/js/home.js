$(document).ready(function () {
  //Exclusive Slider [Multiple]
  $(".exclusive-multiple").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $("#priceRangeSlider").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 100000,
    from: 20000,
    to: 60000,
    prefix: "£",
    prettify_enabled: true,
    prettify_separator: ",",
  });
});
