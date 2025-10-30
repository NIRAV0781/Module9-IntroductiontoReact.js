import React, { useState } from 'react'

 const HandlingEvent = () => {
    const [inputvalue, setInputvalue] = useState("");
  return (
    <>
    <button onClick={()=>{
        let btn = document.querySelector("button");
        btn.innerText = "Clicked!"
    }}>Not Clicked!</button>
    <hr />
    <h2>{inputvalue}</h2>
    <form action="">
        <input type="text" value={inputvalue} onInput={(e)=>{setInputvalue(e.target.value)}}/>
    </form>
    </>
  )
}

export default HandlingEvent;