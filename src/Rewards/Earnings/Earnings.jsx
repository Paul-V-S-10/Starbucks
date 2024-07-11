import React from 'react'
import './Earnings.css'

const Earnings = () => {
  return (
    <div className='earnings'>
        <div className="headerWrapper">
            <h2>Cash or card, you earn Stars</h2>
            <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        </div>
        <div className="itemWrapper">
            <div className="itemHeaderWrapper">
                <h2>1★ per dollar</h2>
                <p>Pay as you go</p>
            </div>
            <div className="itemContentWrapper">
                <div className="itemContent">
                    <img src="1A.png" alt="" />
                    <div className="item">

                    <h3>Scan and pay separately</h3>
                    <p>Use cash or credit/debit card at the register.</p>
                    </div>
                </div>
                <div className="itemContent">
                    <img src="1B.webp" alt="" />
                    <div className="item">

                    <h3>Save payment in the app</h3>
                    <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                    </div>
                </div>
            </div>

        </div>
        <hr className='hrLine'/>
        <div className="itemWrapper">
            <div className="itemHeaderWrapper">
                <h2>2★ per dollar</h2>
                <p>Add funds in the app</p>
            </div>
            <div className="itemContentWrapper">
                <div className="itemContent">
                    <img src="2A.png" alt="" />
                    <div className="item">

                    <h3>Preload</h3>
                    <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                    </div>
                </div>
                <div className="itemContent">
                    <img src="2B.webp" alt="" />
                    <div className="item">

                    <h3>Register your gift card</h3>
                    <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Earnings