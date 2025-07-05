import React from "react";
import { FaClock, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Map() {
    return (
        <div className="w-full px-4 py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">

                {/* Left: Map */}
                <div className="w-full md:w-[80%] rounded-3xl overflow-hidden  border border-gray-200">
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.592517077446!2d73.97889581983642!3d18.578630897329543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3069a2c0a71%3A0xe1f4fc966c5e85c!2sFuture%20Advanced%20Technologies!5e0!3m2!1sen!2sin!4v1751523351074!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[350px] md:h-[450px]"
                    ></iframe>
                </div>

                {/* Right: Info Section */}
                <div className="w-full md:w-1/2  rounded-3xl  p-8  flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-purple-600 mb-3">
                        <FaClock className="text-2xl" />
                        <h3 className="text-2xl font-bold">We're Open Daily</h3>
                    </div>
                    <p className="text-gray-700 text-lg font-medium mb-6">
                        🕘 <span className="font-semibold">Everyday, 9:00 AM – 9:00 PM</span>
                    </p>

                    <Link
                        to="/courseEnroll/BookVisit"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300"
                    >
                        <FaMapMarkedAlt />
                        Book a Visit
                    </Link>
                </div>
            </div>
        </div>
    );
}
