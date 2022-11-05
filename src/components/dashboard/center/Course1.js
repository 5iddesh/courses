import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Course1() {
  const style = {
    textDecoration: "none",
    color: "black"
  }
  function handleClick(e){
    // alert("clicked")
    // <Navigate to='/all-course' ></Navigate>
    // if(!e.target.closest("faculty")){
    // }
  }
  return (
    <Link to='/all-course' className="course show"  style={style}>
                        <img src="assets/photocourse1.png" alt="" />
                        <h3>Creating Beautifull Landing Page in 1 Hour</h3>
                        <div className="faculty">
                            <div>

                                <img src="assets/photomentor1.png" alt="" />
                                <p>Lincoln George</p>
                            </div>
                            <p className="rating">4.5</p>
                        </div>
                    </Link>
  )
}
