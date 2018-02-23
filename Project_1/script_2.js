//only need to define canvas once (as shown in plot 1 but not 2 or 3)
var canvas2 = d3.select("#plot2").append("canvas").node();

//id is #, class is a period

//here it is already an ID
canvas2.width = document.getElementById("plot2").clientWidth;
canvas2.height = document.getElementById("plot2").clientHeight;

//can have the same variable inside function in two scripts, but if outside need two different names for a function

var ctx2 = canvas2.getContext('2d');
// code to request the reload of the window --> we will use this to create animations
/*
var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();
*/


var centerX2 = canvas2.width / 2;
var centerY2 = canvas2.height / 2;


ctx2.beginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(50,680);
ctx2.lineWidth = 10
ctx2.strokeStyle="#003bff";
ctx2.stroke();
ctx2.beginPath();
ctx2.moveTo(360, 50);
ctx2.lineTo(360,680);
ctx2.strokeStyle="#003bff";
ctx2.stroke();


setInterval(RacingShape1, 100);
//starting point is 56 for square and end point is 303 
function RacingShape1(){
  var currentTime2 = new Date(); 
  var minutes2 = currentTime2.getMinutes();
  var hours2 = currentTime2.getHours();
  var total_minutes2 = minutes2 + 60*hours2
  var seconds2 = currentTime2.getSeconds();
  var milliseconds2 = currentTime2.getMilliseconds();
  var img = new Image();
  img.src = "http://www.clker.com/cliparts/3/3/K/d/7/k/purple-square-light-hi.png";
  img.onload = function () {
        var X = 56 + minutes2 * 247/60;
        var X_rounded = Math.round(X);
        ctx2.drawImage(img, X_rounded, 210, 50, 50);
        ctx2.closePath();
  }
  var img2 = new Image();
  img2.src = "https://i.stack.imgur.com/dwoZY.png";
  img2.onload = function () {
        var X = 56 + seconds2 * 247/60;
        var X_rounded = Math.round(X);
        ctx2.drawImage(img2, X_rounded, 420, 60, 60);
        ctx2.closePath();
  }
}
