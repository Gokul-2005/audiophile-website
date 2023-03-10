import React from 'react'
import style from './Intro.module.css'
export default function Intro() {
  return (
    <div id='Intro' className={style.Intro}>
      <div className={style.Left}>
        <img src='/Assets/myProfle.png' id={style.profileImg} alt=""/>
      </div>
      <div className={style.Right}>
        <h2 className={style.hi}>Hi</h2>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_pa2kzq5x.json"  background="transparent"  speed="1"  style={{width: "18vh", height: "18vh",marginLeft:"2vh"}}  loop  autoplay></lottie-player>
          <h1>I’m Gokul Yadhav V</h1> 
          <h3 className={style.designation}>Front end developer and designer.</h3>
        <a href='#About'><lottie-player id={style.downArrow} src="https://assets10.lottiefiles.com/packages/lf20_uzoyW6.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player></a>
      </div>
    </div>
  )
}
