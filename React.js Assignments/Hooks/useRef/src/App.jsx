import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ReRender = useRef(0)

  function handleAdd() {
    setCount(count+1);
    ReRender.current += 1
    console.log("ReRender Count : ", ReRender.current)
  }

  return (
    <>
      <button onClick={handleAdd}>
        count is {count}
      </button>
    </>
  )
}

export default App
