import React from 'react'
import { Link } from 'react-router-dom'

export default function Course2() {
  const style = {
    textDecoration: "none",
    color: "black"
  }
  return (
    <Link to='/all-course' className="course show" style={style}>
      <img src="assets/photocourse2.png" alt="" />
      <h3>Animation is the Key of Successfull UI/UX Design</h3>
      <div className="faculty">
          <div>

              <img src="assets/photomentor2.png" alt="" />
              <p>Emerson Siphron</p>
          </div>
          <p className="rating">4.5</p>
      </div>
</Link>
  )
}
