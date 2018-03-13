$(function() {

  //Forecast AJAX Request
  $.ajax({
    url: "https://api.wunderground.com/api/3760db94f98044d8/forecast/q/NY/Troy.json",
    dataType: "jsonp"
  }).done(function(data) {

    console.log(data);
    var forecast = data.forecast.txt_forecast.forecastday[0].fcttext;

    //Current Temp AJAX Request
    $.ajax({
      url: "https://api.wunderground.com/api/3760db94f98044d8/conditions/q/NY/Troy.json",
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
        partlyCloudyDay: [
          "Freaking clouds! What the hell! I love you baby! <3"
        ],
        partlyCloudyNight: [
          "Clouds in the night! What the hell! I love you baby! <3"
        ],
        cloudy: [
          "I Love Clouds! I Love Colleen!"
        ],
        rain: [
          "It's raining, it's pouring and I Love Colleen!",
          "I really love rainy days, snuggling with my baby!",
          "On this rainy day, I love my baby Colleen Davis!"
        ],
        sleet: [
          "SLEET! What The! Ahh, who cares, because I Love Colleen Davis!",
        ],
        snow: [
          "It's snowing outside, and i want to be inside with my baby Colleen!",
          "The weather outside is frightful, but my baby Colleen is delightful!",
          "The amount of snowflakes falling still can not amount to how much I Love Colleen Davis!"
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
      var randomFog = Math.floor(Math.random() * sayings.fog.length);

      //Grab temp and summary, then add to frontend
      var temp = Math.round(data.current_observation.temp_f);
      var feelsTemp = data.current_observation.feelslike_f;
      var summary = data.current_observation.weather;

      //For Testing
      // summary = "Snow";

      $(".temp").html(temp + "&#176;");
      $(".feels").html("Feels like " + feelsTemp + "&#176;");
      $(".summary").html(summary);
      $(".forecast").html(forecast);


      switch (summary) {
        case "Clear":
        case "Mostly Sunny":
        case "Partly Sunny":
          $("body").removeClass().addClass("clear-day");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/clear.svg'>");
          $(".message").text(sayings.clear[randomClear]);
          break;
        case "Mostly Cloudy":
        case "Partly Cloudy":
        case "Overcast":
          $("body").removeClass().addClass("mostly-cloudy-day");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/mostlycloudy.svg'>");
          $(".message").text(sayings.partlyCloudyDay[randomPartlyCloudyDay]);
          break;
        case "Cloudy":
          $("body").removeClass().addClass("cloudy");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/cloudy.svg'>");
          $(".message").text(sayings.cloudy[randomCloudy]);
          break;
        case "Snow":
        case "Flurries":
          $("body").removeClass().addClass("snow");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/snow.svg'>");
          $(".message").text(sayings.snow[randomSnow]);
          break;
        case "Fog":
        case "Hazy":
          $("body").removeClass().addClass("fog");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/fog.svg'>");
          $(".message").text(sayings.fog[randomFog]);
          break;
        case "Rain":
          $("body").removeClass().addClass("rain");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/rain.svg'>");
          $(".message").text(sayings.rain[randomRain]);
          break;
        case "Sleet":
          $("body").removeClass().addClass("sleet");
          $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/sleet.svg'>");
          $(".message").text(sayings.sleet[randomSleet]);
          break;
      }
      

    });
  });

});