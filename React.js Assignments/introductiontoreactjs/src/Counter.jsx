import { useState } from "react";

function Counter (){
    let btn ={
        padding:"20px",
        backgroundColor:"blue",
        color:"White",
        margin:"20px",
        borderRadius:"10px",
        border:"none",
        fontSize:"20px"
    }
    const [Count,setCount] = useState(0);
    return(
        <>
        <button style={btn} onClick={()=>{setCount(Count+1)}}>Tap to Add {Count}</button>
        </>
    )
}

export default Counter;