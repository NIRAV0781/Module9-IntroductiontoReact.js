import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import { useContext } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
  ])

  return (
    <>
    <RouterProvider router={routers}/>
    </>
  )
}

export default App
