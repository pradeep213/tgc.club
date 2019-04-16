$(document).ready(function(){

	var countDownDate = new Date("May 9, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

   $("#counter-days").text(formatDigit(days));
   $("#counter-days").append($("<sup>days</sup>"));
   $("#counter-hours").text(formatDigit(hours));
   $("#counter-hours").append($("<sup>hours</sup>"));
   $("#counter-mins").text(formatDigit(minutes));
   $("#counter-mins").append($("<sup>mins</sup>"));
   $("#counter-secs").text(formatDigit(seconds));
   $("#counter-secs").append($("<sup>secs</sup>"));

  // Output the result in an element with id="demo"
  // document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

var formatDigit = function(val){
	var formatVal = val;
	if (formatVal < 10){
		formatVal = "0"+formatVal;
	}

	return formatVal;
}

});