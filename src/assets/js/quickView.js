function initializeQuickView() {
  $("#pGalleryMain").slick({
    //fade: true,
    infinite: false,
    arrows: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pgi-angle-narrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pgi-angle-narrow-right"></i></button>',
  });

  //Property Expand popup [managing active class]
  var relTrgt = undefined;
  $("#expandViewPopup").on("show.bs.modal", function (event) {
    relTrgt = event.relatedTarget.offsetParent.offsetParent;
    relTrgt.classList.add("active-item");
  });

  $("#expandViewPopup").on("shown.bs.modal", function (event) {
    $("#pGalleryMain").slick("setPosition");
  });

  $("#expandViewPopup").on("hidden.bs.modal", function (event) {
    relTrgt.classList.remove("active-item");
  });
}
