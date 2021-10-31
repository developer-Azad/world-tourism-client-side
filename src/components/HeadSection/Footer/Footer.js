import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-items">
                <div>
                    <h3>Services</h3>
                    <p>Air Ticket Booking</p>
                    <p>Railway Booking</p>
                    <p>Hotel Booking</p>
                    <p>Persel Service</p>
                    <p>24 Hours Service</p>
                </div>
                
                <div>
                    <h3>Our Distinations:</h3>
                    <p>Torento</p>
                    <p>France</p>
                    <p>Africa</p>
                    <p>Italy</p>
                    <p>Chaina</p>
                </div>
                <div>
                    <h3>Get In Touch</h3>
                    <h5>Hotline:</h5>
                    <p>01587458774</p>
                    <h5>Email:</h5>
                    <p>worldtour@gmail.com</p>
                </div>
                <div>
                    <img className="payment-card" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/173739414/original/b4c9d0634a26d5919d406394e28f098a8662ec44/cs-cart-payment-gateway-installation.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;