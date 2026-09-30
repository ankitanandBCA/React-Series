import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventHandling from './Component/EventHandling'
import FormHandling from './Component/FormHandling'
import SimpleProject from './Component/SimpleProject'

function App() {
 
  return (
    <>
    <FormHandling/>
      <EventHandling/>
      <SimpleProject/>
    </>
  )
}

export default App
