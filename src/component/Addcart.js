import React, { useState } from 'react'

const Addtocart = () => {
    const[count,setCount]=useState(0)
    
    const handelsubmit=()=>{
        setCount(count+1)
        window.OptiMonkOnReady(count)
    }
  return (
    <div>
        <button id='addtocart' onClick={()=>handelsubmit()}>Addtocart</button>
      <span id='_cart_total'>[{count}]</span>
    </div>
  )
}

export default Addtocart
