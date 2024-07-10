import React from 'react'
import './Navbar.css'
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.jpg" alt="" />
                <p>TM</p>
            </div>
            <div className="links">
                <div className="toggleWrapper">
                    <div className="toggle">MENU</div>
                    <div className="toggle">REWARDS</div>
                    <div className="toggle">GIFT CARDS</div>
                </div>
                <div className="buttonsWrapper">
                    <div className="button location"><MdLocationOn className='locationIcon'/>Find a store</div>
                    <div className="button borderBlack">Sign in</div>
                    <div className="button bgBlack">Join now</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar