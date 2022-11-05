import React, { useState } from 'react'

export default function Month() {
  const months = ["jan", "feb", "march", "August"]
  const [month, setMonth] = useState(0);

  function handleClick(e){
    if(e.target.classList == "prev"){
      if(month > 0) setMonth(month-1);
    }else{
      if(month < months.length-1) setMonth(month+1)
    }
  }
  return (
    <div className="month">
    <img src="assets/arrow-leftlight-arrow.png" alt="" className='prev' onClick={handleClick}/>
    <h3>{months[month]} 2022</h3>
    <img src="assets/arrow-rightdark-arrow.png" alt="" className='next' onClick={handleClick}/>
</div>
  )
}
