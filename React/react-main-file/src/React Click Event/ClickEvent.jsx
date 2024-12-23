import React from 'react'
import './Click.css'
const Click = ()=>{

  const handleclick =(event)=>{
      console.log("Say hello");
      console.log(event.target);
  }
    return ( 
        <div>

          <h1>Click Event </h1>


          <button onClick={(event)=>handleclick(event)} > 
        {/* Important because one time click event crt working  */}
          Say hello in console </button>

        </div>

    )

}

export default Click