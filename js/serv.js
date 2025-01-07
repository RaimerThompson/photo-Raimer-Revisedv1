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
SlidershowImg(indexvalue);
function Sliderdot(e){SlidershowImg(indexvalue = e);}
function SlidershowImg(e){
  let i;
  const Slideimg = document.querySelectorAll('.phase-slider')
  const ServiceSliderDot = document.querySelectorAll('.phase__dots-slider span')
  if (e > Slideimg.length){indexvalue = 1}
  if (e < 1){indexvalue = Slideimg.length}
  for (i = 0; i < Slideimg.length; i++){
    Slideimg[i].style.display = "none";
    // ServiceSliderDot[i].style.background = "blue";
  }
  Slideimg[indexvalue - 1].style.display = "flex";
  // ServiceSliderDot[indexvalue - 1].style.background = "red";
}

// const faqsNext = document.querySelectorAll('.next__step');

// faqsNext.forEach(faqNext =>{
//   faqNext.addEventListener("click", ()=>{
//     faqNext.classList.toggle("next-active")
//   })
// })
