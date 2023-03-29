import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <div id="About" className={style.About}>
      <h1 className={style.aboutHeader}>About Me</h1>
      <div className={style.bottom}>
        <div className={style.Left}>
        <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_igfaivqx.json"  background="transparent"  speed="1"  style={{width: "50vh", height: "50vh",}}  loop  autoplay></lottie-player>
        </div>
        <div className={style.Right}>
        <h3 className={style.classForAboutH3}>• I’m a Front end developer who writes clean, elegant and efficient code.</h3>
        <h3 className={style.classForAboutH3}>• I’m a front-end developer passionate about building accessible web apps that users love.</h3>
        <h3 className={style.classForAboutH3}>• As a frontend developer, I specialize in developing the user interface of websites and web applications.</h3>
        <h3 className={style.classForAboutH3}>• I love to work together and team collaboration.</h3>
        <a href='#Skills'><lottie-player id={style.downArrow} src="https://assets10.lottiefiles.com/packages/lf20_uzoyW6.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player></a>
        </div>
        </div>
    </div>
  )
}
