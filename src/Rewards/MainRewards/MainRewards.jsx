import React from 'react'
import './MainRewards.css'
import Toogle from '../Toogle/Toogle'
import Extras from '../Extras/Extras'
import Provider from '../Provider/Provider'
import RewardsNavbar from '../RewardsNavbar/RewardsNavbar'

const MainRewards = () => {
    return (
        <div className='rewards'>
            <RewardsNavbar/>
            <div className="landing">
                <div className="content">
                    <h1>FREE COFFEE <br /> IS A TAP AWAY</h1>
                    <p>Join now to start earning Rewards.</p>
                    <button>Join now</button>
                    <p>Or <span className='underline'>join in the app</span> for the best experience</p>
                </div>
                <img src="/backgroundLogo.png" alt="" />
            </div>
            <div className="accountCreatingSteps">
                <div className="getStarted">
                    <h3>Getting started is easy</h3>
                    <p>Earn Stars and get rewarded in a few easy steps.</p>
                </div>
                <div className="cardWrapper">
                    <div className="card">
                        <img src="1.webp" alt="1" />
                        <h3>Create an account</h3>
                        <p>To get started, <span className='g-underline'> join now</span>. You can also <span className='g-underline'>join in</span> the app to get access to the full range of Starbucks® Rewards benefits.</p>
                    </div>
                    <div className="card">
                        <img src="2.webp" alt="2" />
                        <h3>Order and pay how you’d like</h3>
                        <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <span className='g-underline'>Learn how</span></p>
                    </div>
                    <div className="card">
                        <img src="3.webp" alt="3" />
                        <h3>Earn Stars, get Rewards</h3>
                        <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!

                        </p>
                    </div>
                </div>
            </div>
            <Toogle />
            <Extras />
            <Provider />
        </div>
    )
}

export default MainRewards