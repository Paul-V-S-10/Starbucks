import React, { useState } from 'react';
import './Toogle.css'
import { MdOutlineStarPurple500 } from "react-icons/md";

const Toogle = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 25, img: 'fav25.webp', header: 'Customize your drink', content: 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.' },
        { id: 100, img: 'fav100.webp', header: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more', content: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.' },
        { id: 200, img: 'fav200.webp', header: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast', content: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.' },
        { id: 300, img: 'fav300.webp', header: 'Sandwich, protein box or at-home coffee', content: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.' },
        { id: 400, img: 'fav400.webp', header: 'Select Starbucks® merchandise', content: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.' }
    ];

    return (
        <div className="tabs-container">
            <div className="tabs-buttons">
                <h2>Get your favorites for free</h2>
                <div className='button'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.id }<MdOutlineStarPurple500 className='star'/>
                        </button>
                    ))}
                </div>
            </div>
            <div className="tab-content">
                <img src={tabs[activeTab].img} alt={`Tab ${activeTab + 1}`} />
                <div className="tab-content-wrapper">

                <h3>{tabs[activeTab].header}</h3>
                <p>{tabs[activeTab].content}</p>
                </div>
            </div>
        </div>
    );
};


export default Toogle