import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ReviewCard from './ReviewCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import vishakha from '../../assets/vishakha.png'
import nikhil from '../../assets/nikhil.png'
import rohit from '../../assets/rohit.png'
import dhiraj from '../../assets/dhiraj.png'


function Testimonial() {
    const reviews = [
        { id: 1, name: "Vishakha Mankar", img_url: vishakha, review: "Something I really appreciate about institute is aptitude behaviour for problem-soleving. I think its a great job when you ran the all-hands Projects. It showed that team building and capable of getting people to work together and communicate effectively. I admire my seniors for their co-ordinating ability.One of most impactful thing was how projects were handled and ability to providing many more projects to avoid hustle for our future perspective. Institute showed the power of user testing in shaping a feature roadmap. I'd love to see you do more of in this field. For HR department-I can see you're positively impacting your office and managing the required thing to us without getting irritated. People seem happy to have you in office", college: "MIT College", course: "Mechanical" },
        { id: 2, name: "Nikhil Kale", img_url: nikhil, review: "Future Advanced Technologies. Thank you for a great course. Great presentation style with lots of opportunities to ask questions and talk about real life examples. I am really enjoy this course .This has more than met myexpectations. Your activities like Group discussion ,Experienced guest lectures, one day trip also makes these days more remembered . Teaching staff also has good knowledge and supportive .wonderfully practical course - both personally and professionally.", college: "G,S Moze College", course: "Mechanical" },
        { id: 3, name: "Rohit pawar", img_url: rohit, review: "FATech gave me the platform to turn my technical skills into a real career.The training was completely industry-oriented and project-based.Their placement support was excellent, right from resume to final interview.The trainers were highly experienced and always ready to clear doubts.Working on real-time projects boosted my confidence tremendously.FATech truly bridges the gap between learning and industry expectations.I got placed in a reputed company soon after completing the course.I highly recommend FATech to anyone serious about building a career in tech.", college: "Dr.Daulatrao Aher ", course: "Mechanical" },
        { id: 4, name: "Dhiraj Kale", img_url: dhiraj, review: "FATech gave me the platform to turn my technical skills into a real career.The training was completely industry-oriented and project-based. Their placement support was excellent, right from resume to final interview. The trainers were highly experienced and always ready to clear doubts. Working on real-time projects boosted my confidence tremendously.FATech truly bridges the gap between learning and industry expectations.", college: "JSPM College", course: "Mechanical" },

    ];
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <div className='bg-gray-100 pt-10 relative  mx-auto px-4'>
            <h2 className="font-bold mb-2 text-[#1B2124] text-xl text-center">
                Students ❤️ Future Advanced Technologies
            </h2>
            <p className='text-center mb-4'>Hear from our students</p>

            {/* Custom Left Arrow */}
            <div
                className="custom-swiper-button-prev absolute top-[83%] xl:top-[55%]  left-[5%] z-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
            >
                <ArrowLeftIcon className="h-6 w-6 text-gray-800" />
            </div>

            {/* Custom Right Arrow */}
            <div
                className="custom-swiper-button-next absolute top-[83%] xl:top-[55%] right-[5%] z-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
            >
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
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard {...review} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className='text-5xl md:text-5xl font-bold text-center text-black  pb-10 md:whitespace-nowrap' style={{ fontFamily: "'Butterfly Kids', cursive" }}><span className='text-4xl'>❤️</span>  Their words, Our pride.<span className='text-4xl '>✨</span>  </p>
        </div>
    );
}

export default Testimonial;
