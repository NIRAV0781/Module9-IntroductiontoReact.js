import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
  },[])
  

  return (
    <>
      <h1>User Data</h1>
      {
        data.map((i,index)=>{
          return(
          <div key={index}>{i.address.city}</div>
          )
        })
      }
    </>
  )
}

export default App

