import React, { createContext } from 'react'
import About from '../pages/About'

export const cart = createContext()
const Cartcontext = (props) => {
  return (
    <div>
        <cart.Provider value={<About/>}>
{props.children}
  
        </cart.Provider>
     
    </div>
  )
}

export default Cartcontext