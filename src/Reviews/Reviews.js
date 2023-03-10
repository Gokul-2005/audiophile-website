import React, { useEffect, useState } from 'react'
import style from './Reviews.module.css'
export default function Reviews() {
    const [state,setState] = useState(0);
    const [tempState,setTempState] = useState(true);
    useEffect(()=>{

    },[tempState])
    const videoArr = ['Assets/notesapp.mp4','Assets/productfeedback.mp4','Assets/invoiceapp.mp4','Assets/commentsection.mp4'];

    const videoChange = (con,ele) => {
        if(ele==='previous'){
            if(state===0){
                setState(videoArr.length-1);
                setTempState(!state);
            }
            else{
                setState(state-1);
                setTempState(!state);
            }

        }
        else{
            if(state===videoArr.length-1){
                setState(0);
                setTempState(!state);
            }

            else{
                setState(state+1);
                setTempState(!state);
            }

        }
    }

  return (
    <div className={style.Reviews} id='Reviews'>
      <lottie-player onClick={ (event) => {videoChange(event,'previous')}} src="https://assets1.lottiefiles.com/packages/lf20_tuwojxyr.json"  background="transparent"  speed="1"  style={{width: "10vh", height: "10vh",}} hover loop  ></lottie-player>
      <video src={videoArr[state]} controls />
      <lottie-player onClick={ (event) => {videoChange(event,'forward')}} src="https://assets7.lottiefiles.com/packages/lf20_oofmmhkt.json"  background="transparent"  speed="1"  style={{width: "10vh", height: "10vh",}} hover loop  ></lottie-player>
    </div>
  )
}
