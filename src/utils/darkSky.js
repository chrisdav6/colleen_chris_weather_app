const request = require("request");
require("dotenv").config();

const darkSky = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/${process.env.API_KEY}/${lat},${lon}`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      let data = {
        forecast: body.currently.summary,
        summary: body.hourly.summary,
        temp: Math.round(body.currently.temperature),
        highTemp: Math.round(body.daily.data[0].temperatureMax),
        lowTemp: Math.round(body.daily.data[0].temperatureMin),
        feelsTemp: Math.round(body.currently.apparentTemperature)
      };
      callback(undefined, data);
    }
  });
};

module.exports = darkSky;