import { useState } from "react";
import User from "./User";

function App() {
const fruit=['apple','banana','cherry'];
const [vegies,setVegies]=useState(['carrot','patato','onion']) 

const books=[{
  id:1,title:"book1",author:"author1"
},
{ id:2, title:"book2",author:"author2"},
{ id:3, title:"book3",author:"author3"}
]


const user=["mohit","ravi","suraj"]

  return (
    <>
      <h1>map loop</h1>
      <ul>
        {
        fruit.map((fruit,index)=>(
          <li key={index}>{fruit}</li>

        ))
        
        }
        <br /><br />
        {
          //  state using map

           vegies.map((vegies,index)=>(
          <li key={index}>{vegies}</li>

        ))

        }


        <br /><br />
        <h1>object using map</h1>
        {
          books.map((book)=>(
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))
        }
         <br /><br />
         <h1>filter map</h1>
         {
          books.filter((bookk)=>bookk.id>=1).map
          ((bookk)=>(
            <li key={bookk.id}>{bookk.title} by {bookk.author}</li>
          ))
         }
      </ul>

<br /><br /><br />
<h1>user data</h1>
{
  user.map((user,index)=>(
    <li key={index}><User  key={index} item={user}/></li>
  ))
}







      
    </>
  )
}

export default App
