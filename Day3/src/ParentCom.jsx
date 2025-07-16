import ChildCom from "./ChildCom";
/*
wrong way to define props

function PropsInReact(){
return(
    <div>
        
        <ChildCom name="Ankit anand" age={24}/>
    </div>
)
}
export default PropsInReact;

*/

/* right way to define props  */

function PropsInReact(){
    const name="Ankit Anand"
    const age=22;
return(
    <div>
        {/*
          <ChildCom name={name} age={age}/>
        <br />


          <p>this component passing the object</p>
           <ChildCom person={{name:"aman kumar",age:24}}/>


           <br>
        */}
      
      <ChildCom person={["sumit kumar","rohit"]}/>
    </div>
)
}
export default PropsInReact;

