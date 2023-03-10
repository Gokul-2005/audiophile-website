import React from 'react'
import style from './Header.module.css'
export default function Header() {
  return (
    <div className={style.Header}>
      <div className={style.Left}>
      <img src='/Assets/Untitled.png' id={style.logoImg} alt='' />
      <h3 className={style.zsTag}><lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_c5nl8ot1.json"  background="transparent"  speed="1"  style={{width: "5vh", height: "5vh"}}  loop  autoplay></lottie-player>ZS-ID : ZSTTK327  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src='/Assets/mail.png' alt='' style={{width:'3vh' , height:'3vh'}}/>&nbsp;&nbsp;gokulyadhav.v@zohocorp.com </h3>
      </div>
      <div id={style.right}>
      <h1 id={style.myName}>Gokul Yadhav V</h1>
      </div>
    </div>
  )
}
