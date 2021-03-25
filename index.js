'use strict';
//allows us to access our env variables
require('dotenv').config();

// bring in the express libraray
// don't forget to do an npm install express

const express = require('express');
//this is brining in my weather module
const handleWeather = require('./weather.js');

//allow our front-end to access our server
const cors = require('cors');

// initalizing the express library so I can use it
const app = express();
//created a variable to be used to acces weather.json data
const weather = require(`./weather.json`)//Delete once you have your API(weather)
//this allows anyone to access our server - aka - the worlds worst body guard
app.use(cors());
//assigning PORT to key from .env
const PORT = process.env.PORT || 3001;
//go to this path (local host) and then run this function
app.get(`/weather`, handleWeather);
// turn on the server
app.listen(PORT, () => console.log(`listening on ${PORT}`));
