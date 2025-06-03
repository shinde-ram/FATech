import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCard from './AnimatedCard';

import trained from '../../assets/trained-student-icon.png';
import placed from '../../assets/student-placed-icon.png';
import average from '../../assets/average-package-icon.png';
import company from '../../assets/company.png';
import bg from '../../assets/success.jpg';
// import video from '../../assets/success-stories.gif';
import success_icon from '../../assets/success-icon.jpg';

function NumberBox() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            className="w-full py-10 px-4 md:px-10 bg-cover bg-center"
            // style={{ backgroundImage: `url(${bg})` }}
        >
            <h2
                className="text-4xl md:text-5xl font-bold text-center text-black mb-10"
                style={{ fontFamily: "'Emilys Candy', cursive" }}
                data-aos="fade-down"
            >
                Success That Speaks
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Cards */}
                <div
                    className="grid grid-cols-2 gap-5 w-full md:w-[50%]"
                    data-aos="fade-right"
                >
                    <div className="">
                        <AnimatedCard
                            bgColor="bg-green-200"
                            digits={1500}
                            label="Student Trained"
                            imageUrl={trained}
                        />
                    </div>
                    <div className="">
                        <AnimatedCard
                            bgColor="bg-blue-200"
                            digits={1000}
                            label="Student Placed"
                            imageUrl={placed}
                        />
                    </div>
                    <div className="">
                        <AnimatedCard
                            bgColor="bg-yellow-200"
                            digits="4L"
                            label="Average Package"
                            imageUrl={average}
                        />
                    </div>
                    <div className="">
                        <AnimatedCard
                            bgColor="bg-purple-200"
                            digits={30}
                            label="Hiring Partners"
                            imageUrl={company}
                        />
                    </div>
                </div>

                {/* Image */}
                <div
                    className="w-full md:w-[40%] flex justify-center"
                    data-aos="fade-left"
                >
                    <img
                        src={success_icon}
                        alt="success"
                        className="max-w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default NumberBox;
