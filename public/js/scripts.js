
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
        ],
        partlyCloudyDay : [
          "Freaking clouds! What the hell! I love you baby! <3"
        ],
        partlyCloudyNight : [
          "Clouds in the night! What the hell! I love you baby! <3"
        ],
        cloudy: [
          "I Love Clouds! I Love Colleen!"
        ],
        rain : [
          "It's raining, it's pouring and I Love Colleen!",
          "I really love raing days, snuggling with my baby!",
          "On this rainy day, I love my baby Colleen Davis!"
        ],
        sleet : [
          "SLEET! What The! Ahh, who cares, because I Love Colleen Davis!",
        ],
        snow : [
          "It's snowing outside, and i want to be inside with my baby Colleen!",
          "The weather outside is frightful, but my baby Colleen is delightful!",
          "The amount of snowflakes falling still can not amount to how much I Love Colleen Davis!"
        ],
        wind: [
          "It's so windy out! Baby get over hear so i can snuggle you up!",
        ],
        fog: [
          "The beuaty of my baby Colleen is so clear to me, even through the fog.",
        ]
    };
    
    //Random Number for sayings
    var randomClear = Math.floor(Math.random() * sayings.clear.length);
    var randomClearNight = Math.floor(Math.random() * sayings.clearNight.length);
    var randomPartlyCloudyDay = Math.floor(Math.random() * sayings.partlyCloudyDay.length);
    var randomPartlyCloudyNight = Math.floor(Math.random() * sayings.partlyCloudyNight.length);
    var randomCloudy = Math.floor(Math.random() * sayings.cloudy.length);
    var randomRain = Math.floor(Math.random() * sayings.rain.length);
    var randomSleet = Math.floor(Math.random() * sayings.sleet.length);
    var randomSnow = Math.floor(Math.random() * sayings.snow.length);
    var randomWind = Math.floor(Math.random() * sayings.wind.length);
    var randomFog = Math.floor(Math.random() * sayings.fog.length);
    
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
      $(".message").text(sayings.partlyCloudyDay[randomPartlyCloudyDay]);
    } 
    
    if(data.currently.icon === "partly-cloudy-night") {
      var icons = new Skycons({"color": "gray"});
      $("body").addClass("partly-cloudy-night");
      $(".message").text(sayings.partlyCloudyNight[randomPartlyCloudyNight]);
    } 
    
    if(data.currently.icon === "cloudy") {
      var icons = new Skycons({"color": "gray"});
      $("body").addClass("cloudy");
      $(".message").text(sayings.cloudy[randomCloudy]);
    } 
    
    if(data.currently.icon === "rain") {
      var icons = new Skycons({"color": "#65abf2"});
      $("body").addClass("rain");
      $(".message").text(sayings.rain[randomRain]);
    } 
    
    if(data.currently.icon === "sleet") {
      var icons = new Skycons({"color": "#97c2ed"});
      $("body").addClass("sleet");
      $(".message").text(sayings.sleet[randomSleet]);
    } 
    
    if(data.currently.icon === "snow") {
      var icons = new Skycons({"color": "#4b91d8"});
      $("body").addClass("snow");
      $(".message").text(sayings.snow[randomSnow]);
    } 
    
    if(data.currently.icon === "wind") {
      var icons = new Skycons({"color": "#bec1c4"});
      $("body").addClass("wind");
      $(".message").text(sayings.wind[randomWind]);
    } 
    
    if(data.currently.icon === "fog") {
      var icons = new Skycons({"color": "#bec1c4"});
      $("body").addClass("fog");
      $(".message").text(sayings.fog[randomFog]);
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