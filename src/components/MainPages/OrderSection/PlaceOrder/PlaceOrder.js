import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {orderId} = useParams();
    const [orders, setOrders] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    console.log(orders);

    const { register, handleSubmit } = useForm();


    useEffect(() => {

        fetch(`https://mysterious-sands-94616.herokuapp.com/services/${orderId}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []) 

    const onSubmit = data => {
        data.order = orders;
        data.status = 'Pending';

        fetch('https://mysterious-sands-94616.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Go to "My Order" page to confirm your order');
                history.push('/home');
            }
        })
      }
    

    return (
        <div className="mx-10">
            <h2 className="text-3xl font-bold my-6">You choose to visit</h2>
            <div className="place-order">
            <div className="orders-container">
                    <img src={orders.url} alt="" />
                    <h3>{orders.name}</h3>
                    <p>{orders.description}</p>
               
            </div>
            </div>
            {/* form */}
            <div className="order-form my-4">
            <h2 className="text-3xl font-bold mb-3 text-center m-4">Place Your Order</h2>
            <div>
            <form className="form mb-3" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 30 })} placeholder="Your name"/>
      <br /><br />
      <input {...register("email" )} placeholder="Email" value={user.email} readOnly/>
      <br /><br />
      <input {...register("address" )} placeholder="Address"/>
      <br /><br />
      <input type="number" {...register("mobile")} placeholder="Mobile"/>
      <br /><br />
      <input className="submit-btn" type="submit" />
    </form>
            </div>
            </div>
            </div>
    );
};

export default PlaceOrder;