
import React from 'react'

const PropsWala = (props) => {
  return (
    <div>
      <h2>Mobile Title = {props.title}</h2>
      <h2>Mobile Brand = {props.brand}</h2>
      <h2>Mobile Price = ₹{props.price}</h2>
    </div>
  )
}

export default PropsWala

