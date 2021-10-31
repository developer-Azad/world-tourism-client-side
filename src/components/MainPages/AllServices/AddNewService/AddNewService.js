import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('https://mysterious-sands-94616.herokuapp.com/services', data)
    .then(res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();

        }
    })
  }

    return (
        <div className="service-form">
            <h2 className="text-4xl font-bold text-danger">Add service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Service Name"/>
      <br />
      <input {...register("description", { required: true})} placeholder="Service description"/>
      <br />
      <input type="text" {...register("url", { required: true })} placeholder="image url"/>
      <br />
      <input className="confirm-btn submit-field" type="submit" />
    </form>
            </div>
    );
};

export default AddNewService;