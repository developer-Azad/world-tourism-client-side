import React, { useEffect, useState } from 'react';
import OrderCart from '../OrderCart/OrderCart';

const PlaceOrder = () => {
    const [orders, setOrders] = useState([]);

    console.log(orders);
    useEffect(() => {
        fetch('https://mysterious-sands-94616.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    

    return (
        <div className="mx-10">
            <h2 className="text-3xl font-bold my-6">You choose to visit</h2>
            <div className="place-order">
            <div className="orders-container">
            {
                orders.map(service => <div key={service._id}>
                    <img src={service.url} alt="" />
                    <h3>{service.name}</h3>
                    <p>{service.status}</p>
                </div>)
            }
            </div>
            <div>
                <OrderCart></OrderCart>
            </div>
            </div>
        </div>
    );
};

export default PlaceOrder;