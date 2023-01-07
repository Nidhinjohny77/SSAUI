function initializeUserForm() {
  //Post Property Form Tab Navigation
  // 01. Next Navigation
  $(".ppt-form .btn-next").on("click", function (e) {
    e.preventDefault();
    var targetStep = $(this).data("target-step");
    var targetEl = document.querySelector(
      '#pptTab button[data-bs-target="' + targetStep + '"]'
    );
    var targetTab = new bootstrap.Tab(targetEl);

    targetEl.classList.remove("disabled");
    targetTab.show();
  });

  // 02. Back Navigation
  $(".ppt-form .btn-back").on("click", function (e) {
    e.preventDefault();
    var targetStep = $(this).data("target-step");
    var targetEl = document.querySelector(
      '#pptTab button[data-bs-target="' + targetStep + '"]'
    );
    var targetTab = new bootstrap.Tab(targetEl);

    targetTab.show();
  });

  // 03. Manage Complete and active states
  var triggerTabList = [].slice.call(
    document.querySelectorAll('#pptTab button[data-bs-toggle="tab"]')
  );
  var progressBar = document.querySelector(".tab-progressbar");
  //  var pptScoreProgressBar = document.querySelector(
  //   ".ppt-score-progress .progressbar"
  // );
  // var pptScore = document.querySelector(".ppt-score");
  var tabLength = triggerTabList.length - 1; // one hidden tab last [-1]
  var progressWidth = 100 / (tabLength * 2);

  //Set intial Progress
  progressBar.style.width = progressWidth + "%";
  // pptScoreProgressBar.style.width = progressWidth + "%";
  // pptScore.innerHTML = "0%";

  triggerTabList.forEach(function (triggerEl) {
    triggerEl.addEventListener("hide.bs.tab", function (event) {
      var tabIndex = triggerTabList.indexOf(event.relatedTarget);
      var prevTabIndex = triggerTabList.indexOf(event.target);
      var newProgressWidth = ((tabIndex + 1) / tabLength) * 100 - progressWidth;

      newProgressWidth = tabLength === tabIndex ? 100 : newProgressWidth;

      if (prevTabIndex < tabIndex) {
        event.target.classList.add("is_completed");
        // pptScoreProgressBar.style.width = newProgressWidth + "%";
        // pptScore.innerHTML = Math.round(newProgressWidth) + "%";
      } else {
        //event.target.classList.remove('is_completed');
      }

      //Update Progress bar width (in %)
      progressBar.style.width = newProgressWidth + "%";

      // Move to top
      $("html, body").animate(
        {
          scrollTop:
            document.querySelector(".ppt-form-wrapper").offsetTop - 100,
        },
        800
      );
    });
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
}
