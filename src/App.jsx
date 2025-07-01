import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App () {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full min-h-screen text-white bg-zinc-900 overflow-hidden'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes/>
      <Featured />
      <Cards />
      <Footer />
      </div>
  )
}

export default App