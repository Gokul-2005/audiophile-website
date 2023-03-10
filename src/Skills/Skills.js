import React from 'react'
import style from './Skills.module.css'
export default function Skills() {
  return (
    <div id='Skills' className={style.Skills}>
      <h1>Skills</h1>
      <div className={style.skillBox}>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-html-5-144.svg' alt='' />
        <h3 className={style.skillName}>HTML</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-css3-144.svg' alt='' />
        <h3 className={style.skillName}>CSS</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-javascript-144.svg' alt='' />
        <h3 className={style.skillName}>Vanilla JS</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/jquery-icon.svg' style={{width:"150px" , height:"144px"}} alt='' />
        <h3 className={style.skillName}>JQuery</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-java.svg' alt='' />
        <h3 className={style.skillName}>Java Basics</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-mysql-logo.svg' alt='' />
        <h3 className={style.skillName}>MySQL</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-nodejs.svg' alt='' />
        <h3 className={style.skillName}>Node JS</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-react.svg' style={{height:'150px',width:'144px'}} alt='' />
        <h3 className={style.skillName}>React JS</h3>
      </div>
      <div className={style.mainSkill}>
        <img src='/Assets/icons8-github.svg' alt='' />
        <h3 className={style.skillName}>GitHub</h3>
      </div>
      </div>
      <a href='#Works'><lottie-player id={style.downArrow} src="https://assets10.lottiefiles.com/packages/lf20_uzoyW6.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player></a>
    </div>
  )
}
