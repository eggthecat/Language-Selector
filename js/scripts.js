$(document).ready(function () {
  $('form#coding').submit(function (event) {
    var office = parseInt($('#office').val());
    var beverage = parseInt($('#beverage').val());
    var pet = parseInt($('#pet').val());
    var wakeUp = parseInt($('#wakeUp').val());
    var pampering = parseInt($('#pampering').val());
    var transport = parseInt($('#transport').val());
    var feet = parseInt($('#feet').val());

    var score = office + beverage + pet + wakeUp + pampering + transport + feet;


    if (score < 8) {
      $("#program1").show();
      $("#program1").hide();
      $("#program1").hide();
    } else if (score > 7 && 15 > score) {
      $("#program2").show();
      $("#program1").hide();
      $("#program1").hide();
    } else if (score > 15 && 22 > score) {
      $("#program3").show());
      $("#program1").hide();
      $("#program1").hide();
    } else  (score > 22 && 29 > score) {
      $("#program1").show());
      $("#program2").show();
      $("#program3").show();
    };
  });
  event.preventDefault();
});


// alert('content')
// show("content")   // XXX:
// $("")
