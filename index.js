'use strict';

// bring in the express libraray
// don't forget to do an npm install express

const express = require('express');

//allows us to access our env variables
require('dotenv').config();

//allow our front-end to access our server
const cors = require('cors');


// initalizing the express library so I can use it
const app = express();
//created a variable to be used to acces weather.json data
const weather = require(`./weather.json`)
//this allows anyone to access our server - aka - the worlds worst body guard
app.use(cors());
//assigning PORT to key from .env
const PORT = process.env.PORT || 3001;
//go to this path (local host) and then run this function
app.get(`/weather`, handleWeather);

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
//this constructor is recieving a day(array) from the weather.json file(line 30) and pulling out the date and description.
function Forcast(day){
  // using dot notation we are able to access valid_date from the weather.json data. 
  this.date = day.valid_date
  this.description = day.weather.description
}
// turn on the server
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// three ways to do it:
// 1. node server.js
// 2. npm start
// 3. nodemon - this is going to check for changes and update
 