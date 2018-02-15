var canvas3 = document.getElementById("plot3");
// find the canvas2 element by using id
var canvas3 = d3.select("#plot3").append("canvas").node();
var widthCanvas3 = d3.select("#plot3").node().clientWidth;
var heightCanvas3 = d3.select("#plot3").node().clientHeight;
//must reference width and innerHeight
canvas3.width = document.getElementById("plot3").clientWidth;
canvas3.height = document.getElementById("plot3").clientHeight;

var ctx3 = canvas3.getContext("2d");
// code to request the reload of the window --> we will use this to create animations

/*var requestAnimationFrame = window.requestAnimationFrame ||
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


//var myVar3 = setInterval(function(){ getText }, 17000);
setInterval(getText, 1000);

function getText() {
  var currentTime3 = new Date()
  var year3 = currentTime3.getFullYear();
  var months3 = currentTime3.getMonth() + 1;
  var days3 = currentTime3.getDate();
  var minutes3 = currentTime3.getMinutes();
  var hours3 = currentTime3.getHours();
  var seconds3 = currentTime3.getSeconds();
  ctx3.fillStyle = "black";
  ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
  ctx3.fillStyle = "white"
  ctx3.font="180px Arial";
  ctx3.fillText(year3,10,170);
  ctx3.font="150px Arial";
  ctx3.fillText(months3,18,290);
  ctx3.font="120px Arial";
  ctx3.fillText(days3,24,390);
  ctx3.font="90px Arial";
  ctx3.fillText(hours3,34,465);
  ctx3.font="60px Arial";
  ctx3.fillText(minutes3,48,518);
  ctx3.font="30px Marker Arial";
  ctx3.fillText(seconds3,56,550);
}
