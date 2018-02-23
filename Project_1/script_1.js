var canvas = document.getElementById("plot1");
// find the canvas2 element by using id
var canvas1 = d3.select("#plot1").append("canvas").node();
var widthCanvas1 = d3.select("#plot1").node().clientWidth;
var heightCanvas1 = d3.select("#plot1").node().clientHeight;
//must reference width and innerHeight
canvas.width = document.getElementById("plot1").clientWidth;
canvas.height = document.getElementById("plot1").clientHeight;

var ctx = canvas.getContext("2d");
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

/*
//give upper left coodrinate, sizing pixels, 
ctx.fillRect(0, 0, 50, 70);
*/ 

//to move image up or down, change the 6th digit in drawImage
var loadImage = function (url, ctx) {
  var img = new Image();
  img.src = url;
  img.onload = function () { 
    ctx.drawImage(img, 10, 10, 450, 300, 12, 200, 400, 300);
  }
}

loadImage("https://uploads-ssl.webflow.com/596933941ed6ce2c46a2f9f9/59a3bae4fdd0390001e125bb_usa-map-small.png",ctx);


// beginning coords : (25, 330)
// ending coords : (325, 300)
//

setInterval(loadImage2,1000);

function loadImage2() {
  var currentTime = new Date (); 
  var minutes = currentTime.getMinutes();
  var hours = currentTime.getHours();
  var total_minutes = minutes + 60*hours
  var seconds = currentTime.getSeconds();
  var img = new Image();
  img.src = "http://www.freepngimg.com/thumb/plane/5-2-plane-download-png-thumb.png";
  img.onload = function () {
    if (total_minutes == 0) {
        ctx.drawImage(img, 25, 330, 50, 50);
}   else {
        var X = 25 + 300/1440 * total_minutes;
        var X_rounded = Math.round(X);
        var Y = 325 + -30/1440 * total_minutes;
        var Y_rounded = Math.round(Y);
        ctx.drawImage(img, X_rounded, Y_rounded, 50, 50);
        ctx.beginPath();
        ctx.moveTo(30, 350);
        ctx.lineTo(X_rounded+4,Y_rounded+16);
        ctx.strokeStyle="#003bff";
        ctx.stroke();
}
  }
}
setTimeout(function(){
    loadImage2();
}, 200);
