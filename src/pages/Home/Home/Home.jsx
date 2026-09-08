import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWork/HowItWorks';
import OurServices from '../OurServices/OurServices';
import OurBrands from '../OurBrands/OurBrands';
import { Feather } from 'lucide-react';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <OurBrands></OurBrands>
            <Features></Features>
        </div>
    );
};

export default Home;