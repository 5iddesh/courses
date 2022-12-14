import React from 'react'

export default function Mentor3() {
    function handleFollow(e){
        const mentor = e.target.closest(".mentor");

        if(!mentor.classList.contains("followed")){
            mentor.classList.add("followed");
            e.target.innerText = "+ Follow ";
        }else{
            mentor.classList.remove("followed");
            e.target.innerText = "followed";
        }
    }
  return (
    <div className="mentor">
                        <div className="mentor-info">
                            <img src="assets/photomentor2.png" alt="" />
                            <div>
                                <h3>something Torff</h3>
                                <p className='gray'>UI UX . Design</p>
                            </div>
                            <p className='db-c-follow' onClick={handleFollow}>Followed </p>
                        </div>
                        <div className="mentor-course">
                            <div>
                                <img src="assets/bookcourses.png" alt="" />
                                <p>100 Course</p>
                            </div>
                            <p>4,5 (1.200 Review)</p>
                        </div>
                    </div>
  )
}
