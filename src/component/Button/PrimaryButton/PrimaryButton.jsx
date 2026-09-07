import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn rounded-full bg-primary text-secondary">{children}</button>
        </div>
    );
};

export default PrimaryButton;