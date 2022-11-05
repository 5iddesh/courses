import React from 'react'
import Center from './center/Center'
import Right from './right/Right'
import SideBar from './sidebar/SideBar'
import './style.css'

export default function Dashboard() {
  return (
    <div className="main">
      <SideBar />
      <Center />
      <Right />
    </div>
  )
}
