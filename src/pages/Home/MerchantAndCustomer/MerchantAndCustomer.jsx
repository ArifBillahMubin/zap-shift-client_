import React from 'react';
import img from '../../../assets/location-merchant.png'
import imgTop from '../../../assets/be-a-merchant-bg.png'

const MerchantAndCustomer = () => {
    return (
        <div className='relative'>
            <div className='my-10 mx-10 py-10 md:py-20 max-w-7xl px-8 md:px-8 space-y-6 flex flex-col md:flex-row bg-secondary rounded-4xl '>
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold items-center text-white'>
                        Merchant and Customer Satisfaction is Our First Priority
                    </h1>
                    <p className='text-gray-500 mt-4 md:mt-6 max-w-'>
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                </div>
                <div className='flex-1'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='absolute top-0 right-0'>
                <img src={imgTop} alt="" />
            </div>
        </div>
    );
};

export default MerchantAndCustomer;