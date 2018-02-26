
$(function() {
  
  $.ajax({
    url: " https://api.darksky.net/forecast/301f3e024f1c4ab02d90bd8af795b98d/42.738270,-73.654638",
    dataType: "jsonp"
  }).done(function(data) {
    
    console.log(data);
    
    //Sayings
    var sayings = {
        clear: [
          "It's a beautiful day to be in Love with Colleen Davis!",
          "Christopher Loves Colleen Davis on this beautiful day more times than an infinite javascript loop!",
          "Colleen Davis, I love you 1 billiondy more than this beautiful day!",
          "I could not have asked for a more beautiful day to be in Love with Colleen Davis",
          "On this wonderful day, Christopher Loves Colleen",
          "What a wonderful day to tell you that I will never finish falling in Love with you Colleen Davis!"
        ],
        clearNight: [
          "On this fantastic night I love my baby, Colleen Davis",
          "The moon is out and I Love Colleen Davis",
          "What a beautiful starry night to be in Love with Colleen Davis",
          "Stars in the sky and I Love Colleen to the moon and back * infinity!"
        ]
    };
    
    //Random Number for sayings
    var randomClear = Math.floor(Math.random() * sayings.clear.length);
    var randomClearNight = Math.floor(Math.random() * sayings.clearNight.length);
    
    //Grab temp and summary, then add to frontend
    var temp = Math.round(data.currently.temperature);
    var summary = data.currently.summary;
    $(".temp").html(temp + "&#176;");
    $(".summary").html(summary);
    
    
    // data.currently.icon ="clear-night"; //Testing Purposes
    
    //Skycon Weather Icons
    $("#skycons").attr("id", data.currently.icon);
    
    //Chose Icon Color - And background Images
    if(data.currently.icon === "clear-day") {
      var icons = new Skycons({"color": "yellow"});
      $("body").addClass("clear-day");
      $(".message").text(sayings.clear[randomClear]);
    } 
    
    if(data.currently.icon === "clear-night") {
      var icons = new Skycons({"color": "#033259"});
      $("body").addClass("clear-night");
      $(".message").text(sayings.clearNight[randomClearNight]);
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