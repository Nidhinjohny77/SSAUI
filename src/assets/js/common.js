function common() {
  //Enquiry Popup Button trigger [open and close]
  $("#enqPopupBtn").on("click", function () {
    $("#enqPopup").toggleClass("popup__isopen");
  });

  //Enquiry Popup close
  $("#enqPopupClose").on("click", function () {
    $("#enqPopup").removeClass("popup__isopen");
  });

  //Close popup when click on overlay
  $(".overlay").on("click", function () {
    $(this).parent(".popup").removeClass("popup__isopen");
    $("body").removeClass("scroll-disbled");
  });

  //Pushmenu
  $("#pushMenuBtn").on("click", function () {
    $("#pushMenu").toggleClass("popup__isopen");
    $("body").toggleClass("scroll-disbled");
  });

  //Enquiry Popup close
  $("#pushMenuClose").on("click", function () {
    $("#pushMenu").removeClass("popup__isopen");
    $("body").removeClass("scroll-disbled");
  });

  //Header Search
  $("#searchInput").focus(function () {
    $(this).parents(".header-search-container").addClass("popup__isopen");
  });
  $("#mobSearch").on("click", function () {
    $(this).parents(".header-search-container").addClass("popup__isopen");
  });

  //// Smooth scroll [.ss]
  $('a.ss[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        var targetOffset = event.currentTarget.getAttribute("data-ss-offset");

        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - targetOffset,
            },
            800,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
}

//Tooltip init
// var tooltipTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="tooltip"]')
// );
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });

// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   stickyHeader();
// };


// function stickyHeader() {
//   // Get the header
//   var header = document.getElementById("pgHeader");
//   // Get the offset position of the navbar
//   var sticky = header.offsetTop;
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
