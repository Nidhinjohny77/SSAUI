function initializeSearchPriceRangeSlider(){

    $("#priceRangeSlider").ionRangeSlider({
        type: "double",
        min: 500,
        max: 5000,
        from: 750,
        to: 2500,
        prefix: "£",
        prettify_enabled: true,
        prettify_separator: ",",
      });

    // $("#priceRangeSlider").ionRangeSlider({
    //     type: "double",
    //     min: 100,
    //     max: 5000,
    //     from: 500,
    //     to: 1500,
    //     prefix: "£",
    //     prettify_enabled: true,
    //     prettify_separator: ",",
    //     onStart: function (data) {
    //       var valueText = data.from_pretty + "-" + data.to_pretty;
    //       $(data.input).next(".range-slider-values").html(valueText);
    //     },
    //     onChange: function (data) {
    //       var valueText = data.from_pretty + "-" + data.to_pretty;
    //       $(data.input).next(".range-slider-values").html(valueText);
    //     },
    //   });
    
}

function getPriceRangeSlider(){
    return $("#priceRangeSlider").data("ionRangeSlider");
}