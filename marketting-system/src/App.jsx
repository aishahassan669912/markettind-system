import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    
    <>
    
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
