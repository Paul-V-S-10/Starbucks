import React, { useState } from 'react';
import './Navbar.css';
import { MdLocationOn } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [menuOpen, setMenuOpen] = useState(false);

    const menuAnimation = useSpring({
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
    });

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.jpg" alt="" />
                <p>TM</p>
            </div>
            {isMobile ? (
                <>
                    <MdMenu className="menuIcon" onClick={() => setMenuOpen(true)} />
                    <animated.div className="sliderMenu" style={menuAnimation}>
                        <div className="closeMenu" onClick={() => setMenuOpen(false)}>✕</div>
                        <div className="toggle">MENU</div>
                        <div className="toggle">REWARDS</div>
                        <div className="toggle">GIFT CARDS</div>
                        <div className="button location"><MdLocationOn className='locationIcon'/>Find a store</div>
                        <div className="button borderBlack">Sign in</div>
                        <div className="button bgBlack">Join now</div>
                    </animated.div>
                </>
            ) : (
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
            )}
        </div>
    );
};

export default Navbar;