//plots
var margin1 = {t: 5, r: 190, b: 90, l: 50}; //this is an object
var width1 = d3.select('#mobile1').node().clientWidth - margin1.r - margin1.l,
    height1 = (d3.select('#mobile1').node().clientHeight ) - margin1.t - margin1.b;

var plot1 = d3.select('#plot1') // if we select a html id #name, if we select a class .name
    .append('svg')
    .attr('width', width1 + margin1.r + margin1.l)
    .attr('height', height1 + margin1.t + margin1.b)
    .attr('fill','width') ;

var margin2 = {t: 0, r: 0, b: 0, l: 0}; //this is an object
var width2 = d3.select('#mobile2').node().clientWidth,
    height2 = (d3.select('#mobile2').node().clientHeight);

var plot2 = d3.select('#plot2') // if we select a html id #name, if we select a class .name
    .append('svg')
    .attr('width', width2)
    .attr('height', height2)
    .attr('fill','black');

// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

$.ajax({
url: 'https://api.darksky.net/forecast/2d04ed6835e53fbdc3dd6e931cd986cf/42.361145,-71.057083',
dataType: 'JSONP',
type: 'GET',
crossDomain: true,
complete: function (data) {
    if (data.readyState == '4' && data.status == '200') {
      console.log(data.responseJSON);
      //console.log(data.responseJSON.currently.temperature);
      var RoundedTemp = Math.round(data.responseJSON.currently.temperature);
      strTemp = RoundedTemp.toString();
      strDeg = "°F";
      newTemp = strTemp.concat(strDeg)
      var color = plot2.append('rect')
        .attr("width", "100%")
        .attr("x",-55)
        .attr("y",82)
        .attr("height", "100%")
        .attr("fill", "black");
      var title = plot2.append("text")
        .attr("class", "title")
        .attr("x", 140)
        .attr("y",150)
        .text(newTemp)
      if (RoundedTemp > 32) {
          plot2.append("svg:image")
          .attr('x', 40)
          .attr('y', 442)
          .attr('width', 300)
          .attr('height', 290)
          .attr("xlink:href", "puddle.png");
      }
        else {
          plot2.append("svg:image")
          .attr('x', 40)
          .attr('y', 442)
          .attr('width', 300)
          .attr('height', 290)
          .attr("xlink:href", "newice.png")  
        }
        var title2 = plot1.append("text")
            .attr("class", "title2")
            .attr("x", 140)
            .attr("y",80)
            .text(newTemp)
        var Precip = plot1.append("text")
            .attr("class", "text2")
            .attr("x", 90)
            .attr("y",475)
            .text('Chance of Precipitation v. t')
        var myIcon= data.responseJSON.currently.icon
        //myIcon = 'rain';
        if (myIcon === 'partly-cloudy-day'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "cloud1.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 90)
            .attr("y",360)
            .text("Self- Good to Go!")
        }
        else if (myIcon === 'partly-cloudy-night'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "cloud1.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 90)
            .attr("y",360)
            .text("Self- Good to Go!")
        }
        else if (myIcon === 'cloudy'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "cloud1.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 90)
            .attr("y",360)
            .text("Self- Good to Go!")
        }
        else if (myIcon === 'partly-cloudy-day'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "cloud1.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 90)
            .attr("y",360)
            .text("Self- Good to Go!")
        }
         else if (myIcon === 'snow'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "snow1.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",360)
            .text("Snow Boots")
        }  
         else if (myIcon === 'sleet'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "snow1.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",360)
            .text("Snow Boots")
        }  
         else if (myIcon === 'rain'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "rain.png");
             plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",340)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",370)
            .text("Rain Boots")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",400)
            .text("Umbrella")
        }
         else if (myIcon === 'clear-night'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "clear_night.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 90)
            .attr("y",360)
            .text("Self- Good to Go!")
        }
         else if (myIcon === 'clear-day'){
            plot1.append("svg:image")
            .attr('x', 125)
            .attr('y', 150)
            .attr('width', 130)
            .attr('height', 130)
            .attr("xlink:href", "clear_day.png")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",360)
            .text("Sunglasses");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",390)
            .text("Sunscreen")
        }
         else if (myIcon === 'fog'){
            plot1.append("svg:image")
            .attr('x', 115)
            .attr('y', 150)
            .attr('width', 150)
            .attr('height', 150)
            .attr("xlink:href", "fog.png");
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",330)
            .text("Bring Your:")
            plot1.append("text")
            .attr("class", "text1")
            .attr("x", 125)
            .attr("y",360)
            .text("Glasses")
             
        }
        //PLOT 1 - today's weather
        var todayWeather = data.responseJSON.hourly.data;
    //today's temperature evolution

    // 1 UNDERSTAND THE DATA
    // 1.1 how do you want to show the information? By time (axis X)
    // check the data, transform it into date (is it the correct date???)
    // data is in seconds
        var extentTimeWeather = d3.extent(todayWeather,function(d){
            return new Date (d.time * 1000) //transform to milliseconds
    });

    // data is until wednesday. We only want 24 hours --> filter data
        var todayNow = new Date ().getTime()/1000; //in seconds
        var tomorrow = new Date ().getTime()/1000 + 24 * 3600; //in seconds

        //filter to get between two dates
        var data24h = todayWeather.filter(function(d){
            return d.time >= todayNow && d.time <= tomorrow
    });
