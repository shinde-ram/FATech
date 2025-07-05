import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import { ArrowUp } from 'lucide-react'; // optional icon


import HeroSection from './HeroSection';
import ContactAndGoals from './ContactAndGoals';
import Feature from '../Home/Feature';
import Number from '../Home/NumberBox';
import Placement from "../Home/Placement";
import { useNavigate } from 'react-router-dom';
import Map from './Map';

const AboutUs = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once - while scrolling down
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smooth scroll
        });
    };

    return (
        <>
            <div
                data-aos="fade-down"
                className="w-full h-[5vh] bg-gradient-to-r from-green-400 to-green-400 flex items-center justify-center text-center mb-4"
            >
                <p className="text-green-800 font-semibold text-sm sm:text-base">
                    <span className='text-blue-800'> Future Advanced Technologies </span>is a Software Training and Placements Institute
                </p>
            </div>


            <button
                onClick={scrollToTop}
                className="fixed bottom-5 left-3 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                <ArrowUp className="w-5 h-5" />
            </button>


            <div data-aos="fade-up">
                <HeroSection />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
                <ContactAndGoals />
            </div>

            <div data-aos="fade-up" className="flex flex-col md:flex-row w-full gap-6">
                <Map/>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
                <Feature />
            </div>

            {/* Call to Action */}
            <div data-aos="zoom-in" className="text-center my-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">🚀 Ready to Grow with Us?</h2>
                <p className="text-gray-700 mb-6">
                    Join thousands of learners who have transformed their careers with us.
                </p>
                <button
                    onClick={() => navigate("/courses")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                    Explore Courses
                </button>
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
                <Number />
            </div>

            <div data-aos="fade-up" data-aos-delay="800">
                <Placement />
            </div>
        </>
    );
};

export default AboutUs;
