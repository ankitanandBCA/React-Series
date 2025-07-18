
import { useState } from "react"
import Hobby from "./Hobby"
import User from "./User"

function App() {
  const [hobbys,sethobbys]=useState();


  return (
    <>
  {hobbys &&  <Hobby name={hobbys}/>}
  <button onClick={()=>sethobbys("cricket")}>display hobby</button>
    <User user1="mohit"/>
    <User>
      <div>Mohit decosla</div>
      </User>
        
    </>
  )
}

export default App
