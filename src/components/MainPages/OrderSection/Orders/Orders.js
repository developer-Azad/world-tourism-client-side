import React, { useEffect } from 'react';
import './Orders.css';

const Orders = ({order}) => {
    const {name, description, url } = order;

    useEffect( () => {
        fetch('')
    }, [])

const handleConfirm = () => {

}



    return (
        <div>
            <h2>orders</h2>
            
        </div>
    );
};

export default Orders;