import React from 'react'
import Days from './Days'
import Month from './Month'

export default function Calender() {
  return (
    <div className="calender">
      <Month />
      <Days />
    </div>
  )
}
