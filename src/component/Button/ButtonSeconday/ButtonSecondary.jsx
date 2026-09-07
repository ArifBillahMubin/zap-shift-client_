import React from 'react';

const ButtonSecondary = ({ children }) => {
    return (
        <div>
            <button className="btn bg-primary text-secondary">{children}</button>
        </div>
    );
};

export default ButtonSecondary;