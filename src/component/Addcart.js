import React, { useState } from 'react'

const Addtocart = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
        <button id='addtocart' onClick={()=>setCount(count+1)}>Addtocart</button>
       {" "} <span id='_cart_total'>[{count}]</span>
    </div>
  )
}

export default Addtocart
