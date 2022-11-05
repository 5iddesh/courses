import React, { useState } from 'react'
import CourseHeading from './CourseHeading'
import Courses from './Courses'

export default function MonthlyCourses() {
  const [show ,setShow] = useState(0);
  return (
    <section className="monthly-courses">
        <CourseHeading show={show} setShow={setShow} />
        <Courses />
    </section>
  )
}
