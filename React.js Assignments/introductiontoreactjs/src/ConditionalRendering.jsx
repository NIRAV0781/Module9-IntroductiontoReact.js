import React, { useState } from 'react'

const ConditionalRendering = () => {
  const [loggedin, setLoggedin] = useState(false);
  const change = () => {
    setLoggedin(!loggedin)
  }
  const [input, setInput] = useState('')

  return (
    <div>
      <h2>{!loggedin ? "Welcome user" : "Plese log in"}</h2>
      <button onClick={change}>{loggedin ? "Login" : "Logout"}</button>

      <br />
      <hr />
      <br />

      <h1>{(input >= 18) ? "Eligible for vote" : "Not eligible for vote"}</h1>
      <input type="number" placeholder='Enter Your Age' value={input} onInput={(e) => { setInput(e.target.value) }} />

    </div>
  )
}

export default ConditionalRendering;

