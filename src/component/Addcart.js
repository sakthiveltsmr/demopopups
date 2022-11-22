import React, { useEffect, useState } from 'react'

const Addtocart = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
      let d = document.querySelectorAll("#addtocart")
     console.log(d);
     console.log( d[0].innerHTML)
   d.forEach((r)=>{
     r.addEventListener('click',()=>{
       window.OptiMonkOnReady(count)
       })
   })
   },[])

    const update = ()=>{

      console.log("nope");
      setCount(count+1)
    }
  return (
    <div>
        <button id='addtocart' onClick={()=>update()}>Addtocart</button>
       <span id='_cart_total'>[{count}]</span>
       <button id='addtocart' onClick={()=>update()}>Addtocart</button>
       <span id='_cart_total'>[{count}]</span>
    </div>
  )
}

export default Addtocart
