/*
1.way

function ChildCom(props)
{
   return(
    <div>
   <h2>child component : {props.name}</h2>
    </div>
   )
}
export default ChildCom
*/

/*  2.  way  

function ChildCom({name})
{
   return(
    <div>
   <h2>child component : {name}</h2>
    </div>
   )
}
export default ChildCom

*/



/* best way 

function ChildCom({name , age})
{
   return(
    <div>
       
   <h2>child component : {name}{age}</h2>
    </div>
   )
}
export default ChildCom
*/



/*  passing object 
function ChildCom({person})
{
   return(
    <div>
       
   <h2>child component : {person.name}{person.age}</h2>
    </div>
   )
}
export default ChildCom

*/


/*  passing array */
function ChildCom({person})
{
   return(
    <div>
       
   <h2>child component : {person[0]}:{person[1]}</h2>
    </div>
   )
}
export default ChildCom