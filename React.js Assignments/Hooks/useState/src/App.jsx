import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleAdd (){
    setCount(count+1)
  }

  function handleMinus(){
    setCount(count-1)
  }

  function handleReset(){
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
