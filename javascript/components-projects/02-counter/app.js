// Set initial count
let count = 0;

// Selecting value and buttons
const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList; // to get the contents of the class
    if (styles.contains("decrease")) {
      count--;
    } 
  else if (styles.contains("increase")){
  count++;
  }
	  else {
	  count=0;
	  }
	  
	  if (count > 0){
	  value.style.color= 'green';
	  }
	   else if (count < 0){
	  value.style.color= 'red';
	  }
	  
	  else {
	  value.style.color='#222';
	  }
    value.textContent = count;
	  
	  
	  
	  
  });
});

