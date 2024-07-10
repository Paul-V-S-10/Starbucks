import React from 'react'
import './Provider.css'
import { FaExternalLinkAlt } from "react-icons/fa";

const Provider = () => {
    return (
        <div className="container">

        <div className='provider'>
            <div className='providerWrapper'>

                <div className="getStarted">
                    <h3>Keep the Rewards Coming</h3>
                    <p>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
                </div>
                <div className="cardWrapper">
                    <div className="card">
                        <img src="delta-skymiles.webp" alt="1" />
                        <p>Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.1</p>
                    </div>
                    <div className="card">
                        <img src="bank-of-america.webp" alt="2" />
                        <p>Link your Bank of America eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.2</p>
                    </div>
                    <div className="card">
                        <img src="marriott-logo.webp" alt="3" />
                        <p>Link your Marriott Bonvoy® and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.3</p>
                    </div>
                </div>
                <button>Join Starbucks® Rewards</button>
            </div>
        </div>
        <div className="question">
            <h2>Questions?</h2>
            <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked terms <span className='green-underline'>right over here <FaExternalLinkAlt /></span>.</p>
        </div>
        </div>

    )
}

export default Provider