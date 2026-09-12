import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../component/Logo/Logo';
import useAuth from '../../../hooks/useAuth';
import PrimaryButton from '../../../component/Button/PrimaryButton/PrimaryButton';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout().then().catch(error => console.log(error))
    }

    const lints = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/sendParcel">Send Parcel</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 py-2 rounded-2xl relative top-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {lints}
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lints}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <button className="btn rounded-full  text-secondary" onClick={handleLogout}>Logout</button> : <Link to={'/login'} className="btn rounded-full  text-secondary">LogIn</Link>
                }

                <div className='flex items-center ml-2'>
                    <Link className="btn rounded-full bg-primary text-secondary" to={'/beARider'}>Be a Rider</Link>
                    <div className='rounded-full bg-secondary p-1 '>
                        <ArrowUpRight className='text-primary' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;