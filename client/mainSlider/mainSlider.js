Template.mainSlider.events({
       'click .sliderButton': function (e) {
        e.preventDefault();
        var destination = $('.tovar').offset().top;
        var minus = destination - 95;
        $("body,html").animate({scrollTop: minus }, 800);

    }
});