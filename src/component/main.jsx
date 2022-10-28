import React from 'react'
import { Link } from 'react-router-dom'
import Addtocart from './Addcart'

const Main = () => {
  return (
    <div className='App'>
        <h2>Retainfull</h2>
        
        <Addtocart/>
        <label><Link to='/1'>next</Link></label>
    </div>
  )
}

export default Main