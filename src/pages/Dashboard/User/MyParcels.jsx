import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    Eye,
    Package,
    MapPin,
    CalendarDays,
    DollarSign,
    Trash2,
} from "lucide-react";
import Swal from "sweetalert2";

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    // ================= GET PARCELS =================
    const { data: parcels = [], isLoading } = useQuery({
        queryKey: ["parcels", user?.email],
        enabled: !!user?.email,

        queryFn: async () => {
            const res = await axiosSecure.get(
                `/parcels?email=${user.email}`
            );

            return res.data;
        },
    });

    // ================= DELETE PARCEL =================
    const deleteParcelMutation = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(
                `/parcels/${id}`
            );

            return res.data;
        },

        onSuccess: () => {
            // Delete er por query abar refetch korbe
            queryClient.invalidateQueries({
                queryKey: ["parcels", user?.email],
            });

            Swal.fire({
                title: "Deleted!",
                text: "Your parcel has been deleted successfully.",
                icon: "success",
                confirmButtonColor: "#03373D",
            });
        },

        onError: () => {
            Swal.fire({
                title: "Error!",
                text: "Failed to delete the parcel.",
                icon: "error",
                confirmButtonColor: "#03373D",
            });
        },
    });

    // ================= DELETE HANDLER =================
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this parcel!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#CAEB66",
            cancelButtonColor: "#03373D",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteParcelMutation.mutate(id);
            }
        });
    };

    // ================= LOADING =================
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* ================= HEADER ================= */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-secondary">
                    My Parcels
                </h1>

                <p className="text-gray-500 mt-1">
                    Track and manage all your parcels in one place.
                </p>
            </div>

            {/* ================= SUMMARY ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Total Parcels */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Total Parcels
                            </p>

                            <h2 className="text-2xl font-bold text-secondary mt-1">
                                {parcels.length}
                            </h2>
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Package
                                size={22}
                                className="text-secondary"
                            />
                        </div>

                    </div>
                </div>

                {/* Total Cost */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                Total Cost
                            </p>

                            <h2 className="text-2xl font-bold text-secondary mt-1">
                                ৳
                                {parcels.reduce(
                                    (total, parcel) =>
                                        total +
                                        Number(parcel.cost || 0),
                                    0
                                )}
                            </h2>
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
                            <DollarSign
                                size={22}
                                className="text-secondary"
                            />
                        </div>

                    </div>
                </div>

            </div>

            {/* ================= TABLE ================= */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

                {/* Table Header */}
                <div className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-secondary">
                        Parcel List
                    </h2>
                </div>

                {/* ================= EMPTY STATE ================= */}
                {parcels.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 px-5 text-center">

                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <Package
                                size={30}
                                className="text-secondary"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-secondary">
                            No parcels found
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            You haven't created any parcel yet.
                        </p>

                    </div>
                ) : (

                    /* ================= TABLE ================= */
                    <div className="overflow-x-auto">

                        <table className="w-full">

                            {/* ================= THEAD ================= */}
                            <thead>
                                <tr className="bg-gray-50 text-left text-sm text-gray-500">

                                    <th className="px-5 py-4 font-medium">
                                        Parcel
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Receiver
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Destination
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Cost
                                    </th>

                                    <th className="px-5 py-4 font-medium">
                                        Date
                                    </th>

                                    <th className="px-5 py-4 font-medium text-center">
                                        Action
                                    </th>

                                </tr>
                            </thead>

                            {/* ================= TBODY ================= */}
                            <tbody className="divide-y divide-gray-100">

                                {parcels.map((parcel) => (
                                    <tr
                                        key={parcel._id}
                                        className="hover:bg-gray-50 transition"
                                    >

                                        {/* ================= PARCEL ================= */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                    <Package
                                                        size={19}
                                                        className="text-secondary"
                                                    />
                                                </div>

                                                <div>
                                                    <p className="font-semibold text-secondary">
                                                        {parcel.parcelName}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        {parcel.parcelType}
                                                        {" • "}
                                                        {parcel.parcelWeight} kg
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        {/* ================= RECEIVER ================= */}
                                        <td className="px-5 py-4">
                                            <div>

                                                <p className="font-medium text-gray-700">
                                                    {parcel.receiverName}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    {parcel.receiverPhone}
                                                </p>

                                            </div>
                                        </td>

                                        {/* ================= DESTINATION ================= */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-start gap-2">

                                                <MapPin
                                                    size={16}
                                                    className="text-secondary mt-0.5 shrink-0"
                                                />

                                                <div>

                                                    <p className="font-medium text-gray-700">
                                                        {parcel.receiverDistrict}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        {parcel.receiverRegion}
                                                    </p>

                                                </div>

                                            </div>
                                        </td>

                                        {/* ================= COST ================= */}
                                        <td className="px-5 py-4">
                                            <span className="font-semibold text-secondary">
                                                ৳{parcel.cost}
                                            </span>
                                        </td>

                                        {/* ================= DATE ================= */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">

                                                <CalendarDays
                                                    size={16}
                                                    className="text-gray-400"
                                                />

                                                {new Date(
                                                    parcel.createdAt
                                                ).toLocaleDateString(
                                                    "en-GB",
                                                    {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    }
                                                )}

                                            </div>
                                        </td>

                                        {/* ================= ACTION ================= */}
                                        <td className="px-5 py-4">
                                            <div className="flex justify-center gap-2">

                                                {/* View */}
                                                <button
                                                    className="
                                                        flex items-center justify-center
                                                        gap-2
                                                        px-3 py-2
                                                        rounded-lg
                                                        text-sm
                                                        font-medium
                                                        text-secondary
                                                        bg-primary/20
                                                        hover:bg-primary
                                                        transition
                                                    "
                                                >
                                                    <Eye size={16} />
                                                    View
                                                </button>

                                                {/* Delete */}
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            parcel._id
                                                        )
                                                    }
                                                    disabled={
                                                        deleteParcelMutation.isPending
                                                    }
                                                    className="
                                                        flex items-center justify-center
                                                        gap-2
                                                        px-3 py-2
                                                        rounded-lg
                                                        text-sm
                                                        font-medium
                                                        text-red-600
                                                        bg-red-50
                                                        hover:bg-red-100
                                                        transition
                                                        disabled:opacity-50
                                                        disabled:cursor-not-allowed
                                                    "
                                                >
                                                    <Trash2 size={16} />

                                                    {deleteParcelMutation.isPending
                                                        ? "Deleting..."
                                                        : "Delete"}
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>
                )}

            </div>
        </div>
    );
};

export default MyParcels;