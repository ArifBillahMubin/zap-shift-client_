import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
    CreditCard,
    Package,
    MapPin,
    User,
    Phone,
    DollarSign,
} from "lucide-react";
import Loading from "../../../component/Loading/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const {
        data: parcel = {},
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["parcel", parcelId],
        enabled: !!parcelId,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError || !parcel?._id) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-secondary">
                        Parcel Not Found
                    </h2>
                    <p className="mt-2 text-gray-500">
                        We couldn't find the parcel information.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-secondary">
                    Payment
                </h1>
                <p className="mt-1 text-gray-500">
                    Review your parcel information before making payment.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Parcel Information */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/30 flex items-center justify-center">
                            <Package
                                size={22}
                                className="text-secondary"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-secondary">
                                Parcel Information
                            </h2>
                            <p className="text-sm text-gray-500">
                                Parcel ID: {parcel._id}
                            </p>
                        </div>
                    </div>

                    <div className="p-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Parcel Name */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Parcel Name
                                </p>
                                <p className="font-semibold text-secondary">
                                    {parcel.parcelName || "N/A"}
                                </p>
                            </div>

                            {/* Parcel Type */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Parcel Type
                                </p>
                                <p className="font-semibold text-secondary">
                                    {parcel.parcelType || "N/A"}
                                </p>
                            </div>

                            {/* Weight */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Weight
                                </p>
                                <p className="font-semibold text-secondary">
                                    {parcel.parcelWeight || 0} kg
                                </p>
                            </div>

                            {/* Receiver */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Receiver
                                </p>

                                <div className="flex items-center gap-2">
                                    <User size={17} className="text-gray-400" />
                                    <p className="font-semibold text-secondary">
                                        {parcel.receiverName || "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Receiver Phone
                                </p>

                                <div className="flex items-center gap-2">
                                    <Phone size={17} className="text-gray-400" />
                                    <p className="font-semibold text-secondary">
                                        {parcel.receiverPhone || "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Destination */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Destination
                                </p>

                                <div className="flex items-center gap-2">
                                    <MapPin
                                        size={17}
                                        className="text-gray-400"
                                    />
                                    <p className="font-semibold text-secondary">
                                        {parcel.receiverDistrict || "N/A"}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-fit overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-primary/30 flex items-center justify-center">
                                <CreditCard
                                    size={22}
                                    className="text-secondary"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-secondary">
                                    Payment Summary
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Complete your payment
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">

                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-500">
                                Delivery Cost
                            </span>

                            <span className="font-semibold text-secondary">
                                ৳ {parcel.cost || 0}
                            </span>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <span className="font-bold text-secondary">
                                Total
                            </span>

                            <div className="flex items-center gap-1 text-xl font-bold text-secondary">
                                <DollarSign size={19} />
                                ৳ {parcel.cost || 0}
                            </div>
                        </div>

                        <button
                            className="
                                w-full
                                mt-6
                                flex items-center justify-center gap-2
                                bg-primary
                                text-secondary
                                font-bold
                                py-3
                                rounded-xl
                                hover:opacity-90
                                transition
                            "
                        >
                            <CreditCard size={19} />
                            Pay Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;