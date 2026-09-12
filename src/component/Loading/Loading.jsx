import React from "react";

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="flex flex-col items-center gap-5">

                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-base-300"></div>

                    <div className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent animate-spin"></div>

                    <div className="absolute inset-2 rounded-full bg-secondary/10 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="font-semibold text-base-content">
                        Please wait
                    </p>
                    <p className="text-sm text-base-content/50 mt-1">
                        Loading your experience...
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Loading;