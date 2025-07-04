
/*

export function Button()
{
    function clickme(){
        alert("you click me")
        document.getElementById('click').innerHTML="hello world"
    
    }


    return(
        <button onClick={clickme} id="click">Click</button>
    )
}



export function UserDetails()
{
    const userPwd="!@#$"
    let x=20;
    let y=50;
    return(
        <div>
            <h1>Hello user your pwd is {userPwd}</h1>
            <h1>{10+20+40}</h1>
            <h1>{x*y}</h1>
            <button onClick={()=>alert("hello")}>click</button>
        </div>
    )
}

*/


/*  exercise convert into html+js=<jsx></jsx*/

export function Anil()
{

function callfun(){
    alert("function call")
}


    return(
        <div>
        <h1>Anil Sidhu Todos</h1>
        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Anil img" class="photo" 
           
        />

        <ul>
            <li>Invent new trafic light</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>


       <button onClick={callfun}>click</button>


        </div>
    )
}