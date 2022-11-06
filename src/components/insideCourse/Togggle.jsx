import React, { useState } from 'react'
import ToggleContent from './ToggleContent';

export default function Togggle() {
    const [active, setActive] = useState(0);

    const options = [
        {
            name: "About",
            className: "i-toggle-option active"
        },
        {
            name: "Assignment",
            className: "i-toggle-option"
        },
        {
            name: "Tools",
            className: "i-toggle-option"
        },
        {
            name: "Review",
            className: "i-toggle-option"
        }
    ]

    function handleClick(e){
        const options = document.querySelectorAll(".i-toggle-option");
        options.forEach(option => option.classList.remove("active"));
        
        e.target.classList.add("active");
        setActive(e.target.id);
    }

  return (
    <div className='i-toggle'>
        <div className='i-toggle-flex'>
        {
            options.map((option, index) => {
                return (
                    <div key={index} className={option.className} onClick={handleClick} id={index} >{option.name}</div>
                )
            })
        }
        </div>
        <div>
            <ToggleContent active={active} /> 
        </div>
    </div>
  )
}
