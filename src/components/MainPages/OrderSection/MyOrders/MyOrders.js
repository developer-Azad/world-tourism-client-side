
import React, { useEffect, useState } from 'react';
import OrderCart from '../OrderCart/OrderCart';
import './MyOrders.css';

const ManageServices = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleRemove = id => {
        const url = `http://localhost:5000/orders/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('deleted')
                const remaining = orders.filter(service => service._id !== id);
                setOrders(remaining);
            }
        })
    }
    const updatedStatus = {status: 'Approved'};

    const handleConfirm = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount > 0){
               alert('updated Successfully');
            //    setUser({});
           }
        })

        // id.preventDefault();
    }
    

    return (
        <div>
            <h2>You choose to visit</h2>
            <div className="place-order">
            <div className="orders-container">
            {
                orders.map(service => <div key={service._id}>
                    <img src={service.url} alt="" />
                    <h3>{service.name}</h3>
                    <p>{service.status}</p>
                    <div className="display-btn my-3">
                    <button className="remove-btn" onClick={()=> handleRemove(service._id)}>Remove</button>
                    <button className="confirm-btn" onClick={() => handleConfirm(service._id)}>Confirm</button>
                    </div>
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

export default ManageServices;