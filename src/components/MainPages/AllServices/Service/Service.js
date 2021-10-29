import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const {_id, name, description, url } = service;
    const history = useHistory();

    const handleBooking = () => {
      history.push(`/placeOrder/${_id}`);
    }

    return (
        <div className="col">
        <div className="card h-100">
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-center mt-3">
          <button className="booking-btn font-semibold" onClick={handleBooking}>BOOK NOW</button>
          </div>
        </div>
      </div>
    );
};

export default Service;