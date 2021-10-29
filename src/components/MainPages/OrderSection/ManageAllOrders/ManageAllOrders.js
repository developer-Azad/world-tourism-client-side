import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleCancelOrder = id => {
        const url = ``;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Are you sure to cancel this order')
            const restOrders = orders.filter(order => order._id !== id);
            setOrders(restOrders);
            }
        })
    }

    return (
        <div>
            <h2>Manage All Orders</h2>
            <div>
                {
                    orders.map(order => <div
                    key={order._id}>
                        <h3>{order.name}</h3>
                        <button onClick={handleCancelOrder(order._id)}>Cancel Order</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;