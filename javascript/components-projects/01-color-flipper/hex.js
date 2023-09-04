const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// we want to use the color #f15025 
const btn =document.getElementById('btn');
const color= document.querySelector(".color");


btn.addEventListener("click", function(){
let hexColor='#';
	for(let i=0; i<6; i++){ // explains why we are looping 6 times 
	// Generate a random index between 0 and 15 to select a character from the 'hex' array
    const randomIndex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomIndex];
	}
	
	
	color.textContent= hexColor;
	document.body.style.backgroundColor= hexColor;
});