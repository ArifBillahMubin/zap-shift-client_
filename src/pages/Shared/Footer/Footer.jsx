import React from 'react';
import Logo from '../../../component/Logo/Logo';
import { Link } from 'react-router';

const Footer = () => {

    const navItems = [
        { name: 'Services', path: '/services' },
        { name: 'Coverage', path: '/coverage' },
        { name: 'About Us', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <footer className="px-4 md:px-8 py-8">

            <div className="bg-[#080808] rounded-3xl">

                <div className="px-6 md:px-12 py-10 md:py-12">

                    {/* Logo */}
                    <div className='flex justify-center items-center'>
                        <div className="flex justify-center items-center bg-amber-300 py-2 px-10 max-w-50 rounded-4xl">
                            <Logo />
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center max-w-xl mx-auto mt-4 leading-6">
                        Enjoy fast, reliable parcel delivery with real-time tracking
                        and zero hassle. From personal packages to business shipments —
                        we deliver on time, every time.
                    </p>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-700 mt-7" />

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mt-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-400 text-sm hover:text-white transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-700 mt-5" />

                    {/* Social Links */}
                    <div className="flex justify-center gap-5 mt-5">

                        <Link
                            to="/linkedin"
                            className="text-gray-400 hover:text-white transition"
                        >
                            LinkedIn
                        </Link>

                        <Link
                            to="/twitter"
                            className="text-gray-400 hover:text-white transition"
                        >
                            Twitter
                        </Link>

                        <Link
                            to="/facebook"
                            className="text-gray-400 hover:text-white transition"
                        >
                            Facebook
                        </Link>

                        <Link
                            to="/youtube"
                            className="text-gray-400 hover:text-white transition"
                        >
                            YouTube
                        </Link>

                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs text-center mt-6">
                        Copyright © {new Date().getFullYear()} ZapShift.
                        All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;