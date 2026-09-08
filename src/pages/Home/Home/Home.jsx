import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWork/HowItWorks';
import OurServices from '../OurServices/OurServices';
import OurBrands from '../OurBrands/OurBrands';
import { Feather } from 'lucide-react';
import Features from '../Features/Features';
import MerchantAndCustomer from '../MerchantAndCustomer/MerchantAndCustomer';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <OurBrands></OurBrands>
            <Features></Features>
            <MerchantAndCustomer></MerchantAndCustomer>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            {/* <FAQ></FAQ> */}
        </div>
    );
};

export default Home;