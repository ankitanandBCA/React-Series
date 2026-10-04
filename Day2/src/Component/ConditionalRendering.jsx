import React from 'react'

// const ConditionalRendering = ({name,age}) => {

// // ternary condition   ->   () ? () : ()

//   return (
//     <div>
//          <h1>name={name}</h1>

//          <h3>{age>18 ? <h4>You can drive</h4> : <h4>You can not drive</h4>  }</h3>
//     </div>
//   )
// }


const ConditionalRendering = ({name,age,pencard}) => {

// && operator

  return (
    <div>
   <h1>name={name}</h1>

      <h1>{pencard==true ? <h1>open bank account</h1> : " " }</h1>
       <h1>{pencard && <h1>open bank account</h1>  }</h1>
       <h5>{(age==28) && <h1>open bank account</h1> }</h5>
    </div>
  )
}

export default ConditionalRendering
