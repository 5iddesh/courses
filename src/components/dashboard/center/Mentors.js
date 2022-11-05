import React, { useState } from 'react'
import Content from './Content'
import Heading from './Heading'

export default function Mentors() {
  const [show ,setShow] = useState(0);
  
  return (
    <section className="mentors">
      <Heading show={show} setShow={setShow}/>
      <Content show={show} />
    </section>
  )
}
