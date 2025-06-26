import React from 'react';
import {
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCertificate,
  FaUsers,
  FaWallet,
  FaBullseye,
} from 'react-icons/fa';

const ContactAndGoals = () => {
  return (
    <div className="py-12 w-full flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row gap-8">
        {/* Goals Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 flex items-center gap-3">
            <FaBullseye className="text-blue-700 text-2xl" /> Our Goals
          </h2>
          <ul className="space-y-4 text-gray-800 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <FaLaptopCode className="text-blue-600 text-xl mt-1" />
              Deliver hands-on, industry-ready education.
            </li>
            <li className="flex items-start gap-3">
              <FaChalkboardTeacher className="text-blue-600 text-xl mt-1" />
              Provide expert mentoring from experienced trainers.
            </li>
            <li className="flex items-start gap-3">
              <FaCertificate className="text-blue-600 text-xl mt-1" />
              Offer certified programs to validate your skills.
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-blue-600 text-xl mt-1" />
              Build a strong, supportive learning community.
            </li>
            <li className="flex items-start gap-3">
              <FaWallet className="text-blue-600 text-xl mt-1" />
              Ensure affordable access to quality education.
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 flex items-center gap-3">
            <FaPhone className="text-blue-600 text-2xl" /> Connect With Us
          </h2>
          <div className="space-y-5 text-gray-700 text-base md:text-lg">
            <div className="flex items-center gap-3 break-all">
              <FaPhone className="text-blue-600 text-xl" />
              <a href="tel:+917720074666">+91 77200 74666</a>
            </div>
            <div className="flex items-center gap-3 break-all">
              <FaInstagram className="text-pink-600 text-xl" />
              <a href="https://instagram.com/futureadvancedtechnologies" target="_blank" rel="noreferrer">
                @futureadvancedtechnologies
              </a>
            </div>
            <div className="flex items-center gap-3 break-all">
              <FaFacebook className="text-blue-700 text-xl" />
              <a href="https://facebook.com/future_advanced_technologies" target="_blank" rel="noreferrer">
                @future_advanced_technologies
              </a>
            </div>
            <div className="flex items-center gap-3 break-all">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:futureadvancedtechnologies@gmail.com" target="_blank"> 
                futureadvancedtechnologies@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndGoals;
