import { useState } from "react"

function ControllCom()
{
    const [name , setName]=useState();
    const [email,setemail]=useState();
    const [password,setPassword]=useState();
   const handle =(e)=>{
        e.preventDefault();
        alert(`name:${name},email:${email},pass:${password}`)
    }

    const handleclear=()=>{
        setName="";
        setemail="";
        setPassword="";

    }
    return(
        // controll component

        <div>
         <h1>Controll Component</h1>
         <form onSubmit={handle}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name" />
            <br />
             <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter email" />
             <br />
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" />
              <br />
              <button type="submit">Submit</button>
              <br />
              <button type="reset" onClick={handleclear}>Clear</button>
              <p>live value : {name},{email},{password}</p>
         </form>
        </div>
    )
}
export default ControllCom