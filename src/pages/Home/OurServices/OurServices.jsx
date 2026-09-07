import React from 'react';
import serviceImage from '../../../assets/service.png'
const servicesData = [
    {
        id: 1,
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        id: 2,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        id: 3,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        id: 4,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        id: 5,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        id: 6,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const OurServices = () => {
    return (
        <section className='bg-secondary py-5 md:py-15 rounded-3xl'>
            <div className='text-center flex flex-col gap-4 max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold text-white'>Our Services</h2>
                <h5 className='text-gray-300'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </h5>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
                {servicesData.map((service) => (
                    <div key={service.id} className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 hover:bg-primary flex flex-col items-center justify-center text-center'>
                        <img src={serviceImage} alt={service.title} className='w-12 h-12 mb-4' />
                        <h3 className='text-lg text-center text-secondary font-semibold mb-2'>{service.title}</h3>
                        <h3 className='text-gray-600 text-center'>{service.description}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;