import React from 'react'
import style from './TimeLine.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function TimeLine() {
  return (
    <div id='Skills' className={style.SkillsTImeLine}>
        <h1>Skills</h1>
<VerticalTimeline lineColor='#00000055' >
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh',marginTop:'5vh' }}
    icon={<img src='/Assets/scratch.png' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">Scratch</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned basic concepts of programming like delcaring variables, If else statements, For loops, Defining a function</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'100%'}}>100%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-html-5-144.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">HTML</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned main concepts of HTML5 like Elements, Tags, Attributes, Nesting,Document Object Model DOM, Semantic HTML</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'100%'}}>100%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-css3-144.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">CSS</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned main concepts of CSS like Selectors, Properties, Values, Box-Model, Layout, Media Queries</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'100%'}}>100%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-javascript-144.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">Vanilla JavaScript</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned latest concepts of Vanilla JS like DOM manipulation, Event Handlers, Variables, Control structures, Functions, AJAX, Error handling, ES6 Features</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'100%'}}>100%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/jquery-icon.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">JQuery</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned main concepts of JQuery like Selectors, DOM manipulation, Events, Effects and animations, AJAX, Plugins, Cross-browser compatibility</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'100%'}}>100%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-java.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">Java Basics</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned basic concepts in Java like Abstraction, Inheritance, polymorphism, Encapsulation</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'70%'}}>70%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-nodejs.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">Node JS</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned in Node Js like API, Asynchronous programming, Node Package Manager NPM, Built-in modules like creating HTTP Server, Express framework, WebSocket</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'90%'}}>90%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-mysql-logo.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">MySQL</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned main concepts of tables, Structured Query Language, Data types</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'100%'}}>100%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-react.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">React JS</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned concepts like Components, JSX, Virtual DOM, State, Props, Event Handling and Some Hooks like useState, useEffect, useRef, UseContext</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'90%'}}>90%</div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ height:'7vh', width:'7vh' ,background: 'rgb(255,255,255)', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center',border:'none',marginTop:'5vh' }}
    icon={<img src='/Assets/icons8-github.svg' alt='' />}
  >
    <h3 className="vertical-timeline-element-title">GitHub</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{marginLeft:'1vh',marginTop:'1vh', lineHeight:'2.5vh'}}>• Learned concepts like Repositories, Commits, Branches, Pull Requests, Issues, Forks</h4>
    <div className={style.container}>
        <div className={style.progress} style={{width:'80%'}}>80%</div>
    </div>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}
