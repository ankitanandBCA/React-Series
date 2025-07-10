
function ClickEventAndFunctionCall() {
  function callMe() {
    alert("function call");
  }

  const hello=()=>{
    alert("hello ankit");
  }

  const fruit = (name) =>{
    alert(name)
  }


  return (
    <div>
      <button onClick={callMe}> click me</button>
      <button onClick={hello}>hello</button>

      <button onClick={()=>fruit("apple")}>apple</button>
       <button onClick={()=>fruit("banana")}>banana</button>
        <button onClick={()=>fruit("lichi")}>lichi</button>
    </div>
  );
}
export default ClickEventAndFunctionCall;
