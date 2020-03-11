var slideIndex,slides,dots;
function initGallery(){
  slideIndex = 0;
  slides=document.getElementsByClassName("holder"); 	
  slides[slideIndex].style.opacity=1;
  
  dots=[];
  var dotsCon=document.getElementById("dotsCon");
  for(var i=0; i<slides.length; i++){
  	var dot=document.createElement("span");
  	dot.classList.add("dots")
  	dot.setAttribute("onClick","moveSlide("+i+")");
  	dotsCon.append(dot);
  	dots.push(dot);
  }

  dots[slideIndex].classList.add("active");

}
  
initGallery();
function plusSl(n)	{
	moveSlide(slideIndex+n);
}
function moveSlide(n) {
		var i;
		var current,next;
		var moveSlideAnimClass={
			forCurrent:"",
			forNext:""
		}

		if(n>slideIndex) {
			        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
		}else if (n<slideIndex){
			if(n<0){n=slides.length -1}
			moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
			moveSlideAnimClass.forNext="moveRightNextSlide";

		}
		if(n!=slideIndex){
			next=slides[n];
			current=slides[slideIndex];
			for( i = 0; i < slides.length; i++) {
				slides[i].className= "holder";
				slides[i].style.opacity=0;
				dots[i].classList.remove("active");
			}
			current.classList.add(moveSlideAnimClass.forCurrent);
			next.classList.add(moveSlideAnimClass.forNext);
			dots[n].classList.add("active");
			slideIndex=n;
		}
}

var timer=null;
function setTimer(){
timer=setInterval(function (){
		plusSl(1);
	},3000);
}
setTimer();