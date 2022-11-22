import React, { useState } from 'react'

const Addtocart = () => {
    const[count,setCount]=useState(0)
    
    var OptiMonkOnReady= function(){
        var cart=window.OptiMonk.Visitor.createAdapter();
        cart.Cart.add(`product${count}`,{'quantity':count,'price':count+100})
        console.log(cart.Cart.get())
    }
    const handelsubmit=()=>{
        setCount(count+1)
        OptiMonkOnReady()
    }
  return (
    <div>
        <button id='addtocart' onClick={()=>handelsubmit()}>Addtocart</button>
      <span id='_cart_total'>[{count}]</span>
    </div>
  )
}

export default Addtocart
