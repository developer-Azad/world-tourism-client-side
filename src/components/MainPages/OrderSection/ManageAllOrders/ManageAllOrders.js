import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const handleCancelOrder = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Are you sure to cancel this order')
            const restOrders = services.filter(service => service._id !== id);
            setServices(restOrders);
            }
        })
    }

    return (
        <div>
            <h2>Manage All Orders</h2>
            <div>
                {
                    services.map(service => <div
                    key={service._id}>
                        <h3>{service.name}</h3>
                        <button onClick={handleCancelOrder(service._id)}>Cancel Order</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;