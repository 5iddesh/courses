// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    function handleClick(e){
        console.log(e.target)
        let temp = e.target;
        if(!e.target.classList.contains("menu")){
            temp = e.target.closest(".menu")
        }
        if(!temp.classList.contains("active")){
            let menus = document.querySelectorAll(".menu");
            menus.forEach(menu => menu.classList.remove("active"));
            temp.classList.add("active")
        }
    }

  return (
    <div className="nav">
        {/* <FontAwesomeIcon icon="fa-regular fa-bars" onClick={handleClick}/> */}

                <div className="nav-menu">
                    <Link to='/' className="menu active" onClick={handleClick}>
                        <img src="assets/element-4overview.png" alt="logo" />
                        <p>Overview</p>
                    </Link>
                    <Link to='/all-course' className="menu" onClick={handleClick}>
                        <img src="assets/bookcourses.png" alt="logo" />
                        <p>Courses</p>
                        <img src="assets/arrow-leftlight-arrow.png" alt="" className="rotate light" />
                        <img src="assets/arrow-rightdark-arrow.png" alt="" className="rotate dark" />
                    </Link>
                    <div className="menu">
                        <img src="assets/user-octagonmentors.png" alt="logo" />
                        <p>Mentors</p>
                    </div>
                    <div className="menu">
                        <img src="assets/message.png" alt="logo" />
                        <p>Message</p>
                    </div>
                    <div className="menu">
                        <img src="assets/setting-4setting.png" alt="logo" />
                        <p>setting</p>
                    </div>
                    
                    <div className="upgrade">
                        <img src="assets/upgrade pro.png" alt="upgrade" />
                    </div>
                </div>
            </div>
  )
}
