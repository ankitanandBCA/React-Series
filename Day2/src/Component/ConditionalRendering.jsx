import React from 'react'

const ConditionalRendering = ({name,age}) => {

// ternary condition   ->   () ? () : ()

  return (
    <div>
         <h1>name={name}</h1>

         <h3>{age>18 ? <h4>You can drive</h4> : <h4>You can not drive</h4>  }</h3>
    </div>
  )
}

export default ConditionalRendering
