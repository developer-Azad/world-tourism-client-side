import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faGlobeAmericas, faCoins, faUserAlt, faUserFriends, faCar} from '@fortawesome/free-solid-svg-icons'

import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const icon1 = <FontAwesomeIcon icon={faAddressBook} />
    const icon2 = <FontAwesomeIcon icon={faGlobeAmericas} />
    const icon3 = <FontAwesomeIcon icon={faCoins} />
    const icon4 = <FontAwesomeIcon icon={faUserAlt} />
    const icon5 = <FontAwesomeIcon icon={faUserFriends} />
    const icon6 = <FontAwesomeIcon icon={faCar} />

    return (
        <div>
            <h2 className="text-4xl m-10 font-bold">Why Choose W-Tour</h2>
            <div className="service-container m-10">
            <div className="single-service ">
                <h3 className="text-8xl">{icon2} </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Beautiful Places</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
            <h3 className="text-8xl">{icon1} </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Fast Booking</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
            <h3 className="text-8xl">{icon3} </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">10% Commision for next</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
            <h3 className="text-8xl">{icon5} </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Suppot Team</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
            <h3 className="text-8xl">{icon4} </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Good Personality Guide</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
            <h3 className="text-8xl">{icon6} </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Safe Journey</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            
            
        </div>
    </div>
    );
};

export default WhyChooseUs;