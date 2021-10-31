import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://mysterious-sands-94616.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const handleRemove = id => {
        const url = `https://mysterious-sands-94616.herokuapp.com/allOrders/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })
    }
    const updatedStatus = {status: 'Approved'};

    const handleConfirm = id => {
        const url = `https://mysterious-sands-94616.herokuapp.com/allOrders/${id}`;
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
           }
        })
        const url2 = `https://mysterious-sands-94616.herokuapp.com/orders/${id}`;
        fetch(url2, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
        .then(res => res.json())
        .then(data => {
           
        })

        // id.preventDefault();
    }

    return (
        <div className="mx-10">
            <h2 className="text-4xl font-bold my-6 text-center">Manage All Orders</h2>
            <div className="allorders-container">
            {
                services.map(service => <div key={service._id}>
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
        </div>
    );
};

export default ManageAllOrders;