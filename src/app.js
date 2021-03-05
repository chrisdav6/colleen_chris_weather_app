const path = require('path');
const express = require('express');
const darkSky = require('./utils/darkSky');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//Use EJS
app.set('view engine', 'ejs');

//Set Static Folders
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, 'src/views')));

//Route
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/weather', function(rew, res) {
  darkSky(42.738329, -73.65438, (error, weatherData) => {
    if (error) {
      return res.send({
        error: error
      });
    }

    res.send({
      forecast: weatherData
    });
  });
});

//Start Server
app.listen(port, function() {
  console.log('Server has started!');
});
