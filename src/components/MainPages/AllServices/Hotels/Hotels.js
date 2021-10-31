import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import Service from '../Service/Service';
import './Hotel.css';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect( () => {
        fetch('https://mysterious-sands-94616.herokuapp.com/hotels')
        .then(res => res.json())
        .then(data => setHotels(data))
    }, [])

    return (
        <div className="">
            <h2 className="text-4xl m-10 font-bold">Recommended Popular Hotels</h2>
            <div className="hotels-container m-10">
                {
                    hotels.map(hotel => <Hotel
                    key={hotel._id}
                    hotel={hotel}
                    ></Hotel>)
                }
            </div>
        </div>
    );
};

export default Hotels;