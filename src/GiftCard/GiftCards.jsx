import React, { useState } from 'react'
import './GiftCards.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const CustomPrevArrow = ({ onClickHandler, hasPrev, label }) =>
    hasPrev && (
        <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-prev-arrow">
            {"﹤"}
        </button>
    );

const CustomNextArrow = ({ onClickHandler, hasNext, label }) =>
    hasNext && (
        <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-next-arrow">
            {"﹥"}
        </button>
    );

const GiftCards = () => {

    
    const [activeSlide, setActiveSlide] = useState(0);
    
    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <div className="giftCards">
            <h3>FEATURED</h3>
            <Carousel
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    <CustomPrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} label={label} />
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    <CustomNextArrow onClickHandler={onClickHandler} hasNext={hasNext} label={label} />
                }
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={85}
                onChange={handleSlideChange}


            >
                <div className='slide'>
                    <img className={`carouselImg ${activeSlide === 0 ? 'active' : ''}`} src="/giftCards/adam-winger-b1wqPO2qKUY-unsplash.jpg" alt="Image 1" />
                    <img className={`carouselImg ${activeSlide === 0 ? 'active' : ''}`} src="/giftCards/annie-spratt-W4ROulrlhE4-unsplash.jpg" alt="Image 1" />
                    <img className={`carouselImg ${activeSlide === 0 ? 'active' : ''}`} src="/giftCards/caley-dimmock-_HCpwe1-Prc-unsplash.jpg" alt="Image 1" />
                    <img className={`carouselImg ${activeSlide === 0 ? 'active' : ''}`} src="/giftCards/christian-wiediger-90NNkvqBdtE-unsplash.jpg" alt="Image 1" />
                </div>
                <div className='slide'>
                    <img className={`carouselImg ${activeSlide === 1 ? 'active' : ''}`} src="/giftCards/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg" alt="Image 2" />
                    <img className={`carouselImg ${activeSlide === 1 ? 'active' : ''}`} src="/giftCards/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg" alt="Image 2" />
                    <img className={`carouselImg ${activeSlide === 1 ? 'active' : ''}`} src="/giftCards/helena-hertz-K0FidtcDQik-unsplash.jpg" alt="Image 2" />
                    <img className={`carouselImg ${activeSlide === 1 ? 'active' : ''}`} src="/giftCards/kira-auf-der-heide-mgfAmgZyEKc-unsplash.jpg" alt="Image 2" />
                </div>
                <div className='slide'>
                    <img className={`carouselImg ${activeSlide === 2 ? 'active' : ''}`} src="/giftCards/insung-yoon-baLUAKBNsG4-unsplash.jpg" alt="Image 3" />
                    <img className={`carouselImg ${activeSlide === 2 ? 'active' : ''}`} src="/giftCards/jason-leung-Xaanw0s0pMk-unsplash.jpg" alt="Image 3" />
                    <img className={`carouselImg ${activeSlide === 2 ? 'active' : ''}`} src="/giftCards/jess-bailey-f94JPVrDbnY-unsplash.jpg" alt="Image 3" />
                    <img className={`carouselImg ${activeSlide === 2 ? 'active' : ''}`} src="/giftCards/kate-macate-xmddEHyCisc-unsplash.jpg" alt="Image 3" />
                </div>
            </Carousel>
                <div className="message">
                    <img src="/giftCards/group-gift-cards.webp" alt="" />
                    <p>New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
                </div>

                {/* <div className="cart">
                    <h3>Received a gift card?</h3>
                    <p>Earns 2★ per $1</p>
                    <div className="reloader">Add or Reload</div>
                    <div className="balance">Check balance</div>
                    <div className="terms">Card Terms & Conditions</div>
                </div> */}
        </div>
    )
}

export default GiftCards