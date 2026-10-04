import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Product from './Component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>Resuable Component</h1>
   { /*<Product/>
     <Product/>
      <Product/>
       <Product/>
        <Product/> */}
<br /><br />
<H3>Props tage</H3>

<Product title="s24" brand="sumsung" price={125000}/>

<Product title="I phone 16" brand="Apple" price={250000}/>

<Product title="One plus 13" brand="OnePlus" price={125000}/>
  </>
  )
}

export default App
