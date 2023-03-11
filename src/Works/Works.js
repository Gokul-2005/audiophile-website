import React, { useEffect, useRef, useState } from 'react'
import style from './Works.module.css'

export default function Works() {
    const projectImgArr = [{
        id:'1',
        title : 'Notes App',
        desciption : 'Full-Stack Application Node.js + Express',
        backgroundImage : 'Assets/notesScreen.png',
        link : "https://github.com/Gokul-2005/Notes-App-FullStack",
        type : 'node,git,Best'
    },{
        id:'2',
        title : 'Weather App',
        desciption : 'Web Application React Framework + API',
        backgroundImage : 'Assets/weatherApp.png',
        link : "https://weather-app-vgy.netlify.app/",
        type : 'react,website,Best'
    },{
        id:'3',
        title : 'Product Feedback App',
        desciption : 'Web Application Node.js + Express',
        backgroundImage : 'Assets/ProductFeedback.png',
        link : "https://github.com/Gokul-2005/Product-FeedBack-FullStack",
        type : 'node,git,Best'
    },{
        id:'4',
        title : 'Invoice App',
        desciption : 'Web Application Node.js + Express',
        backgroundImage : 'Assets/invoiceApp.png',
        link : "https://github.com/Gokul-2005/Invoice-App-Full-Stack-",
        type : 'node,git,Best'
    },{
        id:'5',
        title : 'Fortee',
        desciption : 'Game vanillaJS final project',
        backgroundImage : 'Assets/fortee.png',
        link : "https://fortee.netlify.app/",
        type : 'project,website,Best'
    },{
        id:'6',
        title : 'Todo App',
        desciption : 'Web Application React Framework',
        backgroundImage : 'Assets/todoApp.png',
        link : "https://todo-in-react-js.netlify.app/",
        type : 'react,website,Best'
    },{
        id:'7',
        title : 'Iteractive Comment-Section',
        desciption : 'FullStack Feature using database',
        backgroundImage : 'Assets/commentSection.png',
        link : "https://github.com/Gokul-2005/Comment-Section-FullStack",
        type : 'node,git'
    },{
        id:'8',
        title : 'Password Generator App',
        desciption : 'Assignment After stream seperation',
        backgroundImage : 'Assets/passwordGenerator.png',
        link : "https://password-generator-vgy.netlify.app/",
        type : 'assignment,website'
    },{
        id:'9',
        title : 'Maps',
        desciption : 'Done this assignment by referred API and plugins',
        backgroundImage : 'Assets/maps.png',
        link : "https://mapcloneapi.netlify.app/",
        type : 'assignment,website'
    },{
        id:'10',
        title : 'IP Tracker',
        desciption : 'Done this assignment in API & Coding challenge',
        backgroundImage : 'Assets/ipTracker.png',
        link : "https://ip-tracker-application.netlify.app",
        type : 'react,website'
    },{
        id:'11',
        title : 'audiophile ecommerce website',
        desciption : 'Fullstack Ecommerce Website',
        backgroundImage : 'Assets/audiophile.png',
        link : "https://github.com/Gokul-2005/audiophile-website-react",
        type : 'node,git,Best'
    },{
        id:'12',
        title : 'Multiplayer Tic Tac Toe',
        desciption : 'Mini Game',
        backgroundImage : 'Assets/tictactoe.png',
        link : "https://js-009.gokul-yadhavyad.repl.co/",
        type : 'assignment,website'
    }];
    const [state,setState] = useState(projectImgArr);
    const sortParentRef = useRef(null);
    const [temp,setTemp] = useState(true);

    const selectSort = (ele,value) => {
        console.log(value);
        for (let i = 0; i < sortParentRef.current.children.length; i++) {
            if((sortParentRef.current.children[i].innerText).includes(value)){
                sortParentRef.current.children[i].style.backgroundColor="black";
                sortParentRef.current.children[i].style.color='white';
            }
            else{
                sortParentRef.current.children[i].style.backgroundColor='transparent'
                sortParentRef.current.children[i].style.color='black'
            }
        }
        const tempArr = [];
        if(value==='Best'){
            projectImgArr.forEach((ele) => {if((ele.type).includes('Best')) tempArr.push(ele) })
        }
        if(value==='Node.js'){
            projectImgArr.forEach((ele) => {if((ele.type).includes('node')) tempArr.push(ele) })
        }
        if(value==='React'){
            projectImgArr.forEach((ele) => {if((ele.type).includes('react')) tempArr.push(ele) })
        }
        if(value==='Websites'){
            projectImgArr.forEach((ele) => {if((ele.type).includes('website')) tempArr.push(ele) })
        }
        if(value==='Git Repos'){
            projectImgArr.forEach((ele) => {if((ele.type).includes('git')) tempArr.push(ele) })
        }
        setState(tempArr);
        setTemp(!temp);
    }

    useEffect(() => {
        selectSort("","Best")
    },[])

    const showBreif = (ele) => {
        let index = ele.target.parentNode.id;
        let title , desciption;
        projectImgArr.forEach((ele) => {
            if(ele.id===index){
                title = ele.title;
                desciption = ele.desciption;
            }
        })
        ele.target.parentNode.children[1].innerText=title
        ele.target.parentNode.children[2].innerText=desciption
    }

    const closeBreif = (ele) => {
        ele.target.parentNode.children[1].innerText=' '
        ele.target.parentNode.children[2].innerText=" "
    }

    const navigateToPage = (elem) => {
        let link ; 
        projectImgArr.forEach((ele) => {if(ele.id===elem.target.parentNode.id) link = ele.link})
        window.open(link);
    }
  return (
    <div className={style.Works} id='Works'>
      <h1>Works</h1>
      <div className={style.SortProjectBox} ref={sortParentRef} >
        <button className={style.ClassForWorkButton} style={{backgroundColor:"black",color:"white"}} onClick={(event) => selectSort(event,"Best")}>Best Works</button>
        <button className={style.ClassForWorkButton} onClick={(event) => selectSort(event,"Node.js")}>Node.js</button>
        <button className={style.ClassForWorkButton} onClick={(event) => selectSort(event,"React")}>React</button>
        <button className={style.ClassForWorkButton} onClick={(event) => selectSort(event,"Websites")}>Websites</button>
        <button className={style.ClassForWorkButton} onClick={(event) => selectSort(event,"Git Repos")}>Git Repos</button>
      </div>
      <div className={style.projectMain}>
    {
        state.map((ele,index) => {
            return <div key={index} id={ele.id} className={style.projectBody}>
                    <img className={style.projectImage} src= {ele.backgroundImage} alt=''/>
                    <h2 onMouseEnter={(event) => {showBreif(event,this)}} onMouseLeave={(event) => {closeBreif(event,this)}} onClick={(event) => {navigateToPage(event,this)}} className={style.title}> </h2>
                    <h2 onMouseEnter={(event) => {showBreif(event,this)}} onMouseLeave={(event) => {closeBreif(event,this)}} onClick={(event) => {navigateToPage(event,this)}} className={style.description}> </h2>
                </div>
        })
    }
      </div>
    </div>
  )
}
