import React from 'react'

export const Content = () => {
function myfunction(){
    let Greet=["Morning","Afternoon","Evening"];
    let random=Math.floor(Math.random()*3);
    return Greet[random];
}
  return (
    <header>
        <h1>Content</h1>
    <p>Good {myfunction()}</p>

    </header>
  )
}
