import React from 'react';
import HeroSection from './HeroSection';
import ContactAndGoals from './ContactAndGoals';
import Feature from '../Home/Feature';
import Number from '../Home/NumberBox';
import Placement from "../Home/Placement"
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-[5vh] bg-gradient-to-r from-green-400 to-green-400 flex items-center justify-center text-center mb-4">
                <p className="text-green-800 font-semibold text-sm sm:text-base">
                    <span className='text-blue-800'> Future Advanced Technologies  </span>is a Software Training and Placements Institute
                </p>
            </div>
            <HeroSection />
            <ContactAndGoals />
            <Feature />

            {/* Call to Action */}
            <div className="text-center my-6">
                <h className="text-2xl font-bold text-blue-800 mb-4">🚀 Ready to Grow with Us?</h>
                <p className="text-gray-700 mb-6">
                    Join thousands of learners who have transformed their careers with us.
                </p>
                <button onClick={()=>navigate("/courses")} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Explore Courses
                </button>
            </div>
            <Number />
            <Placement />
        </>

    );
};

export default AboutUs;
