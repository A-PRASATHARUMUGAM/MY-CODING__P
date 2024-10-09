                                // Applying CSS Style 
import React from 'react'
import "./Style.css"

export const Applying_CSS_Style = () => {

// inline style
let headerStyle={backgroundColor :"hotpink",fontSize:"40px"}


return (
     <header>

    <div style={headerStyle}>Applying_CSS_Style</div>

{/*  external Style -- import the style   */}
    <h2 className='main-heading'>Hello World </h2> 


     </header>
  )
}
