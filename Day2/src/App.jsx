import './App.css'
import ConditionalRendering from './Component/ConditionalRendering'
import Product from './Component/Product'
import PropsWala from './Component/PropsWala'

function App() {
  return (
    // <>
    //   <h1>Reusable Component</h1>

    //   {/* 
    //   <Product />
    //   <Product />
    //   <Product />
    //   <Product />
    //   */}

    //   <br />
    //   <br />

    //   <h3>Props Tage</h3>

    //   <PropsWala
    //     title="S24"
    //     brand="Samsung"
    //     price={125000}
    //   />

    //   <PropsWala
    //     title="iPhone 16"
    //     brand="Apple"
    //     price={250000}
    //   />

    //   <PropsWala
    //     title="OnePlus 13"
    //     brand="OnePlus"
    //     price={125000}
    //   />
    // </>
    <>
    
    <ConditionalRendering   name="Ankit" age={28}              />
    
     <ConditionalRendering   name="Ankit" age={28}    pencard={true}          />
    
    </>
  )
}

export default App
