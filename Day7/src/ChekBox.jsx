import { useState } from "react"

function Chekbox()
{
    const [selected,setselected]=useState({
        html:false,
        css:false,
        js:false,
    })

   return(
    <div>
        
        <label htmlFor="">

<input type="checkbox" checked={selected.html} 
onChange={(e)=>{
    setselected({...selected,html:e.target.checked})
}}
/>
html
        </label>


        
        <label htmlFor="">

<input type="checkbox" checked={selected.css}
onChange={(e)=>{
    setselected({...selected,css:e.target.checked})
}}
/>
css
        </label>



        
        <label htmlFor="">

<input type="checkbox" checked={selected.js}

onChange={(e)=>{
    setselected({...selected,js:e.target.checked})
}}
/>
js
        </label>

        <br /><br /><br /><br /><br />
        <h2>selected:</h2>
<ul>
    {selected.html&&<li>HTML</li>}
    {selected.css&&<li>css</li>}
    {selected.js&&<li>js</li>}
</ul>

    </div>
   )
}
export default Chekbox