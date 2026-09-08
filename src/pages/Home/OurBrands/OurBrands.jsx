import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

//brand images
import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/amazon_vector.png';
import brand3 from '../../../assets/brands/casio.png';
import brand4 from '../../../assets/brands/moonstar.png';
import brand5 from '../../../assets/brands/randstad.png';
import brand6 from '../../../assets/brands/star.png';
import brand7 from '../../../assets/brands/start_people.png';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];


const OurBrands = () => {
    return (
        <div className='py-10 md:py-20 max-w-7xl mx-auto px-4 md:px-8'>
            <h1 className='text-3xl font-bold text-secondary text-center items-center'>We've helped thousands of sales teams</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                className="mySwiper my-10"
            >

                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <img src={brand} alt={`Brand ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurBrands;