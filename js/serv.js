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
  }
  Simg[indexvalue - 1].style.display = "flex";
}