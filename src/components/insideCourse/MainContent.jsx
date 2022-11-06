import React from 'react'
import CourseFlex from './CourseFlex'
import CourseMain from './CourseMain'
import Togggle from './Togggle'

export default function MainContent() {
  return (
    <div className='i-main'>
      <div>
        <img src='asssetsIC/arrow-left.png' alt='arrow-left' className='i-arrow-left' />
        <img src='asssetsIC/video.png' alt="video" className='i-video' />

        <div className='i-course-description' >
            <CourseMain />
            <CourseFlex />
            <Togggle />
        </div>
      </div>
      
    </div>
  )
}
