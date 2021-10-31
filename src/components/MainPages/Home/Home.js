import React from 'react';
import Hotels from '../AllServices/Hotels/Hotels';
import Services from '../AllServices/Services/Services';
import WhyChooseUs from '../AllServices/WhyChooseUs/WhyChooseUs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Hotels></Hotels>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;