let sayings = {
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
    "Freaking clouds! What the hell! I love you baby! <3",
    "It's cloudy but I love my baby!",
    "Stupid Clouds! They are kind of pretty though, like my sweetheart",
    "It's a bit cloudy and I LOVE COLLEEN!",
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


const localUrl = "http://localhost:3000/weather";
const herokuUrl = "/weather";

fetch(herokuUrl)
  .then((res) => res.json())
  .then((data) => {

    $(".temp").html(data.forecast.temp + "&#176;");
    $(".highLow").html("<i class='fas fa-long-arrow-alt-down'></i> " + data.forecast.lowTemp + "&#176; / <i class='fas fa-long-arrow-alt-up'></i> " + data.forecast.highTemp + "&#176;");
    $(".summary").html(data.forecast.forecast);
    $(".forecast").html(data.forecast.summary);

    switch (data.forecast.forecast) {
      case "Clear":
        $("body").removeClass().addClass("clear-day");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/clear.svg'>");
        $(".message").text(sayings.clear[randomClear]);
        break;

      case "Mostly Sunny":
        $("body").removeClass().addClass("clear-day");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/mostlysunny.svg'>");
        $(".message").text(sayings.clear[randomClear]);
        break;

      case "Partly Sunny":
        $("body").removeClass().addClass("clear-day");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/partlysunny.svg'>");
        $(".message").text(sayings.clear[randomClear]);
        break;

      case "Mostly Cloudy":
      case "Overcast":
      case "Scattered Clouds":
        $("body").removeClass().addClass("mostly-cloudy-day");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/mostlycloudy.svg'>");
        $(".message").text(sayings.partlyCloudyDay[randomPartlyCloudyDay]);
        break;

      case "Partly Cloudy":
        $("body").removeClass().addClass("mostly-cloudy-day");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/partlycloudy.svg'>");
        $(".message").text(sayings.partlyCloudyDay[randomPartlyCloudyDay]);
        break;

      case "Cloudy":
        $("body").removeClass().addClass("cloudy");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/cloudy.svg'>");
        $(".message").text(sayings.cloudy[randomCloudy]);
        break;

      case "Snow":
      case "Flurries":
      case "Light Snow":
      case "Heavy Snow":
      case "Low Drifting Snow":
      case "Light Low Drifting Snow":
      case "Heavy Low Drifting Snow":
      case "Blowing Snow":
      case "Light Blowing Snow":
      case "Heavy Blowing Snow":
      case "Snow Showers":
      case "Light Snow Showers":
      case "Heavy Snow Showers":
      case "Snow Blowing Snow Mist":
      case "Light Snow Blowing Snow Mist":
      case "Heavy Snow Blowing Snow Mist":
      case "Thunderstorms and Snow":
      case "Light Thunderstorms and Snow":
      case "Heavy Thunderstorms and Snow":
      case "Squalls":
        $("body").removeClass().addClass("snow");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/snow.svg'>");
        $(".message").text(sayings.snow[randomSnow]);
        break;

      case "Fog":
      case "Light Fog":
      case "Heavy Fog":
      case "Fog Patches":
      case "Light Fog Patches":
      case "Heavy Fog Patches":
      case "Haze":
      case "Light Haze":
      case "Heavy Haze":
      case "Freezing Fog":
      case "Light Freezing Fog":
      case "Heavy Freezing Fog":
      case "Patches of Fog":
      case "Shallow Fog":
      case "Partial Fog":
        $("body").removeClass().addClass("fog");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/fog.svg'>");
        $(".message").text(sayings.fog[randomFog]);
        break;

      case "Rain":
      case "Light Rain":
      case "Heavy Rain":
      case "Drizzle":
      case "Light Drizzle":
      case "Heavy Drizzle":
      case "Mist":
      case "Light Mist":
      case "Heavy Mist":
      case "Rain Mist":
      case "Light Rain Mist":
      case "Heavy Rain Mist":
      case "Rain Showers":
      case "Light Rain Showers":
      case "Heavy Rain Showers":
        $("body").removeClass().addClass("rain");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/rain.svg'>");
        $(".message").text(sayings.rain[randomRain]);
        break;

      case "Thunderstorm":
      case "Light Thunderstorm":
      case "Heavy Thunderstorm":
      case "Thunderstorms and Rain":
      case "Light Thunderstorms and Rain":
      case "Heavy Thunderstorms and Rain":
      case "Thunderstorms and Ice Pellets":
      case "Light Thunderstorms and Ice Pellets":
      case "Heavy Thunderstorms and Ice Pellets":
      case "Thunderstorms with Hail":
      case "Light Thunderstorms with Hail":
      case "Heavy Thunderstorms with Hail":
      case "Thunderstorms with Small Hail":
      case "Light Thunderstorms with Small Hail":
      case "Heavy Thunderstorms with Small Hail":
        $("body").removeClass().addClass("rain");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/tstorms.svg'>");
        $(".message").text(sayings.rain[randomRain]);
        break;

      case "Sleet":
      case "Snow Grains":
      case "Light Snow Grains":
      case "Heavy Snow Grains":
      case "Ice Crystals":
      case "Light Ice Crystals":
      case "Heavy Ice Crystals":
      case "Ice Pellets":
      case "Light Ice Pellets":
      case "Heavy Ice Pellets":
      case "Hail":
      case "Light Hail":
      case "Heavy Hail":
      case "Ice Pellet Showers":
      case "Light Ice Pellet Showers":
      case "Heavy Ice Pellet Showers":
      case "Hail Showers":
      case "Light Hail Showers":
      case "Heavy Hail Showers":
      case "Small Hail Showers":
      case "Light Small Hail Showers":
      case "Heavy Small Hail Showers":
      case "Freezing Drizzle":
      case "Light Freezing Drizzle":
      case "Heavy Freezing Drizzle":
      case "Freezing Rain":
      case "Light Freezing Rain":
      case "Heavy Freezing Rain":
      case "Small Hail":
        $("body").removeClass().addClass("sleet");
        $("#icon").html("<img src='http://icons.wxug.com/i/c/v4/sleet.svg'>");
        $(".message").text(sayings.sleet[randomSleet]);
        break;
    };
  });










//For Testing
// summary = "Thunderstorm";







/* List of icons

http://icons.wxug.com/i/c/v4/unknown.svg
http://icons.wxug.com/i/c/v4/chanceflurries.svg
http://icons.wxug.com/i/c/v4/chancerain.svg
http://icons.wxug.com/i/c/v4/chancesleet.svg
http://icons.wxug.com/i/c/v4/chancesnow.svg
http://icons.wxug.com/i/c/v4/chancetstorms.svg
http://icons.wxug.com/i/c/v4/clear.svg
http://icons.wxug.com/i/c/v4/cloudy.svg
http://icons.wxug.com/i/c/v4/flurries.svg
http://icons.wxug.com/i/c/v4/fog.svg
http://icons.wxug.com/i/c/v4/hazy.svg
http://icons.wxug.com/i/c/v4/mostlycloudy.svg
http://icons.wxug.com/i/c/v4/mostlysunny.svg
http://icons.wxug.com/i/c/v4/partlycloudy.svg
http://icons.wxug.com/i/c/v4/partlysunny.svg
http://icons.wxug.com/i/c/v4/sleet.svg
http://icons.wxug.com/i/c/v4/rain.svg
http://icons.wxug.com/i/c/v4/snow.svg
http://icons.wxug.com/i/c/v4/sunny.svg
http://icons.wxug.com/i/c/v4/tstorms.svg
http://icons.wxug.com/i/c/v4/nt_chanceflurries.svg
http://icons.wxug.com/i/c/v4/nt_chancerain.svg
http://icons.wxug.com/i/c/v4/nt_chancesleet.svg
http://icons.wxug.com/i/c/v4/nt_chancesnow.svg
http://icons.wxug.com/i/c/v4/nt_chancetstorms.svg
http://icons.wxug.com/i/c/v4/nt_clear.svg
http://icons.wxug.com/i/c/v4/nt_cloudy.svg
http://icons.wxug.com/i/c/v4/nt_flurries.svg
http://icons.wxug.com/i/c/v4/nt_fog.svg
http://icons.wxug.com/i/c/v4/nt_hazy.svg
http://icons.wxug.com/i/c/v4/nt_mostlycloudy.svg
http://icons.wxug.com/i/c/v4/nt_mostlysunny.svg
http://icons.wxug.com/i/c/v4/nt_partlycloudy.svg
http://icons.wxug.com/i/c/v4/nt_partlysunny.svg
http://icons.wxug.com/i/c/v4/nt_sleet.svg
http://icons.wxug.com/i/c/v4/nt_rain.svg
http://icons.wxug.com/i/c/v4/nt_snow.svg
http://icons.wxug.com/i/c/v4/nt_sunny.svg
http://icons.wxug.com/i/c/v4/nt_tstorms.svg
http://icons.wxug.com/i/c/v4/unknown.svg

*/