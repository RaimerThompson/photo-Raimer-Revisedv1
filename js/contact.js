
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_kmv559q', 'template_xnu3zqy', '#contact-form', 'IM4aNjqZUrkU_qI4S')
    .then(() =>{
  //show sent message 
    contactMessage.textContent = 'Thanks for Submitting!'

  //remove message after 2 seconds
  setTimeout(() => {
    contactMessage.textContent = ''
  }, 2000);

  //clear input fields
  contactForm.reset()
  }, () =>{
    //show error message
    contactMessage.textContent = 'Sorry, message was not recieved ❌'
  })
}

contactForm.addEventListener('submit', sendEmail);



// Vs4d0AsUtYr3Zbvh_


