import React from 'react'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Homelayout from './layouts/Homelayout'
import HomePage from './Pages/HomePage'
const App = () => {
  return (
   <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
   
    </>
  )
}

export default App