import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Cart from '../Cart/Cart';

const OrderCart = () => {
    // const {orderId} = useParams();
    const [services, setServices] = useState([]);
  console.log(services);
    useEffect( () => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const handleConfirmOrder = (e) => {
        const totalOrder = services;
        fetch('http://localhost:5000/allOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(totalOrder)
        })
        .then(res => res.json())
        .then(data => {
            // if(data.inserted) {
            //     alert('order added successfully');
            // }
        })
        e.preventDefault();
    }

    return (
        <div>
            Place Order
            {/* {
                services.map(service => <Cart
                key={service._id}
                service = {service}
                ></Cart>)
            } */}
              <div>
             <button className="confirm-btn" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
           
        </div>
    );
};

export default OrderCart;