import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './OrderCart.css';

const OrderCart = () => {
    const history = useHistory();

    const handleConfirmOrder = () => {
        history.push('/processing')
    }

    return (
        <div className="text-center ml-5">
            <h2 className="text-3xl font-bold mb-3">Place Your Order</h2>
            <div>
            <form className="form mb-3">
                    <input className="input-field"  type="text" name="" id=""
                     placeholder="Your Name" required />
                     <br /><br />
                    <input className="input-field"  type="email" name="" id=""
                     placeholder="Your Email" required/>
                     <br /><br />
                    <input className="input-field"  type="text" name="" id=""
                     placeholder="Address" required/>
                     <br /><br />
                    <input className="input-field"  type="text" name="" id=""
                     placeholder="Mobile no" required/>
                </form>
            </div>
              <div>
             <button className="confirm-btn" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
           
        </div>
    );
};

export default OrderCart;