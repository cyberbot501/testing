import React from 'react'
import Header from '../components/HomeComponent/Header/Header'
import Hero from '../components/HomeComponent/Hero/Hero'
import Intro from '../components/HomeComponent/Intro/Intro'
import PathWay from '../components/HomeComponent/PathWay/PathWay'
import Testimonies from '../components/HomeComponent/Testimonies/Teatimonies'
import Mentorship from '../components/HomeComponent/Mentorship/Mentorship'
import MainNav from '../Layout/MainNav/MainNav'
import Footer from '../Layout/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <MainNav/>
        <Header/>
        <Hero/>
        <Intro/>
        <PathWay/>
        <Testimonies/>
        <Mentorship/>
        <Footer/>
    </div>
  )
}

export default HomePage
