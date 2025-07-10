function UserVariable() {
  const name = "ankit anand";

  let x=10;
  let y=20;
  function fruit()
  {
    return "apple"
  }

  function sum(a,b)
  {
    return a+b;
  }

  function operation(a,b,op)
  {
    if(op=="+")
    {
        return a+b
    }
    else if(op=="-")
    {
        return a-b
    }
    else
    {
        return a*b;
    }
  }

//  OBJECT USING IN REACT

const UserObj={
    "name":"Ankit Anand",
    "course":"BCA",
    "RollNo":"2454"

};


// Array using in react

const UserArray=['sam','peter','aman']

// IMAGE USING THE VARIABLE

let path="https://img.freepik.com/free-photo/web-template-website-design-concept_53876-125608.jpg";

  return (
    <div>
      <h1>{name}</h1>
  
      <h1>{x+y}</h1>
      <h1>{fruit()}</h1>
      <h2>{sum(10,100)}</h2>
      <h1>{operation(10,20,"*")}</h1>


      <h1>{UserObj.name}</h1>
       <h1>{UserObj.RollNo}</h1>
        <h1>{UserObj.course}</h1>


    <h1>{UserArray[0]}</h1>


   <img src={path} alt="" />

    </div>
  );
}

export default UserVariable;
