/*jshint esversion: 6 */
// date object

let date = new Date();
console.log(date);

//proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

//other countries time
let options = { timeZone: "America/New_york" };
let US_TIME = new Date().toLocaleTimeString("en-us", options);
console.log(US_TIME);

//month
let currentMonth = new Date().getMonth();
console.log(currentMonth);
