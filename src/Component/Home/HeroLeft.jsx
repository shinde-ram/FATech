import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation.json'; // Ensure this is a .json Lottie file
import logo from '../../assets/LOGO.png'

function HeroLeft() {
    return (
        <div className="w-full bg-gray-100">
            <div className="flex flex-col-reverse md:flex-row md:pt-0 pt-10">
                {/* Left Content */}
                <div className="w-full h-auto md:w-[50%] bg-gray-100  md:h-[89vh] flex flex-col justify-center items-center px-6 md:px-10 py-10 md:py-0">
                <img src={logo} alt="logo fatech" className='max-w-64' />
                    <p className="text-xl md:text-2xl font-extrabold text-center tracking-wide pb-12 ">
                        <span className="text-black" style={{fontFamily:"'Henny Penny',cursive"}}>Education 🔶</span>{' '}
                        <span className=""  style={{fontFamily:"'Henny Penny',cursive"}}>Excellence 🔶</span>{' '}
                        <span className=""  style={{fontFamily:"'Henny Penny',cursive"}}>Employment</span>
                    </p>



                    <p className=" text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-[90%] sm:max-w-[85%] md:max-w-[80%] tracking-wide">
                        At <span className="font-bold text-blue-600">Future Advanced Technologies</span>, we offer
                        industry-focused training in <span className="font-medium">Mechanical Design</span>,{' '}
                        <span className="font-medium">CAD</span>, <span className="font-medium">Full Stack Development</span>,{' '}
                        <span className="font-medium">AI</span>, and <span className="font-medium">Prompt Engineering</span> to
                        make you job-ready and future-proof.
                    </p>
                </div>


                {/* Right Side (Lottie animation) */}
                <div className="w-full h-[50vh] md:w-[50%] md:h-[89vh] bg-gray-100 flex justify-center items-center">
                    <Lottie animationData={animationData} loop={true} className="w-full h-full md:w-[80%] md:h-[80%]" />
                </div>
            </div>
        </div>
    );
}

export default HeroLeft;
