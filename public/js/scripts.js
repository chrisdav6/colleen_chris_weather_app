
$(function() {
  
  $.ajax({
    url: " https://api.darksky.net/forecast/301f3e024f1c4ab02d90bd8af795b98d/42.738270,-73.654638",
    dataType: "jsonp"
  }).done(function(data) {
    
    console.log(data);
    
    //Grab temp and summary, then add to frontend
    var temp = Math.round(data.currently.temperature);
    var summary = data.currently.summary;
    $(".temp").html(temp + "&#176;");
    $(".summary").html(summary);
    
    
    // data.currently.icon ="fog"; //Testing Purposes
    
    //Skycon Weather Icons
    $("#skycons").attr("id", data.currently.icon);
    
    //Chose Icon Color - And background Images
    if(data.currently.icon === "clear-day") {
      var icons = new Skycons({"color": "yellow"});
      $("body").addClass("clear-day");
    } 
    
    if(data.currently.icon === "clear-night") {
      var icons = new Skycons({"color": "#033259"});
      $("body").addClass("clear-night");
    } 
    
    if(data.currently.icon === "partly-cloudy-day") {
      var icons = new Skycons({"color": "gray"});
      $("body").addClass("partly-cloudy-day");
    } 
    
    if(data.currently.icon === "partly-cloudy-night") {
      var icons = new Skycons({"color": "gray"});
      $("body").addClass("partly-cloudy-night");
    } 
    
    if(data.currently.icon === "cloudy") {
      var icons = new Skycons({"color": "gray"});
      $("body").addClass("cloudy");
    } 
    
    if(data.currently.icon === "rain") {
      var icons = new Skycons({"color": "#65abf2"});
      $("body").addClass("rain");
    } 
    
    if(data.currently.icon === "sleet") {
      var icons = new Skycons({"color": "#97c2ed"});
      $("body").addClass("sleet");
    } 
    
    if(data.currently.icon === "snow") {
      var icons = new Skycons({"color": "#4b91d8"});
      $("body").addClass("snow");
    } 
    
    if(data.currently.icon === "wind") {
      var icons = new Skycons({"color": "#bec1c4"});
      $("body").addClass("wind");
    } 
    
    if(data.currently.icon === "fog") {
      var icons = new Skycons({"color": "#bec1c4"});
      $("body").addClass("fog");
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

});