import { useState } from "react"

function Counter(){
    const [data,setCount]=useState(0)
    const [rdata,decrese]=useState(10)
    return(
        <div>
<h1>COUNTER:{data}</h1>
<button onClick={()=>setCount(data+1)}>Update counter</button>




    <h1>Decrese data:{rdata}</h1>
    <button onClick={()=>decrese(data-1)}>decrese data</button>
        </div>
    )
}
export default Counter