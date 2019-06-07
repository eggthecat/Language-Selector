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


// potential js

<script>
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
