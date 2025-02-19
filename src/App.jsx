import React from 'react'
import './App.css'
import Navbar from './section/navbar'
import Hero from './section/hero'
const App = () => {
  return (
   <main className='ma max-w-7xl mx-auto bg-black '>
    <Navbar/>
    <Hero/>
    </main>
  )
}

export default App