import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

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
            <div className="places-container m-10">
                {
                    hotels.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Hotels;