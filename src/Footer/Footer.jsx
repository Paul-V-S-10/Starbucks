import React from 'react'
import './Footer.css'
import { BsSpotify } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="desWrapper">

        <div className="des">
            <div className="desHeader">About Us</div>
            <div className="desContent">Our Company</div>
            <div className="desContent">Our Coffee</div>
            <div className="desContent">Stories and News</div>
            <div className="desContent">Starbucks Archive</div>
            <div className="desContent">Investor Relations</div>
            <div className="desContent">Customer Service</div>
            <div className="desContent">Contact Us</div>
        </div>
        <div className="des">
            <div className="desHeader">Careers</div>
            <div className="desContent">Culture and Values</div>
            <div className="desContent">Inclusion, Diversity, and Equity</div>
            <div className="desContent">College Achievement Plan</div>
            <div className="desContent">Alumni Community</div>
            <div className="desContent">U.S. Careers</div>
            <div className="desContent">International Careers</div>
        </div>
        <div className="des">
            <div className="desHeader">Social Impact</div>
            <div className="desContent">People</div>
            <div className="desContent">Planet</div>
            <div className="desContent">Environmental and Social Impact Reporting</div>
        </div>
        <div className="des">
            <div className="desHeader">For Business Partners</div>
            <div className="desContent">Landlord Support Center</div>
            <div className="desContent">Suppliers</div>
            <div className="desContent">Corporate Gift Card Sales</div>
            <div className="desContent">Office and Foodservice Coffee</div>
        </div>
        <div className="des">
            <div className="desHeader">Order and Pick Up</div>
            <div className="desContent">Order on the App</div>
            <div className="desContent">Order on the Web</div>
            <div className="desContent">Delivery</div>
            <div className="desContent">Order and Pick Up Options</div>
            <div className="desContent">Explore and Find Coffee for Home</div>
        </div>
        </div>
        <hr className='footerHr'/>
        <div className="infoWrapper">
            <div className="social">
            <BsSpotify className='socialIcons'/>
            <FaFacebook className='socialIcons'/>
            <FaPinterest className='socialIcons'/>
            <FaSquareInstagram className='socialIcons'/>
            <FaYoutubeSquare className='socialIcons'/>
            <FaTwitterSquare className='socialIcons'/>
            </div>
            <div className="info">
                <div className="infoContent">Privacy Notice</div>
                <div className="infoContent">Consumer Health Privacy Notice</div>
                <div className="infoContent">Terms of Use</div>
                <div className="infoContent">Do Not Share My Personal Information</div>
                <div className="infoContent">CA Supply Chain Act</div>
                <div className="infoContent">Accessibility</div>
                <div className="infoContent">Cookie Preferences</div>
            </div>
            <div className="reserve">© 2024 Starbucks Coffee Company. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer