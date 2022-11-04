import React from 'react'
import Center from './center/Center'
import Right from './right/Right'
import SideBar from './sidebar/SideBar'

export default function Dashboard() {
  return (
    <div class="main">
      <SideBar />
      <Center />
      <Right />
    </div>
  )
}
