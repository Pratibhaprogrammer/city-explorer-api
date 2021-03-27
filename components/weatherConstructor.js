'use strict';

//this constructor is recieving a day(array) from the weather.json file(line 30) and pulling out the date and description.
function Forcast(day){
  // using dot notation we are able to access valid_date from the weather.json data. 
  this.date = day.valid_date
  this.description = day.weather.description
}

module.exports = Forcast;