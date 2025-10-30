import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Redux/counterSclice';

function App() {
  const count = useSelector((i)=> i.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default App
