import React from 'react'

export default function Days() {
    function handleClick(e){
        if(!e.target.classList.contains("active") || !e.target.closest(".days").classList.contains("active")){
            const days = document.querySelectorAll(".days");
            days.forEach(day => day.classList.remove("active"));
            if(e.target.classList.contains("days")){
                e.target.classList.add("active");
            }else{
                e.target.closest(".days").classList.add("active");
            }
        }
    }
  return (
    <div className="day-style">
                    <div className="days" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                    <div className="days active" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                    <div className="days" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                    <div className="days" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                    <div className="days" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                    <div className="days" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                    <div className="days" onClick={handleClick}>
                        <div className="day">S</div>
                        <div className="date">13</div>
                    </div>
                </div>
  )
}
