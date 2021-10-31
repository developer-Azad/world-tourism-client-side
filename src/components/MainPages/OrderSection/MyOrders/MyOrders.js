
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './MyOrders.css';

const ManageServices = () => {
    const {user} = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([]);

    console.log(orders);
    useEffect(() => {
        fetch('https://mysterious-sands-94616.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
        // filter();
    }, [])




    // if(user.emil){
    //     setOrders( orders.filter(service => service.email === email));
        // console.log(userOrder);
        // setOrders(userOrder);
    // }
    // const filter = () => {
    //     const userOrder = orders.filter(order => order.email === email);
        
    
    
    // }
    // filter();
    

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
            //    setUser({});
           }
        })

        // id.preventDefault();
    }
    

    return (
        <div className="mx-10">
            <h2 className="text-4xl font-bold text-center my-6">You choose to visit</h2>
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
            </div>
        </div>
    );
};

export default ManageServices;