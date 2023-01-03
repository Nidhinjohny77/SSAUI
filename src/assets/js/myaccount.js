$(document).ready(function () {
  $(".db-sidebar").stickit({
    top: 108,
    screenMinWidth: 991,
  });

  $("#dbSidebarSwitch").on("click", function () {
    $(".db-sidebar").toggleClass("show");
  });

  //Exclusive Slider [Multiple]
  $(".db-ppt-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
