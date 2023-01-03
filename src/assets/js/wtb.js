$(document).ready(function () {
  //WTB Form Tab Navigation
  // 01. Next Navigation
  $(".jot-form .btn-next").on("click", function (e) {
    e.preventDefault();
    var targetStep = $(this).data("target-step");
    var targetEl = document.querySelector(
      '#jotTab button[data-bs-target="' + targetStep + '"]'
    );
    var targetTab = new bootstrap.Tab(targetEl);

    targetEl.classList.remove("disabled");
    targetTab.show();
  });

  // 02. Back Navigation
  $(".jot-form .btn-back").on("click", function (e) {
    e.preventDefault();
    var targetStep = $(this).data("target-step");
    var targetEl = document.querySelector(
      '#jotTab button[data-bs-target="' + targetStep + '"]'
    );
    var targetTab = new bootstrap.Tab(targetEl);

    targetTab.show();
  });

  // 03. Manage Complete and active states
  var triggerTabList = [].slice.call(
    document.querySelectorAll('#jotTab button[data-bs-toggle="tab"]')
  );
  var progressBar = document.querySelector(".tab-progressbar");
  var tabLength = triggerTabList.length;
  var progressWidth = 100 / (tabLength * 2);

  //Set intial Progress
  progressBar.style.width = progressWidth + "%";

  triggerTabList.forEach(function (triggerEl) {
    triggerEl.addEventListener("hide.bs.tab", function (event) {
      var tabIndex = triggerTabList.indexOf(event.relatedTarget);
      var prevTabIndex = triggerTabList.indexOf(event.target);
      var newProgressWidth = ((tabIndex + 1) / tabLength) * 100 - progressWidth;

      if (prevTabIndex < tabIndex) {
        event.target.classList.add("is_completed");
      } else {
        //event.target.classList.remove('is_completed');
      }

      //Update Progress bar width (in %)
      progressBar.style.width = newProgressWidth + "%";
    });
  });

  $(".stickEl").stickit({
    top: 120,
    screenMinWidth: 1183,
  });

  $("#priceRangeSlider").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 100000,
    from: 20000,
    to: 60000,
    prefix: "₹",
    prettify_enabled: true,
    prettify_separator: ",",
  });
});
