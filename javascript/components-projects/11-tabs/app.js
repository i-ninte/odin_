const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway= document.querySelector('.giveaway');
const deadline= document.querySelector('.deadline');
const items= document.querySelectorAll('.deadline-format');

let futureDate= new Date(2023,4,24,15,13,8);

const year= futureDate.getFullYear();
const hours= futureDate.getHours();
const minutes= futureDate.getMinutes();



giveaway.textContent= `giveaway ends on ${year} ${hours}:${minutes} am`;
