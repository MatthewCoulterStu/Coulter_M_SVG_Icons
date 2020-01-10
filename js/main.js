// this is a self-invoking annoymous function also called IIFE or Modle

(() => {

 console.log('hello from JS!')

 // find the elements in the doc
 let toggleButton = document.querySelector(".switch-text"),
 	myHeading  = document.querySelector('h1'),
 	svgImg= document.querySelector('#badge');

 	function changeText() {
 		myHeading.textContent = "what is up? I am script";
 	}

 	function logSVG() {
 		console.log(this. id);
 	}

 	toggleButton.addEventListener("click", changeText);
 	svgImg.addEventListener("mouseover", logSVG);
// document.querySelector('h1').textContent="what is up? I am script"

})();