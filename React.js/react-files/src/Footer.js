import React from 'react'

export const Footer = () => {
    let year=new Date()
  return (
    <div>Footer copyrights&copy; {year.getFullYear()} </div>
  )
}
