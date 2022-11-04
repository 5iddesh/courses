import React from 'react'
import Header from './Header'
import Mentors from './Mentors'
import MonthlyCourses from './MonthlyCourses'
import Tracking from './Tracking'

export default function Center() {
  return (
    <div class="center">
      <Header />
      <Tracking />
      <Mentors />
      <MonthlyCourses />
    </div>
  )
}
