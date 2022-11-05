import React from 'react'
import Button from './Button'
import CourseHandler from './CourseHandler'
import CourseImage from './CourseImage'
import Flex1 from './Flex1'
import Flex2 from './Flex2'
import Header from './Header'
import Where from './Where'

export default function CourseInfo() {
  return (
    <div className="db-course-info">
        <Header />
      <CourseImage />
      <CourseHandler />
      <Flex1 />
      <Flex2 />
      <Where />
      <Button />
    </div>
  )
}
