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
const items= document.querySelectorAll('.deadline-format h4');


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth= tempDate.getMonth();
let tempDay= tempDate.getDay();



//let futureDate= new Date(2023,10,24,15,13,8);
const futureDate = new Date(tempYear, tempMonth, tempDay + 30, 12,30,0);

const year= futureDate.getFullYear();
const hours= futureDate.getHours();
const minutes= futureDate.getMinutes();

let month = futureDate.getMonth();
month= months[month];
const date = futureDate.getDate();
let weekday = futureDate.getDay();

weekday= weekdays[weekday];

giveaway.textContent= `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes} am`;

// getting the time in miliseconds 

const futureTime= futureDate.getTime();


function getRemainingTime(){
	 const today= new Date().getTime();
	 const t = futureTime - today;
	 
	 const oneDay = 86400000;
	 const oneHour= 3600000;
	const oneMinute= 60000;
	const oneSec= 1000;
	
	
	// calculate days
let	days= t/oneDay;
	days = Math.floor(days);
	
	let hours= (t % oneDay) / oneHour;
	 hours = Math.floor(hours);
	
	
	let min = (t % oneHour) / oneMinute;
	min= Math.floor(min);
	
	let sec = (t % oneMinute)/ oneSec;
   sec=Math.floor(sec);
	
	
	// conversions
	/* 1 sec = 1000ms
	1 minute = 60000
	1 hour = 3600 sec // 3600000 ms
	1 day = 24 * 3600000 ms = 86400000 ms
	*/
	
	
	// set values 
		const values = [days, hours, min, sec ];
	
	// Assuming you have defined the items and values arrays somewhere in your code

function format(item) {
    if (item < 10) {
        return `0${item}`;
    } else {
        return item;
    }
}

items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
});
	if (t< 0){
	clearInterval(countdown);	
	deadline.innerHTML = `<h4 class ="expired"> Sorry this giveaway has expired </h4>`
	}

}

// countdown
// setInterval repeatedly runs the function for every time you pass in the second argument
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
