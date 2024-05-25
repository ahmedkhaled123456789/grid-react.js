import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Features from '../components/features/Features'
import Pricing from '../components/pricing/Pricing'
import Footer from '../components/footer/Footer'
import Button from '../components/button/Button'
import Curser from '../components/curser/Curser'
import Louding from '../components/loading/Louding'

const Home = () => {
  return (
    < > 
    <Header/>
    <Button/>
    <Curser/>
    <Louding/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Footer/>
    </ >
  )
}

export default Home