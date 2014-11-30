$(document).ready(function() {
    $("#searchResult").hide();

    $("#searchButton").click(function () {
        $("#homepage").hide();
        $("#searchResult").show();
    });

    $(".slider").slider({
        min: 0,
        max: 1000000,
        step: 1,
        value: [0, 1000000]
    })
        .on("slide", function(event){

        });

    $(".slider.slider-horizontal").width("100%");

    $("#datetimepicker").datetimepicker();
});

