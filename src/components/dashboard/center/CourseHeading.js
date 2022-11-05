import React from 'react'

export default function CourseHeading(props) {
  function handleCourseList(e){
    const mentors = document.querySelectorAll(".course");
    mentors.forEach(mentor => mentor.classList.remove("show"));
    if(e.target.classList.contains("prev")){
      if(props.show != '0') {
        if(props.show == '1'){
          props.setShow(0);
          mentors[0].classList.add("show");
          mentors[1].classList.add("show");
        }else{
          mentors[show-1].classList.add("show");
          mentors[show-2].classList.add("show");
          props.setShow(show-2);
        }
      }else{
        mentors[0].classList.add("show");
        mentors[1].classList.add("show");
      }
    }else{
      if(props.show+1 != mentors.length-1){
        if(props.show+1 == mentors.length-2){
          props.setShow(mentors.length-2);
          mentors[mentors.length-1].classList.add("show");
          mentors[mentors.length-2].classList.add("show");
        }else{
          mentors[show+1].classList.add("show");
          mentors[show+2].classList.add("show");
          props.setShow(show+2);
        }
      }else{
        mentors[mentors.length-1].classList.add("show");
        mentors[mentors.length-2].classList.add("show");
      }
    }
  }
  return (
    <div className="heading">
                    <h2>Monthly Courses</h2>
                    <div>

                        <img src="assets/arrow-leftlight-arrow.png" alt="" className='prev'  onClick={handleCourseList}/>
                        <img src="assets/arrow-rightdark-arrow.png" alt="" className='next'  onClick={handleCourseList}/>
                    </div>
                </div>
  )
}
