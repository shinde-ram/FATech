import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

import successAnim from "../../assets/placement-animation.json";
import { companies } from '../../Data/Placement';
import { useNavigate } from 'react-router-dom';

export default function Placement() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        data-aos="fade-down"
        className="text-center py-10 bg-gradient-to-r from-blue-100 to-purple-100 border shadow-xl border-yellow-400"
      >
        <h1 className="text-4xl font-bold mb-2">Transforming Learning into Careers</h1>
        <p className="text-lg">Our students are placed in top companies across the country.</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          View Success Stories
        </button>
      </section>

      <section
        data-aos="fade-up"
        className="py-20 mb-5 px-6 bg-gray-50"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg mb-4 text-center pb-16">
          Top Recruiters <br /><span className='text-gray-500 text-xl'>That Believe in You</span>
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center text-center md:text-left space-y-6 relative z-10"
          >
            <div className="w-[60%] mx-aut md:mx-0">
              <Lottie animationData={successAnim} loop={true} />
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm shadow hover:scale-105 transition">💼 Internships</span>
              <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full font-semibold text-sm shadow hover:scale-105 transition">🧑‍💼 Placements</span>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-semibold text-sm shadow hover:scale-105 transition">🚀 MNC Offers</span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full font-semibold text-sm shadow hover:scale-105 transition">🏭 Core Jobs</span>
            </div>
          </div>

          {/* Right Side - Flip Cards */}
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-3 gap-4 md:gap-6"
          >
            {companies.map((company, i) => (
              <div
                key={i}
                className="group relative w-full h-28"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-360"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-md"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img src={company.src} alt={company.name} className="h-[50%] p-1 " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-aos="fade-up"
        className="text-center py-10 bg-gradient-to-r from-blue-100 via-green-300 to-purple-100 text-black border border-yellow-400"
      >
        <h2 className="text-3xl font-bold mb-4">Become the Next Success</h2>
        <p className="mb-6">Take the first step towards your dream job today!</p>
        <button
          className="px-8 py-2 bg-white text-blue-700 font-bold rounded-full hover:bg-purple-100 transition"
          onClick={() => navigate("/courses")}
        >
          Explore Courses
        </button>
      </section>
    </div>
  );
}
