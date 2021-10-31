import React from 'react';

const Cart = ({service}) => {
    console.log(service);

const handleConfirmOrder = () => {
    const url = `https://mysterious-sands-94616.herokuapp.com/orders`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('deleted')
                // const remaining = services.filter(service => service._id !== id);
                // setServices(remaining);
            }
        })
}

    return (
        <div>
             <button className="confirm-btn" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
    );
};

export default Cart;