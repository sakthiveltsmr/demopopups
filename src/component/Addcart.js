import React, { useState } from 'react'

const Addtocart = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
        <button id='addcart' onClick={()=>setCount(count+1)}>Addtocart</button>
       {" "} <span id='cartcount'>[{count}]</span>
    </div>
  )
}

export default Addtocart