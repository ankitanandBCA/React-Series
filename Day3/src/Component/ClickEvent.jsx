import React, { useState } from 'react'

const ClickEvent = () => {
    const [count,setCount]=useState(0)
function handleClick(){
    alert("button clicked")

       setCount(count+1)
}

const [name,setName]=useState("")
function inputBlulor(e){
setName(e.target.value)
}

  return (
    <div>


<input type="text" placeholder='enter the name' onMouseOver={inputBlulor} />

name:{name}
 
      <h1>count :{count} </h1>

      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ClickEvent
