import React from 'react'
import './Click.css'
const Click = ()=>{

  const handleclick =()=>{
      console.log("Say hello");
  }
    return ( 
        <div>

          <h1>Click Event </h1>


          <button onClick={()=>handleclick()} > 
        {/* Important because one time click event crt working  */}
          Say hello in console</button>

        </div>

    )

}

export default Click