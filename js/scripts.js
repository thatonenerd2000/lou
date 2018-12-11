/*global $*/
/*global ready*/
$(document).ready(function(){
    var LouSay = ["OH Man HAAAH HAAAH HAAAAAH" , "AP Lit is Lit" , "SUP Squad, Its Lou from PGC" , "lugubrious" , "Is this what they call, 'Dank Meme'"];
    $('#shakes').click(function(){
        $("#shakes").fadeOut(1000);
        $("#text").fadeOut(1000);
        $("#lou1").delay(1100).fadeIn(1000);
        $("#lou2").delay(1100).fadeIn(1000);
        $("#countdown").delay(1100).fadeIn(1000);
        $("#head").delay(1100).fadeIn(1000);
        $("#louText").delay(1100).fadeIn(1000);
    })
    
    $("#head").click(function(){
        $("#louText").html(LouSay[Math.floor(Math.random()*LouSay.length)]);
    })
})

var countDownDate = new Date("Dec 9, 2019 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + " d | " + hours + " h | "
  + minutes + " m | " + seconds + " s | ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's your Birthday";
  }
}, 1000);

