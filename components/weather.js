
'use strict';

// const superagent =require('superagent');
const Forcast = require('../constructor.js');

function handleWeather(request, response){
  //  console.log(request.query)
  try{
    // mapping through the weather data to pull out each  day and pass that day to a new instance of Forcast. assigning this to weatherArr. 
    const weatherArr = weather.data.map(day=> new Forcast(day));
    // We're going to pass that weather array to the front end.
    response.status(200).send(weatherArr);
    //If that doesn't work then give them this error message. 
  } catch(error){
    response.status(500).send('something went wrong');
  }
}






// three ways to do it:
// 1. node server.js
// 2. npm start
// 3. nodemon - this is going to check for changes and update
 
module.exports = handleWeather;