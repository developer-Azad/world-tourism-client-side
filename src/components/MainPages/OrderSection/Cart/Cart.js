import React from 'react';

const Cart = ({service}) => {
    console.log(service);
const handleConfirmOrder = (e) => {
    const totalOrder = service;
    fetch('http://localhost:5000/allOrders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(totalOrder)
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
             <button className="confirm-btn" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
    );
};

export default Cart;