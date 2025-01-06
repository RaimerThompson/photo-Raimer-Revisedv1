let indexvalue = 1;
ServiceshowImg(indexvalue);
function Sdot(e){ServiceshowImg(indexvalue = e);}
function ServiceshowImg(e){
  let i;
  const Simg = document.querySelectorAll('.phase-service')
  const ServiceSliderDot = document.querySelectorAll('.phase__dots-service span')
  if (e > Simg.length){indexvalue = 1}
  if (e < 1){indexvalue = Simg.length}
  for (i = 0; i < Simg.length; i++){
    Simg[i].style.display = "none";
    // ServiceSliderDot[i].style.background = "blue";
  }
  Simg[indexvalue - 1].style.display = "flex";
  // ServiceSliderDot[indexvalue - 1].style.background = "red";
}

 //image slider
 const pslides = document.querySelector('.slider__service').children;
 const prev = document.querySelector(".prev");
 const next= document.querySelector(".next");
 const indicator = document.querySelector(".phase__dots-slider")
 let index = 0;
 
 prev.addEventListener("click", function(){
   prevSlide();
   updateCircleIndicator()
   resetTimer();
 })
 
 next.addEventListener("click", function(){
   nextSlide();
   updateCircleIndicator()
   resetTimer();
 })

 //cirlce indicators
  function circleIndicator(){
    for(let i=0; i < pslides.length; i++){
      const div = document.createElement('span');
        div.innerHTML = ''
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id=i
        if (i == 0){
          div.className= "phase-slider-active"
        }
        indicator.appendChild(div);
    }
  }

  circleIndicator();

  function indicateSlide(element){
    index = element.id;
    changeSlide()
    updateCircleIndicator()
    resetTimer()
  }

  function updateCircleIndicator(){
    for(let i=0; i < indicator.children.length; i++){
      indicator.children[i].classList.remove('phase-slider-active')
    }
    indicator.children[index].classList.add('phase-slider-active')
  }

 function prevSlide(){
  if (index == 0){
    index = pslides.length-1
  }else{
    index--;
  }
  changeSlide();
}

function nextSlide(){
  if (index == pslides.length-1){
    index = 0;
  }else{
    index++;
  }
  changeSlide();
}

function changeSlide(){
  for (let i=0; i<pslides.length; i++){
      pslides[i].classList.remove('phase-slider-active');
  }

  pslides[index].classList.add('phase-slider-active');
}
