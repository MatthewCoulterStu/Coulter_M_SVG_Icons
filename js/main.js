(() => {

 let	allIcons= document.querySelectorAll('.icons'),
 		myHeading= document.querySelector('h1')
 		strawberry= document.querySelector('#strawberry')
 		cherry= document.querySelector('#cherry')
 		bannana= document.querySelector('#bannana')
 		coconut= document.querySelector('#coconut')
 		grape= document.querySelector('#grape')
 		lemon= document.querySelector('#lemon')
 		pear= document.querySelector('#pear')
 		pineapple= document.querySelector('#pineapple')
 		apple= document.querySelector('#apple')
 		watermelon= document.querySelector('#watermelon')

 	function changeTextStrawberry() {
 		myHeading.textContent = "Strawberry";
 	}	

 	function changeTextCherry() {
 		myHeading.textContent = "Cherry";
 	}

 	function changeTextBannana() {
 		myHeading.textContent = "Bannana";
 	}	

 	function changeTextCoconut() {
 		myHeading.textContent = "Coconut";
 	}

 	function changeTextGrape() {
 		myHeading.textContent = "Grape";
 	}	

 	function changeTextLemon() {
 		myHeading.textContent = "Lemon";
 	}	

 	function changeTextPear() {
 		myHeading.textContent = "Pear";
 	}	

 	function changeTextPineapple() {
 		myHeading.textContent = "Pineapple";
 	}	

 	function changeTextApple() {
 		myHeading.textContent = "Apple";
 	}	

 	function changeTextWatermelon() {
 		myHeading.textContent = "Watermelon";
 	}	

 	function logSVG() {
 		console.log(this. id);
 	}

 	allIcons.forEach(item => item.addEventListener("click", logSVG));
 	strawberry.addEventListener("click", changeTextStrawberry);
 	cherry.addEventListener("click", changeTextCherry);
 	bannana.addEventListener("click", changeTextBannana);
 	coconut.addEventListener("click", changeTextCoconut);
 	grape.addEventListener("click", changeTextGrape);
 	lemon.addEventListener("click", changeTextLemon);
 	pear.addEventListener("click", changeTextPear);
 	pineapple.addEventListener("click", changeTextPineapple);
 	apple.addEventListener("click", changeTextApple);
 	watermelon.addEventListener("click", changeTextWatermelon);

})();