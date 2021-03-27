'use strict'
const superagent = require('superagent');
const Forcast = require('./weatherConstructor');

function getWeatherFromAPI(latitude, longitude, response){
  const url =  'http://api.weatherbit.io/v2.0/forecast/daily';
  const query ={
    key: process.env.WEATHER_API_KEY,
    lat: latitude,
    lon: longitude
  }
  superagent.get(url)
  .query(query)
  .then(superagentResults=>{
    console.log(superagentResults.body);
    const results = superagentResults.body.data;
    const weatherResults = results.map(day => new Forcast(day));
    response.status(200).send(weatherResults);
  })
  .catch(err =>{
    console.log('something went wrong with superagent call',err);
    response.status(500).send('we messed up');
  });
}

module.exports = getWeatherFromAPI;