import React, { use } from 'react';
import img from "../../../assets/customer-top.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow,} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ reviewsPromise }) => {

    const reviewsData = use(reviewsPromise);
    // console.log(reviewsData);
    return (
        <div className='py-10'>
            <div className='flex flex-col justify-center items-center gap-3 pb-5'>
                <img src={img} alt="" className='w-32'/>
                <h1 className='text-3xl text-secondary text-center'>What our customers are sayings</h1>
                <h5 className='text-gray-500 text-center max-w-2xl mx-auto'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</h5>
            </div>

            <>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale:0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow,Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviewsData.map((data)=>
                            <SwiperSlide key={data.id}>
                                <ReviewsCard reviewsData={data}></ReviewsCard>
                            </SwiperSlide>
                        )
                    }
                    
                </Swiper>
            </>

        </div>
    );
};

export default Reviews;