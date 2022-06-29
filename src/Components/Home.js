import React from 'react'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Service from './Service'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Home