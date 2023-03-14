import React from 'react'
import style from './SIdeNavBar.module.css'
export default function SideNavBar() {
  const navIcon = [['#Intro','/Assets/intro.png'],['#About','/Assets/about.png'],['#Skills','/Assets/skills.png'],['#Works','/Assets/works.png'],['#Reviews','/Assets/reviews.png'],['#Contact','/Assets/contact.png']]
  return (
    <div className={style.SideNavBar}>
    <div className={style.navBar}>
      {
        navIcon.map((ele,index) => {
          return <a href={ele[0]} title={ele[0].substring(1,ele[0].length)} key={index}><img className={style.navIcon} src={ele[1]} alt=''/></a>
        })
      }
    </div>
    </div>
  )
}
