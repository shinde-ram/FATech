import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ReviewCard from './ReviewCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Reviews } from '../../data/Reviews';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='bg-gray-100 pt-10 relative mx-auto px-4' data-aos="fade-up">
      <h2 className="font-bold mb-2 text-[#1B2124] text-xl text-center">
        Students ❤️ Future Advanced Technologies
      </h2>
      <p className='text-center mb-4'>Hear from our students</p>

      {/* Custom Left Arrow */}
      <div className="custom-swiper-button-prev absolute top-[83%] xl:top-[50%] left-[5%] z-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition">
        <ArrowLeftIcon className="h-6 w-6 text-gray-800" />
      </div>

      {/* Custom Right Arrow */}
      <div className="custom-swiper-button-next absolute top-[83%] xl:top-[50%] right-[5%] z-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition">
        <ArrowRightIcon className="h-6 w-6 text-gray-800" />
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="w-full"
      >
        {Reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className='text-3xl md:text-5xl font-bold text-center text-black pb-10 md:whitespace-nowrap' style={{ fontFamily: "'Butterfly Kids', cursive" }}>
        <span className='text-4xl'>❤️</span> Their words, Our pride.<span className='text-4xl'>✨</span>
      </p>
    </div>
  );
}

export default Testimonial;
