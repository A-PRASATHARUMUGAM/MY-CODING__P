import React from 'react'
import "./Footer.css" 
const Footer = () => {
 const name="Footer";
//  inline style
const styledata={backgroundColor:'lightpink',fontSize:"20px"}
 function myfunction(){
 
    const name= ["prasath", "sabari", "kandhan"]; 
         let rand=Math.floor(Math.random()*3);    
         return name[rand];         
 
 } 

  return ( 
    
    <div className="Footer">
   {/* inline style   */}
    <p style={styledata} >{name}</p> 
    <p className="para3">hello {myfunction()}</p> 
 
    </div>
  

  )
}

export default Footer 