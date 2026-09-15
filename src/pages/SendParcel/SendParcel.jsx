
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm();

    const {user}= useAuth();
    // console.log(user)
    const axiosSecure = useAxiosSecure();

    const WarehouseData = useLoaderData();
    const regions = WarehouseData.map(warehouse => warehouse.region);
    const region = [...new Set(regions)]
    // console.log(region)


    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })

    const districtByRegion = (region) => {
        const regionWarehouses = WarehouseData.filter(warehouse => warehouse.region === region);
        const districts = regionWarehouses.map(d => d.district)
        return districts;
    }



    const handelSendParcel = (data) => {
        // console.log(data);
        const isDocument = data.parcelType === 'Document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight)
        let cost = 0;

        if(isDocument){
            cost = (isSameDistrict) ? 60 : 80;
        }else{
            if (parcelWeight < 3) {
               cost = (isSameDistrict) ? 110 : 150;
            }else{
                const minCharge = (isSameDistrict) ? 110 : 150;
                const extraWeight = parcelWeight -3;
                const extraCharge = extraWeight * 40;
                (isSameDistrict) ? cost= minCharge + extraCharge : cost= minCharge + extraCharge + 40
            }
        }
        
        console.log( 'cost = ',cost);
        data.cost =cost;

        //sweetAlert 2 added in confirmation
        Swal.fire({
            title: "Confirm Parcel?",
            text: `Your charge is ৳${cost}`,
            icon: "info",

            showCancelButton: true,
            confirmButtonText: `Pay ৳${cost}`,
            cancelButtonText: "Cancel",

            buttonsStyling: false,

            customClass: {
                popup: "rounded-3xl p-6",
                title: "text-2xl font-bold text-gray-800",
                htmlContainer: "text-gray-500",

                confirmButton:
                    "bg-secondary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl mx-2",

                cancelButton:
                    "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl mx-2",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log("Proceed to payment");
                axiosSecure.post('/parcels',data)
                    .then(res=>{
                        console.log('after saving parcel', res.data)
                    }).catch(err=>{
                        err.message
                    })
            }
        });

    };



    return (
        <div className="my-10 md:my-15 bg-white p-5 md:p-10 rounded-4xl">

            {/* Title */}
            <h1 className="text-secondary font-bold text-3xl py-5">
                Send A Parcel
            </h1>

            <form onSubmit={handleSubmit(handelSendParcel)}>

                {/* Form Heading */}
                <h1 className="border-b-2 border-dotted border-gray-400 pb-2 font-semibold">
                    Enter your parcel details
                </h1>

                {/*  DOCUMENT */}
                <div className="flex gap-8 py-5">

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            value="Document"
                            {...register("parcelType", {
                                required: true,
                            })}
                            className="radio radio-success radio-sm"
                        />
                        <span>Document</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            value="Not-Document"
                            {...register("parcelType", {
                                required: true,
                            })}
                            className="radio radio-sm"
                        />
                        <span>Not-Document</span>
                    </label>

                </div>

                {errors.parcelType && (
                    <p className="text-red-500 text-sm mb-4">
                        Please select parcel type.
                    </p>
                )}

                {/*  PARCEL NAME & WEIGHT  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Parcel Name */}
                    <div>
                        <label className="label">
                            Parcel Name
                        </label>

                        <input
                            type="text"
                            {...register("parcelName", {
                                required: true,
                            })}
                            className="input w-full"
                            placeholder="Parcel Name"
                        />

                        {errors.parcelName && (
                            <p className="text-red-500 text-sm mt-1">
                                Parcel name is required.
                            </p>
                        )}
                    </div>

                    {/* Parcel Weight */}
                    <div>
                        <label className="label">
                            Parcel Weight (KG)
                        </label>

                        <input
                            type="number"
                            step="0.1"
                            {...register("parcelWeight", {
                                required: true,
                                min: 0.1,
                            })}
                            className="input w-full"
                            placeholder="Parcel Weight (KG)"
                        />

                        {errors.parcelWeight?.type === "required" && (
                            <p className="text-red-500 text-sm mt-1">
                                Parcel weight is required.
                            </p>
                        )}

                        {errors.parcelWeight?.type === "min" && (
                            <p className="text-red-500 text-sm mt-1">
                                Weight must be greater than 0.
                            </p>
                        )}
                    </div>

                </div>

                {/*  SENDER & RECEIVER  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

                    {/*  SENDER DETAILS  */}
                    <div>
                        <h2 className="font-semibold text-lg border-b pb-2 mb-4">
                            Sender Details
                        </h2>

                        {/* Sender Name */}
                        <div className="mb-3">
                            <label className="label">
                                Sender Name
                            </label>

                            <input
                                type="text"
                                {...register("senderName", {
                                    required: true,
                                })}
                                defaultValue={user?.displayName}
                                className="input w-full"
                                placeholder="Sender Name"
                            />

                            {errors.senderName && (
                                <p className="text-red-500 text-sm mt-1">
                                    Sender name is required.
                                </p>
                            )}
                        </div>

                        {/* Sender Address */}
                        <div className="mb-3">
                            <label className="label">
                                Address
                            </label>

                            <input
                                type="text"
                                {...register("senderAddress", {
                                    required: true,
                                })}
                                className="input w-full"
                                placeholder="Address"
                            />

                            {errors.senderAddress && (
                                <p className="text-red-500 text-sm mt-1">
                                    Sender address is required.
                                </p>
                            )}
                        </div>

                        {/* Sender email */}
                        <div className="mb-3">
                            <label className="label">
                                Sender Email
                            </label>

                            <input
                                type="email"
                                {...register("senderEmail", {
                                    required: true,
                                })}
                                defaultValue={user?.email}
                                className="input w-full"
                                placeholder="Sender Email"
                            />

                            {errors.senderEmail && (
                                <p className="text-red-500 text-sm mt-1">
                                    Sender Email is required.
                                </p>
                            )}
                        </div>

                        {/* Sender Phone */}
                        <div className="mb-3">
                            <label className="label">
                                Sender Phone No
                            </label>

                            <input
                                type="tel"
                                {...register("senderPhone", {
                                    required: true,
                                })}
                                className="input w-full"
                                placeholder="Sender Phone No"
                            />

                            {errors.senderPhone && (
                                <p className="text-red-500 text-sm mt-1">
                                    Sender phone number is required.
                                </p>
                            )}
                        </div>

                        {/* Sender r */}
                        <div className="mb-3">
                            <label className="label">
                                Your region
                            </label>

                            <select
                                {...register("senderRegion", {
                                    required: true,
                                })}
                                className="select w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select your Region
                                </option>

                                {region.map((region) => (
                                    <option
                                        key={region}
                                        value={region}
                                    >
                                        {region}
                                    </option>
                                ))}
                            </select>

                            {errors.senderDistrict && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please select your district.
                                </p>
                            )}
                        </div>

                        {/* Sender District */}
                        <div className="mb-3">
                            <label className="label">
                                Your District
                            </label>

                            <select
                                {...register("senderDistrict", {
                                    required: true,
                                })}
                                className="select w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select your District
                                </option>

                                {districtByRegion(senderRegion).map((district) => (
                                    <option
                                        key={district}
                                        value={district}
                                    >
                                        {district}
                                    </option>
                                ))}
                            </select>

                            {errors.senderDistrict && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please select your district.
                                </p>
                            )}
                        </div>

                        {/* Pickup Instruction */}
                        <div>
                            <label className="label">
                                Pickup Instruction
                            </label>

                            <textarea
                                {...register("pickupInstruction")}
                                className="textarea w-full h-28"
                                placeholder="Pickup Instruction"
                            ></textarea>
                        </div>

                    </div>

                    {/*  RECEIVER DETAILS  */}
                    <div>
                        <h2 className="font-semibold text-lg border-b pb-2 mb-4">
                            Receiver Details
                        </h2>

                        {/* Receiver Name */}
                        <div className="mb-3">
                            <label className="label">
                                Receiver Name
                            </label>

                            <input
                                type="text"
                                {...register("receiverName", {
                                    required: true,
                                })}
                                className="input w-full"
                                placeholder="Receiver Name"
                            />

                            {errors.receiverName && (
                                <p className="text-red-500 text-sm mt-1">
                                    Receiver name is required.
                                </p>
                            )}
                        </div>

                        {/* Receiver Address */}
                        <div className="mb-3">
                            <label className="label">
                                Receiver Address
                            </label>

                            <input
                                type="text"
                                {...register("receiverAddress", {
                                    required: true,
                                })}
                                className="input w-full"
                                placeholder="Receiver Address"
                            />

                            {errors.receiverAddress && (
                                <p className="text-red-500 text-sm mt-1">
                                    Receiver address is required.
                                </p>
                            )}
                        </div>

                        {/* Receiver email */}
                        <div className="mb-3">
                            <label className="label">
                                Receiver Email
                            </label>

                            <input
                                type="email"
                                {...register("receiverEmail", {
                                    required: true,
                                })}
                                className="input w-full"
                                placeholder="Receiver Email"
                            />

                            {errors.receiverEmail && (
                                <p className="text-red-500 text-sm mt-1">
                                    Receiver Email is required.
                                </p>
                            )}
                        </div>

                        {/* Receiver Phone */}
                        <div className="mb-3">
                            <label className="label">
                                Receiver Contact No
                            </label>

                            <input
                                type="tel"
                                {...register("receiverPhone", {
                                    required: true,
                                })}
                                className="input w-full"
                                placeholder="Receiver Contact No"
                            />

                            {errors.receiverPhone && (
                                <p className="text-red-500 text-sm mt-1">
                                    Receiver contact number is required.
                                </p>
                            )}
                        </div>

                        {/* Receiver Region */}
                        <div className="mb-3">
                            <label className="label">
                                Receiver Region
                            </label>

                            <select
                                {...register("receiverRegion", {
                                    required: true,
                                })}
                                className="select w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select your Region
                                </option>

                                {region.map((region) => (
                                    <option
                                        key={region}
                                        value={region}
                                    >
                                        {region}
                                    </option>
                                ))}
                            </select>

                            {errors.receiverDistrict && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please select receiver district.
                                </p>
                            )}
                        </div>

                        {/* Receiver District */}
                        <div className="mb-3">
                            <label className="label">
                                Your District
                            </label>

                            <select
                                {...register("receiverDistrict", {
                                    required: true,
                                })}
                                className="select w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select your District
                                </option>

                                {districtByRegion(receiverRegion).map((district) => (
                                    <option
                                        key={district}
                                        value={district}
                                    >
                                        {district}
                                    </option>
                                ))}
                            </select>

                            {errors.senderDistrict && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please select your district.
                                </p>
                            )}
                        </div>

                        {/* Delivery Instruction */}
                        <div>
                            <label className="label">
                                Delivery Instruction
                            </label>

                            <textarea
                                {...register("deliveryInstruction")}
                                className="textarea w-full h-28"
                                placeholder="Delivery Instruction"
                            ></textarea>
                        </div>

                    </div>

                </div>

                {/*  PICKUP TIME  */}
                <div className="mt-8">
                    <p className="text-sm font-medium">
                        * PickUp Time 4pm-7pm Approx.
                    </p>
                </div>

                {/*  SUBMIT  */}
                <button
                    type="submit"
                    className="btn btn-primary text-black mt-8 px-10"
                >
                    Proceed to Confirm Booking
                </button>

            </form>
        </div>
    );
};

export default SendParcel;