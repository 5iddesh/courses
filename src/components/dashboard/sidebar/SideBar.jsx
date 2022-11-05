import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

export default function SideBar() {
  function handleClick(e) {
    const sideBar = document.querySelector(".side-bar");
    const wrong = document.querySelector(".wrong");
    if(sideBar.style.display !== "block"){
      sideBar.style.display = "block";
      e.target.style.display = "none";
      wrong.style.display = "block";
    }
    // console.log(hamburger, "sideBar is gone", sideBar.style.display, e.target.style.display)
  }

  function handleWrong(e) {
    const sideBar = document.querySelector(".side-bar");
    const hamburger = document.querySelector(".hamburger");
    if(sideBar.style.display !== "none"){
      sideBar.style.display = "none";
      e.target.style.display = "none";
      hamburger.style.display = "block";
    }
  }
  return (
    <>
        {/* <img src="assets/arrow-rightdark-arrow.png" alt="" className="hamburger" onClick={handleClick}/>
        <img src="assets/arrow-leftlight-arrow.png" alt="" className="wrong" onClick={handleWrong}/> */}
        <div className='bg-white'>

        <img src='assets/menuhamburger.png' alt='' className='hamburger' onClick={handleClick} />
        </div>
        <img src="assets/closewrong.png" alt="" className="wrong" onClick={handleWrong}/>

    <div className="side-bar">

      <Logo />
      <Nav />
    </div>
    </>
  )
}
