import React from 'react'
import './Extras.css'

const Extras = () => {
  return (
    <div className='extras'>
        
                <div className="getStarted">
                    <h3>Endless Extras</h3>
                    <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                </div>
                <div className="cardWrapper">
                    <div className="card">
                        <img src="1-fun-freebies.webp" alt="1" />
                        <h3>Fun freebies</h3>
                        <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                        <span className='cardLink'>Learn more</span>
                    </div>
                    <div className="card">
                        <img src="2-order-and-pay-ahead.webp" alt="2" />
                        <h3>Order & pay ahead</h3>
                        <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                        <span className='cardLink'>Learn more</span>
                    </div>
                    <div className="card">
                        <img src="3-get-to-free-faster.webp" alt="3" />
                        <h3>Get to free faster</h3>
                        <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                        <span className='cardLink'>Learn more</span>
                    </div>
                </div>
    </div>
  )
}

export default Extras