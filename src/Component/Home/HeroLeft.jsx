import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation.json';
import logo from '../../assets/LOGO.png';

function HeroLeft() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col-reverse lg:flex-row md:pt-0 ">
        <div
          className="w-full h-[90vh] lg:w-[50%] bg-gray-100 md:h-[89vh] flex flex-col justify-center  items-center px-6 md:px-10 py-10 md:py-0"
          data-aos="fade-up"
        >
          <img src={logo} alt="logo fatech" className="max-w-64" />
          <p
            className="text-md sm:text-xl md:text-2xl font-extrabold text-center tracking-wide pb-12"
            style={{ fontFamily: "'Henny Penny', cursive" }}
          >
            <span className="text-black">Education 🔶</span>{' '}
            <span>Excellence 🔶</span>{' '}
            <span>Employment</span>
          </p>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto tracking-wide">
            At <span className="font-semibold text-blue-600">Future Advanced Technologies</span>, we provide industry-focused training in
            <span className="font-medium"> Mechanical Design</span>,
            <span className="font-medium"> Civil CAD</span>,
            <span className="font-medium"> Electrical & ENTC</span>,
            <span className="font-medium"> IT & Computer Science</span>, and
            <span className="font-medium"> Artificial Intelligence.</span>
          </p>

        </div>

        <div
          className="w-full h-[50vh] md:w-[50%] md:h-[89vh] bg-gray-100  justify-center items-center hidden lg:flex"
          data-aos="fade-left"
        >
          <Lottie animationData={animationData} loop={true} className="w-full h-full md:w-[80%] md:h-[80%]" />
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
