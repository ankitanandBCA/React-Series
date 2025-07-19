import { useState } from "react"
/* 1st way
function Input() {
    const [name,setName]=useState("");
  return (
   <div>
    <h2>input fled</h2>
     <input type="text"  value={name} onChange={(Event)=>setName(Event.target.value)} placeholder="enter name" />
     <p>live preview : {name}</p>
     
   </div>
  )
}
export default Input

*/

/* 2nd way */
function Input() {
    const [name,setName]=useState("");
    const Handlechange=(e)=>
        {
            setName(e.target.value)
        }
  return (
   <div>
    <h2>input fled</h2>
     <input type="text"  value={name} onChange={Handlechange} placeholder="enter name" />
     <button onClick={()=>setName("")} >Clear</button>
     <p>live preview : {name}</p>
     
   </div>
  )
}
export default Input