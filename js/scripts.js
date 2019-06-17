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

    if (score < 8) {
      alert('Consider Ruby, Python, and Javascript in all locations');
    } else if (score > 7 && 15 > score) {
      alert('Consider Ruby in Grand Canyon');
    } else if (score > 15 && 22 > score) {
      alert('Consider Python in Catalina');
    } else if (score > 22 && 29 > score) {
      alert('Consider Javascript in Dead Horse');
    };
  });
});
