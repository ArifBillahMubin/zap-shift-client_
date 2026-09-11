import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Logo from '../component/Logo/Logo';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto  py-5 '>
            <Logo></Logo>
            <div className='flex flex-col py-5 md:flex-row justify-center items-center h-screen'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;