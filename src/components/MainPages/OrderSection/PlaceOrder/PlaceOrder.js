import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const {orderId} = useParams();
    const [service, setService] = useState({});
    const {url, name, description} = service;
   const status = 'pending';
    
    console.log(orderId);

    useEffect( () => {
        fetch(`http://localhost:5000/services/${orderId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

const handlePlaceOrder = (e) => {
    const processingOrder = {url, name, description, status};
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(processingOrder)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
            alert('order added successfully');
        }
    })
    e.preventDefault();
}


    return (
        <div>
            Place Order
            <img src={url} alt="" />
            <h2>{name}</h2>
            <h4>{description}</h4>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default PlaceOrder;