document.querySelectorAll('.image-container img').forEach(box =>{
  box.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'flex';
    document.querySelector('.popup-image img').src = box.getAttribute('src');
    
  }
})

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}
   