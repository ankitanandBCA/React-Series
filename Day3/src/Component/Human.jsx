import React from 'react'
import './Human.css'
const Human = (props) => {
   
  return (
    <div
    //  style={{backgroundColor: 'gray', 
    //  padding:'10px', 
    //  color:'yellow'}}
     className='div1'
     >
      <h1>Name: {props.name}</h1>
      <h2>Skill: {props.Skill}</h2>
      <h3>Salary : {props.salary}</h3>
    </div>
  )
}

export default Human
