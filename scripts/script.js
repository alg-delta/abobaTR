// Старт модалка

let openModal=document.querySelectorAll(".banner-btn-explore");

let closeModal=document.querySelector(".close-modal");

let modalWrapper=document.querySelector(".modal-wrapper");

let modalBtn=document.querySelector(".modal-btn");

for(item of openModal){
item.addEventListener("click", function() {
	modalWrapper.style.display = "flex";
});
}

closeModal.addEventListener("click", function () {
	modalWrapper.style.display = "none";
});

modalBtn.addEventListener("click", function () {
	modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", function(event) {	
	if(event.target === modalWrapper) {
		modalWrapper.style.display = "none";
	}
});

window.addEventListener("keydown",function(event) {
	if (event.code === "Escape") {
		modalWrapper.style.display = "none";
	}
});

// ---------------- THE END МОДАЛКА


// СТАРТ ТАБОВ

let tabs=document.querySelectorAll(".tab");

let cards=document.querySelectorAll(".card");

for (card of cards){
	let cardId = card.getAttribute("data-id");
	if(cardId === "centre") {
			card.style.display = "block";
	} else {
			card.style.display = "none";
	}
}

for (tab of tabs){
	tab.addEventListener("click", onClickTab);
}

function onClickTab(event){
	for (tab of tabs){
		tab.classList.remove("tabs-active");
	}
	
	let activeTab = event.target;
	
	activeTab.classList.add("tabs-active");
	
	let filter = activeTab.getAttribute("data-target");
	console.log(filter);
	
	for (card of cards){
		let cardId = card.getAttribute("data-id");
		
		if(cardId === filter) {
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	}
}

// ---------------- THE END ТАБИ

//СТАРТ СЛАЙДЕР

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let sliderNext = document.querySelector(".nextBtn");
let sliderBack = document.querySelector(".backBtn");

let activeSlide = 0;

showSlide(activeSlide);

function showSlide(n) {
	
	if(n>slides.length - 1) {
		activeSlide = 0;
	}
	
	if(n<0) {
		activeSlide = slides.length - 1;
	}
	
	for(let i=0; i<slides.length; i++){
		slides[i].style.display="none";
		dots[i].classList.remove("active");
	}
	
	slides[activeSlide].style.display="flex";
	dots[activeSlide].classList.add("active");
}

sliderNext.addEventListener("click", function(){
	activeSlide = activeSlide+1;
	showSlide(activeSlide);
})

sliderBack.addEventListener("click", function(){
	activeSlide = activeSlide-1;
	showSlide(activeSlide);
})

for(let i=0; i<slides.length; i++){
	dots[i].addEventListener("click", function(){
		activeSlide = i;
		showSlide(activeSlide);
	})
}
// ---------------- THE END СЛАЙДЕР

