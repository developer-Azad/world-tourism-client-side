import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './MyOrders.css';

const ManageServices = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    console.log(orders);
    useEffect(() => {
        fetch('https://mysterious-sands-94616.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleRemove = id => {
        const url = `https://mysterious-sands-94616.herokuapp.com/orders/${id}`;
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
        const url = `https://mysterious-sands-94616.herokuapp.com/orders/${id}`;
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
            window.location.reload();
           }
        })
    }
    const allorder = orders.filter(order => order.email === user.email)

    return (
        <div className="mx-10">
            <h2 className="text-4xl font-bold text-center my-6">You choose to visit</h2>
            <div className="">
            <div className="orders-container">
            {
                allorder.map(service => <div key={service._id}>

        <div className="col">
        <div className="card h-100">
          <img src={service.order.url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className="text-center">
            <h5 className="text-2xl font-semibold">{service.order.name}</h5>
            <p className="card-text">{service.order.name}</p>
            </div>
            <div>
            <p className="card-text">{service.status}</p>
            </div>
          </div>
          <div className="text-center mt-3">
          <button className="remove-btn m-2" onClick={()=> handleRemove(service._id)}>Remove</button>
            <button className="confirm-btn m-2" onClick={() => handleConfirm(service._id)}>Confirm</button>
          </div>
        </div>
      </div>
            </div>)
            }
            </div>
            </div>
        </div>
    );
};

export default ManageServices;