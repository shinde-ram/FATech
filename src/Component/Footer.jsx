import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Logo & About */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Future Advanced Technologies</h3>
          <p className="text-gray-400">
            Empowering students with industry-ready skills through hands-on training and real-world experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/about" className="hover:text-white">About us</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
          </ul>
        </div>

        {/* Top Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Top Courses</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href={`/courses/Mechanical`} className="hover:text-white">Mechanical Design (CAD/CAEs)</a></li>
            <li><a href={`/courses/IT_CS/Full%20Stack%20Web%20Development`} className="hover:text-white">Full Stack</a></li>
            <li><a href="/courses/Civil" className="hover:text-white">Civil Engineering (AutoCAD, Revit)</a></li>
            <li><a href={`/courses/IT_CS/Data%20Structures%20&%20Algorithms`} className="hover:text-white">Data Structure and Alogorithm</a></li>
            <li><a href="/courses/IT_CS/Advanced%20Python%20Programming" className="hover:text-white">Python with AI</a></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400">Jay Anand complex ,3rd floor fadai chowk, above muthoot finance, Wagholi, Pune</p>
          <p className="text-gray-400 mt-2">Email: futureadvancedtechnologies@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/future_advanced_technologies" target="_blank"><Facebook className="text-gray-300 hover:text-white" /></a>
           
            <a href="https://instagram.com/futureadvancedtechnologies" target="_blank"><Instagram className="text-gray-300 hover:text-white " /></a>
            <a href="mailto:futureadvancedtechnologies@gmail.com" target="_blank"><Mail className="text-gray-300 hover:text-white" /></a>
          </div>
        </div>
      </div>


      <div className="text-center text-white text-xs mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Future Advanced Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
