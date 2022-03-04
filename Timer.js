  // Countdown Timer

jQuery(document).ready(function() {

var sec = 60

var timer = setInterval(function() {

   $("#mdtimer span").text(sec--);

   if (sec == 0) {

$("#makingdifferenttimer").delay(1500).fadeIn(1500);

$("#mdtimer").hide(1500) .fadeOut(fast);}

},1500);

});    
