function initializePropertyDetails() {
  $("#pGalleryMain").slick({
    fade: true,
    infinite: false,
    arrows: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-narrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-narrow-right"></i></button>',
    asNavFor: "#pGalleryPager",
  });

  $("#pGalleryPager").slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: "#pGalleryMain",
  });

  $("#pdatilNavbar").stickit({
    top: 84,
    screenMinWidth: 975,
    scope: StickScope.Document,
    zIndex: 300,
  });
  $(".pdetail-sidebar").stickit({
    top: 150,
    screenMinWidth: 1200,
  });

  $("#floorplanGallery").slick({
    arrows: true,
    infinite: false,
    asNavFor: "#floorplanGalleryNav",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-narrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-narrow-right"></i></button>',
  });

  $("#floorplanGalleryNav").slick({
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    asNavFor: "#floorplanGallery",
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-narrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-narrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".neighbourhood-accordion")
    .on("show.bs.collapse", function (e) {
      e.target.parentElement.classList.add("active");
    })
    .on("hide.bs.collapse", function (e) {
      e.target.parentElement.classList.remove("active");
    });

  $(".photogallery-mainview").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
    mainClass: "mfp-with-zoom", // this class is for CSS animation below
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  $("#pGalleryMore").on("click", function () {
    $(".photogallery-mainview").magnificPopup("open");
  });

  //Unit Dropdown
  $(".unit-dropdown .dropdown-item").click(function () {
    var selText = $(this).text();
    $(this)
      .parents(".unit-dropdown")
      .find(".dropdown-toggle")
      .html(selText + ' <span class="caret"></span>');
  });
}

function propertyDetailsWindowResize(){
  $(window).resize(function () {
    $("#pGalleryPager").slick("setPosition");
  });
}

