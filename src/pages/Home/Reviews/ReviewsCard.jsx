import React from 'react';

const ReviewsCard = ({ reviewsData }) => {
    console.log(reviewsData)
    const {
        userName,
        ratings,
        review,
        user_photoURL
    } = reviewsData;

    return (
        <div
            className="relative bg-[#fff1f1] rounded-2xl p-6 w-full max-w-sm min-h-[300px] overflow-hidden"
            style={{
                backgroundImage: `url(${user_photoURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-white/70"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className="text-5xl font-bold text-gray-300">
                    “
                </div>

                <p className="text-sm font-semibold text-secondary leading-5 mt-2">
                    {review}
                </p>

                <div className="border-t border-dashed border-gray-400 mt-5 mb-4"></div>

                <div className="flex items-center gap-3">
                    <img
                        src={user_photoURL}
                        alt={userName}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="font-bold text-[#17343a]">
                            {userName}
                        </h3>

                        <p className="text-xs text-gray-500">
                            Customer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;