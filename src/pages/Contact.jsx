import React, { useContext } from 'react'
import Cartcontext, { cart } from '../context/Cartcontext'

const Contact = () => {
 const data =  useContext(cart)
  return (
    <div className='contact'>{data}</div>
  )
}

export default Contact