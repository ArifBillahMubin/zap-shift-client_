import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png';

const howItWorksData = [
    {
        id: 1,
        title: "Booking Pick & Drop",
        description:
            "From personal packages to business shipments - we deliver on time, every time.",
        image: bookingIcon,
    },
    {
        id: 2,
        title: "Cash On Delivery",
        description:
            "From personal packages to business shipments - we deliver on time, every time.",
        image: bookingIcon,
    },
    {
        id: 3,
        title: "Delivery Hub",
        description:
            "From personal packages to business shipments - we deliver on time, every time.",
        image: bookingIcon,
    },
    {
        id: 4,
        title: "Booking SME & Corporate",
        description:
            "From personal packages to business shipments - we deliver on time, every time.",
        image: bookingIcon,
    },
];

const HowItWorks = () => {
    return (
        <section className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Heading */}
                <h2 className="mb-6 text-2xl font-bold text-secondary sm:text-3xl">
                    How it Works
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {howItWorksData.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md bg-white"
                        >
                            {/* Icon */}
                            <div className="mb-5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-12 w-12 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mb-3 text-base font-semibold text-[#1f2937]">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-6 text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;