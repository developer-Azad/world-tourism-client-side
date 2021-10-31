import React from 'react';
import { FaBeer, FaAddressBook, FaTaxi } from 'react-icons/fa';
// import { FaPlaces } from "@react-icons/all-files/fa/FaBeer";

import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div>
            <h2 className="text-4xl m-10 font-bold">Why Choose W-Tour</h2>
            <div className="service-container m-10">
            <div className="single-service ">
                <h3 className="text-8xl"><FaBeer/> </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Beautiful Places</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
                <h3 className="text-8xl"><FaAddressBook/> </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Fast Booking</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
                <h3 className="text-8xl"><FaBeer/> </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">10% Commision for next</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
                <h3 className="text-8xl"><FaBeer/> </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Suppot Team</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
                <h3 className="text-8xl"><FaBeer/> </h3>
                
                <div className="mx-3">
                    <h4 className="text-2xl font-bold">Good Personality Guide</h4>
                    <p>Praesent nulla mauris, semper quis nisl nec, condimentum auctor odio. 
                        Pellentesque congue odio nec ultricies sed do eiusmod</p>
                </div>
            </div>
            <div className="single-service ">
                <h3 className="text-8xl"><FaTaxi/> </h3>
                
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