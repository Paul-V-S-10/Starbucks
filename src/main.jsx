import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar/Navbar'
import './main.css'
import MainRewards from './Rewards/MainRewards/MainRewards'
import Footer from './Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Navbar /> 
    <MainRewards/>
    <Footer/>
    </>
)
