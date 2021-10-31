import React from 'react';

const Hotel = ({hotel}) => {
    const {_id, name, description, url, price, rating} = hotel;

    const handleDetails = () => {
        
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
          <button className="booking-btn font-semibold mb-3" onClick={handleDetails}>Details</button>
          </div>
        </div>
      </div>
    );
};

export default Hotel;