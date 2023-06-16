

// Javascript basics

const text = " I am a string";
const newStr = text.replace("string", "developer");
alert(newStr);

console.log("\n");

const myarray=["I", "love", "Jesus","Christ"];
const make_string=myarray.join(" ");
console.log(make_string);
alert(make_string);

const myNumber= Math.random();
console.log(myNumber);
alert(myNumber);


function random(number){
return Math.floor(Math.random()*number);
}

console.log(random(50));
alert(random(58));

function hello(name="Chris"){
	console.log(`Hello ${name}!`)
	
}
alert(hello("YAw"));

function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);


