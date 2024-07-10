import React from 'react'
import './Landing.css'

const Landing = () => {
    return (
        <div className="landing">
            <div className="content">
                <h1>FREE COFFEE <br /> IS A TAP AWAY</h1>
                <p>Join now to start earning Rewards.</p>
                <button>Join now</button>
                <p>Or <span className='underline'>join in the app</span> for the best experience</p>
            </div>
            <img src="/backgroundLogo.png" alt="" />
        </div>
    )
}

export default Landing