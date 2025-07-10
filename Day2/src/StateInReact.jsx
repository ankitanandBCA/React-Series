import { useState } from "react";
import Counter from "./Counter";

function StateInReact(){
 /*
    let fruit="apple";

    const handlefruit=()=>{
        fruit="banana";
        console.log(fruit);
        
    }
        */


    const [frute,setFrute]=useState("apple")

    const handlefrute=()=>{
        setFrute("banana")
    }
return(
    <div>
   <h1>State in react react js</h1>

  <h1>{frute}</h1>
<button onClick={handlefrute}>change frute name</button>



   {/*


  
    <h1>{fruit}</h1>
   <button onClick={handlefruit}>change frute name</button>

   */ }
    </div>
)

}
export default StateInReact;