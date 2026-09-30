import React from 'react'

const FormHandling = () => {


function formsubmit(e)
{
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
}




  return (
    <div>
      <form action="" onSubmit={formsubmit}>

    Name:  <input type="text" name="" id="" />
      <br /><br />
     Email: <input type="email" name="" id="" />
      <br /><br />
     TelePhone: <input type="tel" name="" id="" />
      <br /><br />
      <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default FormHandling
