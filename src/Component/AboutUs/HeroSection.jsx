import React from 'react';
import { FaClock, FaGraduationCap, FaBullseye, FaCogs } from 'react-icons/fa';
import logo from '../../assets/LOGO.png';

const HeroSection = () => {
    return (
        <div className='pt-16 w-full flex justify-center  items-center'>
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16  justify-center w-[90%]  ">
            <div className="md:w-1/2 flex flex-col justify-center items-center">
                <img src={logo} alt="Who We Are" className="w-[80%] md:w-[70%]" />
                <p className="text-md md:text-2xl font-extrabold text-center tracking-wide pb-12">
                    <span className="text-black" style={{ fontFamily: "'Henny Penny', cursive" }}>Education 🔶</span>{' '}
                    <span style={{ fontFamily: "'Henny Penny', cursive" }}>Excellence 🔶</span>{' '}
                    <span style={{ fontFamily: "'Henny Penny', cursive" }}>Employment</span>
                </p>
            </div>
            <div className="md:w-1/2 text-gray-700 text-sm md:text-lg">
                 <p>
                        With <span className="font-semibold text-blue-700">10+ years</span> of experience, Future Advanced Technologies has been at the forefront of delivering practical, industry-aligned training across <strong>Mechanical</strong>, <strong>Civil</strong>, and <strong>Computer Science & IT</strong> fields. We are not just a training institute — we are a <strong>career accelerator</strong>.
                    </p>
                    <p className='leading-relaxed pt-4'>
                        Founded with the vision of empowering technical education, our institute has trained thousands of students and helped them successfully transition into the workforce. We focus on combining strong theoretical foundations with real-world skills demanded by today’s industries.
                    </p>
                    <p className='leading-relaxed pt-4'>
                        Our dedicated team includes <strong>industry professionals</strong>, <strong>certified trainers</strong>, and domain experts with years of teaching and real-world experience. They bring cutting-edge knowledge and mentor students to meet professional expectations.
                    </p>
            </div>
        </div>
                </div>

    );
};

export default HeroSection;