//convert back to seconds
        var extentdata24h = d3.extent(data24h,function(d){
            return new Date (d.time * 1000)
    });

    // 1.2 how do you want to show the information? By chance of precip (axis Y)
    // what are the min and maximum temperatures? gives min and max
        var extentTodayWeather = d3.extent(data24h,function(d){
            return d.precipProbability
    });

    // and the average?
        var meanTodayWeather = d3.mean(data24h,function(d){
            return d.precipProbability
            console.log(d.precipProbability)
    });
        var height_graph_start = height1*(2/3)
        var height_graph_end = height1-margin1.b

    // 1.3 create scales to put the data in the dom element
        var scaleX1 = d3.scaleTime().domain(extentdata24h).range([width1*(3/8),width1*(5/4)]);
        var scaleY1 = d3.scaleLinear().domain([0,1]).range([height_graph_end,height_graph_start]);
        console.log(scaleY1(0));

    // 1.4 create groups to put the content inside them
        plot1.append('g').attr('transform', 'translate(' + (margin1.l+63) + ',' + (margin1.t+50) + ')').attr('class', 'axis axis-y');                                                                                             
        plot1.append('g').attr('transform', 'translate(' + margin1.l + ',' + (margin1.t+height1-40) + ')').attr('class', 'axis axis-x');
        plot1.append('g').attr('transform', 'translate(' + margin1.l + ',' + (margin1.t+50) + ')').attr('class', 'todayWeather');


    // 1.5 create AXIS
        var formatHours = d3.timeFormat("%H");
        var formatDate = d3.timeFormat("%A");

        var axisHourX = d3.axisBottom().scale(scaleX1).ticks().tickFormat(formatHours),
            axisHourY = d3.axisLeft().scale(scaleY1).tickSizeInner(-width1).tickPadding([10]).ticks(5);

        plot1.select(".axis-x").call(axisHourX);
        plot1.select(".axis-y").call(axisHourY);


    //1.5 create graphical form - line
        var lineWeather = d3.line()
            .x(function(d) { return scaleX1(new Date (d.time*1000)); })
            .y(function(d) { return scaleY1(d.precipProbability); });

    // background
        var areaWeather = d3.area()
        .x(function(d) { return scaleX1(new Date (d.time*1000)); })
        .y1(function(d) { return scaleY1(d.precipProbability); })
        .y0(function(d) { return scaleY1(0); });

        plot1.select('.todayWeather')
        .datum(data24h) //select the data
        .append("path")
        .attr("class", "weatherArea") // this is the same class that we have selected before
        .attr("d",areaWeather);

        plot1.select('.todayWeather')
        .datum(data24h) //select the data
        .append("path")
        .attr("class", "weather") // this is the same class that we have selected before
        //.attr("d",lineWeather);

        plot1
        .select('.todayWeather')
        .append("line")
        .attr("class","meanWeather")
        .attr("x1",scaleX1(extentdata24h[0]))
        .attr("x2",scaleX1(extentdata24h[1]))
        .attr("y1",scaleY1(meanTodayWeather))
        .attr("y2",scaleY1(meanTodayWeather));

        var plotDots = plot1.select('.todayWeather')
        .append("g")
        .attr("class","dots");
    
     var plotNumbers = plot1.select('.todayWeather')
         .append("g")
         .attr("class","numbers");

        plotDots
        .selectAll(".weatherDots")
        .data(data24h) //select the data
        .enter()
        .append("circle")
        .attr("class", "weatherDots") // this is the same class that we have selected before
        .attr("cx",function(d) { return scaleX1(new Date (d.time*1000)); })
        .attr("cy",function(d) { return scaleY1(d.precipProbability); })
        .attr("r",3);
    //
    // plotNumbers
    //     .selectAll(".weatherNumbers")
    //     .data(data24h) //select the data
    //     .enter()
    //     .append("text")
    //     .attr("class", "weatherNumbers") // this is the same class that we have selected before
    //     .text(function(d){return d.temperature})
    //     .attr("x",function(d) { return scaleX1(new Date (d.time*1000)); })
    //     .attr("y",function(d) { return scaleY1(d.temperature); });

    //d3.select("#date").html(formatDate(extentdata24h[0]))
    } else {
      console.log("DATA FETCH FAILED");
    }
  }
})

    

