import React from 'react'
import Basic from './Basic'
const Person = () => {
    const persons={
        name:"ankit",
        age:22,
        email:"ankit@gmail.com"
    }
  return (
    <div>
      <h1>Name={persons.name}</h1>
      <h1>age={persons.age}</h1>
      <h1>email={persons.email}</h1>
      <br />
      <Basic/>
    </div>
  )
}

export default Person
