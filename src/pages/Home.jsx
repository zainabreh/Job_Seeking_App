import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import Footer from '../component/Footer'
import JobContainer from '../component/JobContainer'

const Home = () => {
  return (
    <>
    <div className="container">
      <Navbar/>

      <HeroSection/>

     <JobContainer/>

      <Footer/>

    </div>
    </>
  )
}

export default Home
