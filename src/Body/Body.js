import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Intro from '../Intro/Intro'
import Reviews from '../Reviews/Reviews'
import TimeLine from '../TimeLine/TimeLine'
import Works from '../Works/Works'
import style from './Body.module.css'


export default function Body() {

  return (
    <div className={style.Body}>
      <Intro />
      <About />
      <TimeLine />
      <Works />
      <Reviews />
      <Contact />
    </div>
  )
}
