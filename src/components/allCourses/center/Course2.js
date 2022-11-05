import React from 'react'
import { Link } from 'react-router-dom'

export default function Course2() {
    const style = {
        textDecoration: "none",
        color: 'black'
    }
  return (
    <Link to='/' className="course" style={style}>
    <img src="assetsAc/photocourse1 (1).png" alt="" />
    <h3>Introduction Basic Programming HTML & CSS</h3>
    <div className="course-mentor">
        <div>
            <img src="assetsAc/Ellipse 474user1.png" alt="" />
            <p>Alfredo Rhiel Madsen</p>
        </div>
        <p>4,5</p>
    </div>
    <div className="course-info">
        <div>
            <img src="assetsAc/userstudent.png" alt="" />
            <p>500 student</p>
        </div>
        <div>
            <img src="assetsAc/documentmodule.png" alt="" />
            <p>5 Module</p>
        </div>
        <div>
            <img src="assetsAc/clock (1).png" alt="" />
            <p>1h 30m</p>
        </div>
    </div>
</Link>
  )
}
