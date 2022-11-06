import React from 'react'
import SideBar from '../dashboard/sidebar/SideBar'
import Header from './Header'
import MainContent from './MainContent'
import './style2.css'

export default function InsideCourse() {
  return (
    <div className='inside-course'>
        <SideBar />
        <Header />
        <MainContent />
    </div>
  )
}
