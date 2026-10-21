import React from 'react'
import { toast } from 'react-toastify'

const About = () => {
const massage = ()=> toast("Wow So Nice")

  return (
    <div className='main'>
      <button className='btn'  onClick={massage}>
        Click Me</button>
   
    </div>
  )
}

export default About