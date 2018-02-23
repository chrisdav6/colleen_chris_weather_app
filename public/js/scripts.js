
$(function() {
  
  $.ajax({
    url: " https://api.darksky.net/forecast/301f3e024f1c4ab02d90bd8af795b98d/42.738270,-73.654638",
    dataType: "jsonp"
  }).done(function(data) {
    console.log(data);
    var temp = Math.round(data.currently.temperature);
    var precipitation = data.currently.precipType;
    
    if(precipitation) {
      $(".condition").text(precipitation);
    }else {
      $(".condition").text("Clear");
    }
    
    $(".temp").html(temp + "&#176;");
    
    //Skycon Weather Icons
    $("#skycons").attr("id", data.currently.icon);
    
    //Chose Icon Color
    if($("#skycons").attr("id", "clear-day")) {
      var icons = new Skycons({"color": "#428aff"});
    } else if($("#skycons").attr("id", "clear-night")) {
      var icons = new Skycons({"color": "#033259"});
    } else if($("#skycons").attr("id", "partly-cloudy-day")) {
      var icons = new Skycons({"color": "#c6cace"});
    } else if($("#skycons").attr("id", "partly-cloudy-night")) {
      var icons = new Skycons({"color": "#7e8082"});
    } else if($("#skycons").attr("id", "cloudy")) {
      var icons = new Skycons({"color": "#c6cace"});
    } else if($("#skycons").attr("id", "rain")) {
      var icons = new Skycons({"color": "#65abf2"});
    } else if($("#skycons").attr("id", "sleet")) {
      var icons = new Skycons({"color": "#97c2ed"});
    } else if($("#skycons").attr("id", "snow")) {
      var icons = new Skycons({"color": "blue"});
    } else if($("#skycons").attr("id", "wind")) {
      var icons = new Skycons({"color": "#bec1c4"});
    } else if($("#skycons").attr("id", "fog")) {
      var icons = new Skycons({"color": "#bec1c4"});
    }
    
    var list  = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ];

    for(var i = list.length; i--; ) {
      icons.set(list[i], list[i]);
      icons.play();
    } 
      
  });
  
  //Change Background Image based on weather
  if($("#snow").attr("id", "snow")) {
    $("body").addClass("snow");
    
  } 
  
  if($("#rain").attr("id", "rain")) {
    $("body").addClass("rain");
  }

});