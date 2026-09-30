import React from 'react'

const SimpleProject = () => {
     const [count, setcount] = useState(0);

  function clicks() {
    setcount(count + 1);
  }

  const[color,setcolor]=useState("white")


  function changeColor()
  {
const randomcolor="#"+Math.floor(Math.random()*16777215).toString(16)
setcolor(randomcolor);
  }
   return (
  <div
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <br />
      <button onClick={clicks}>click me : {count}</button>
      <br />
        <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default SimpleProject
