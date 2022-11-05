import React from 'react'

export default function Heading(props) {
    function handleClick(e){
        
    }
  return (
    <div className={props.class}>
      <h2>{props.h2}</h2>
      <div>
        <img src={props.img1} alt="" onClick={handleClick}/>
        <img src={props.img2} alt="" onClick={handleClick}/>
    </div>
    </div>
  )
}
