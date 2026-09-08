import feature2 from '../../../assets/safe-delivery.png';
import feature1 from '../../../assets/live-tracking.png';

const featuresData = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
        image: feature1,
    },
    {
        id: 2,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: feature2,
    },
    {
        id: 3,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: feature2,
    },
];

const Features = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 border-t-3 border-b-3 border-dotted border-gray-300">
            <div className="space-y-4">

                {featuresData.map((feature) => (
                    <div
                        key={feature.id}
                        className="bg-base-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-lg"
                    >
                        {/* Image */}
                        <div className="w-full md:w-40 flex justify-center">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-32 md:w-36 h-32 md:h-36 object-contain"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block border-r-2 border-dotted border-gray-300 h-24" />

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Features;