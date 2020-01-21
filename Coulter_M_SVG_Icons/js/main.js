// this is a self-invoking annoymous function also called IIFE or Modle

(() => {

 console.log('hello from JS!')

 // find the elements in the doc
 let toggleButton = document.querySelector(".switch-text"),
 	myHeading  = document.querySelector('h1'),
 	//svgImg= document.querySelector('#badge'), 
 	allSVGs = document.querySelectorAll(".svg");

 	function changeText() {
 		myHeading.textContent = "what is up? I am script";
 	}

 	function logSVG() {
 		console.log(this. id);
 	}

//things the user can do to make things happen
 	toggleButton.addEventListener("click", changeText);
 	allSVGs.forEach(item => item.addEventListener("click", logSVG));
 	//svgImg.addEventListener("click", logSVG);
// document.querySelector('h1').textContent="what is up? I am script"

})();