import React from 'react'

const Footer = () => {
 const name="prasath";

 function myfunction(){

    const name= ["prasath", "sabari", "kandhan"]; 
         let rand=Math.floor(Math.random()*3);    
         return name[rand]       
 
          
     
 } 

  return (
    
    <div className="Footer">
             
    <p>{name}</p> 
    <p>hello {myfunction()}</p> 

    </div>
  

  )
}

export default Footer 