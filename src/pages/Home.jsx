import React, { useContext } from 'react'
import { cart } from '../context/Cartcontext'

const Home = () => {
 const data = useContext(cart)
  return (
    <div className='home'>{data}</div>
  )
}

export default Home