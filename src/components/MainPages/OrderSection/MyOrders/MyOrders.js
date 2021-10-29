import React, { useEffect, useState } from 'react';
import Service from '../../AllServices/Service/Service';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div className="m-10">
            <h2>Most Tourist Places</h2>
            <div className="place-order">
                <div className="orders-container">
                {
                    orders.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
                </div>
                <div>
                    <h2>Your Address</h2>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;