import React from 'react'
import Navbar from './Navbar/Navbar'
import MainRewards from './Rewards/MainRewards/MainRewards'
import Footer from './Footer/Footer'
import GiftCards from './GiftCard/GiftCards'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar /> 
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Home