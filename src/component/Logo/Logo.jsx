import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={'/'} className='flex items-end '>
            <img src={logo} alt="Logo" className='h-[38px]'/>
            <h3 className='text-xl font-bold -ms-2 -mb-1'>ZapShift</h3>
        </Link>
    );
};

export default Logo;