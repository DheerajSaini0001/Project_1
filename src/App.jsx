import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Items from './Component/Item'

function App() {

  return (
    <>
      <Navbar/>
      <Items/>
    </>
  )
}

export default App
