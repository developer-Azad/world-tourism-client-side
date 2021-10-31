import React from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './Service.css';

const Service = ({ service }) => {
  const { user } = useAuth();
   const status = 'pending';
   const email = user.email;
    const {_id, name, description, url, price, rating} = service;
    const history = useHistory();

    const handleBooking = (e) => {
      const processingOrder = {url, name, description, status, email};
      fetch('https://mysterious-sands-94616.herokuapp.com/orders', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(processingOrder)
      })
      .then(res => res.json())
      .then(data => {
          
      })
      fetch('https://mysterious-sands-94616.herokuapp.com/allOrders', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(processingOrder)
      })
      .then(res => res.json())
      .then(data => {
          
      })
      e.preventDefault();
      history.push(`/placeOrder/${_id}`);
    }

    return (
        <div className="col">
        <div className="card h-100">
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className="text-center">
            <h5 className="text-2xl font-semibold">{name}</h5>
            <p className="card-text">{description}</p>
            </div>
            <div>
            <p className="card-text">{price}</p>
            <p className="card-text">{rating}</p>
            </div>
          </div>
          <div className="text-center mt-3">
          <button className="booking-btn font-semibold mb-3" onClick={handleBooking}>BOOK NOW</button>
          </div>
        </div>
      </div>
    );
};

export default Service;