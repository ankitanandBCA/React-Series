import Login,{Profile,Setting, UserId, userPwd} from './UserComponent'
import { Anil } from './UserJSXExample'

function App()
{
  /*
  alert(sum())
  return(
    <div>
    <h1>hello react app {sum()}</h1>
    <Fruit></Fruit>
    <Color />
    <Login/>
    <Profile/>
    <Setting/>
    <h1>  {UserId}   </h1>
    <h1>{userPwd}</h1>
  

    </div>
  )
    */

  return(
    <div>
      

  <Anil/>
  
    </div>
  
  )
}

export default App


function Fruit()
{
  return(
    <h1>apple</h1>
  )
}


function Color()
{
  return(
    <h1>red</h1>
  )
}


function sum()
{
  return 10+10

}