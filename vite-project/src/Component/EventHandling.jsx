import React from 'react'

const EventHandling = () => {

function handleclick()
{
    alert("button clicked");
}

function over()
{
    alert("mouse over");
}

function inputclick(e)
{
    console.log(e.target.value);
}




  return (
    <div>
      <button onClick={handleclick}>click me</button>
      <p onMouseOver={over}>para</p>

      <input type="text" name="" id="" onChange={inputclick}/>
    </div>
  )
}

export default EventHandling
