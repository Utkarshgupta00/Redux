import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './File/Home'
import Cart from './File/Cart'
import Navbar from './File/Navbar'

const App = () => {
  return (
    <>
       <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    
    
    </>
  )
}

export default App