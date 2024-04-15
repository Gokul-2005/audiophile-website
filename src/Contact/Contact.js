import React from 'react'
import emailjs from 'emailjs-com'
import style from './Contact.module.css'
export default function Contact() {
    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'email', e.target, 'service_afoxmxy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
  return (
    <div className={style.Contact} id='Contact'>
      <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_6iywfzg9.json"  background="transparent"  speed="1"  style={{width: "30vh", height: "30vh",}}  loop  autoplay></lottie-player>
      <form onSubmit={sendMail} className={style.contactMain}>
        <input type='text' required={true} placeholder='Enter Your Name' className ={style.textClass} name='name'/>
        <input type = 'email' required={true} placeholder='Enter Your Email Address' className ={style.textClass} name='email' />
        <input type='text' required={true} placeholder='Enter The Subject' className ={style.textClass} name='subject' /> 
        <textarea required={true} placeholder='Enter Your Message...' name='message'></textarea>
        <input type='submit' id={style.sendButton} value='SEND'></input>
      </form>
    </div>
  )
}
