$(document).ready(function () {
  $('form#dating').submit(function (event) {
    event.preventDefault();
    var office = parseInt($('#office').val());
    var beverage = parseInt($('#beverage').val());
    var pet = parseInt($('#pet').val());
    var wakeUp = parseInt($('#wakeUp').val());
    var pampering = parseInt($('#pampering').val());
    var transport = parseInt($('#transport').val());
    var feet = parseInt($('#feet').val());
    console.log(office);
    console.log(beverage);

    var score = office + beverage + pet + wakeUp + pampering + transport + feet;

    console.log(score);

    if (score < 12) {
      alert('you\'re alright');
    } else if (score > 12 && 16 > score) {
      alert('STOP WASTING MONEY');
    } else if (score > 17 && 22 > score) {
      alert('e');
    } else if (score > 22 && 29 > score) {
      alert('Prince Status');
    };
  });
});
