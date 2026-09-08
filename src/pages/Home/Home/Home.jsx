import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWork/HowItWorks';
import OurServices from '../OurServices/OurServices';
import OurBrands from '../OurBrands/OurBrands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <OurBrands></OurBrands>
        </div>
    );
};

export default Home;