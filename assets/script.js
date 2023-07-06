const slides= [
	// [0]
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	// [1]
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	// [2]
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	// [3]
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
let numero = 0;


const bulletsContainer=document.querySelector(".dots");
slides.forEach(function(slide,index){
	const dot = document.createElement("div")
	dot.classList.add("dot")
	if (index === 0){
		dot.classList.add("dot_selected")
	}  
	bulletsContainer.appendChild(dot)
})

// Bullet slider
const bullets = document.querySelectorAll(".dot");

// Change slide & bullet
function ChangeSlide(sens) {
	
	numero = numero + sens;
	if (numero > slides.length -1)
		numero = 0;
	if (numero < 0)
		numero = slides.length -1;

	document.getElementById("slide").src = "assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagline").innerHTML = slides[numero].tagLine;


	bullets.forEach(function(bullet){
		bullet.classList.remove("dot_selected")
	})

	bullets[numero].classList.add("dot_selected");
}


// Event Listeners
const previousButton = document.getElementById("arrowLeft");
previousButton.addEventListener("click", function(){
	ChangeSlide(-1)
})

const nextButton= document.getElementById("arrowRight");
nextButton.addEventListener("click", function(){
	ChangeSlide(1);
})
