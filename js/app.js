const faqs = document.querySelectorAll('.faq__div');

faqs.forEach(faq =>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("faq-active")
  })
})

