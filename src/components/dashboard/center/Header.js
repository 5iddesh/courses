import React from 'react'

export default function Header() {
  function handleClick(e) {
    const input = document.querySelector(".db-search");
    if(input.style.display != "block"){
      input.style.display = "block";
    }else{
      input.style.display = "none";

    }
  }
  return (
    <div className="db-header">
                <div className="db-h-info">
                    <h2>Hi, Pristia</h2>
                    <p>Let’s learn something new today!</p>
                </div>
                <div className="db-h-menus">
                    <input className='db-search'placeholder='search here'/>
                    <img src="assets/search-normal.svg" alt="" onClick={handleClick} />
                     <img src="assets/notif.png" alt="notify"/>
                     <img src="assets/Rectangle 5997login-image.png" alt=""/>
                </div>
            </div>
  )
}
