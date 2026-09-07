import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import PrimaryButton from '../../../component/Button/PrimaryButton/PrimaryButton';
import { ArrowUpRight } from 'lucide-react';
import ButtonSecondary from '../../../component/Button/ButtonSeconday/ButtonSecondary';


const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            className="rounded-2xl mt-4 md:mt-8"

        >
            <div className="relative">
                <img src={banner1} />
                <div className="flex absolute bottom-1/7 left-1/14 gap-4">
                    <div className='flex items-center'>
                        <PrimaryButton>Track Your Parcel</PrimaryButton>
                        <div className='rounded-full bg-secondary p-1 '>
                            <ArrowUpRight className='text-primary' />
                        </div>
                    </div>
                    <button className='btn text-secondary px-4'>Be A Rider</button>

                </div>
            </div>
            <div className="relative">
                <img src={banner2} />
                <div className="flex absolute bottom-1/7 left-1/14 gap-4">
                    <div className='flex items-center'>
                        <PrimaryButton>Track Your Parcel</PrimaryButton>
                        <div className='rounded-full bg-secondary p-1 '>
                            <ArrowUpRight className='text-primary' />
                        </div>
                    </div>
                    <button className='btn text-secondary px-4'>Be A Rider</button>

                </div>
            </div>
            <div>
                <img src={banner3} />
                <div className="flex absolute bottom-1/7 left-1/14 gap-4">
                    <div className='flex items-center'>
                        <PrimaryButton>Track Your Parcel</PrimaryButton>
                        <div className='rounded-full bg-secondary p-1 '>
                            <ArrowUpRight className='text-primary' />
                        </div>
                    </div>
                    <button className='btn text-secondary px-4'>Be A Rider</button>

                </div>
            </div>
        </Carousel>
    );
};

export default Banner;