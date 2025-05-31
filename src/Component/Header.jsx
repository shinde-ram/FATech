import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { PiPhoneCallFill } from "react-icons/pi";

import wsp from '../assets/wsp.json'
import Lottie from 'lottie-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png'


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-gray-100 w-full max-h-[30vh] ">
            {/* Header Container */}
            <div className="flex flex-wrap items-center justify-evenly w-full   rounded-3xl">
                {/* <div className='absolute left-0 md:left-2'> */}
                {/* </div> */}
                {/* Left Side Name */}
                <div className="w-[70%] md:w-1/2 mb-2 flex justify-evenly items-center">
                    <div className='w-[20%] p-0 md:pt-2'>
                        <img src={logo} alt="Logo" className='h-full w-24  sm:w-24 md:w-32 ' />
                    </div>
                    <div className='w-80%'>
                        <p style={{ fontFamily: "'Emilys Candy', cursive" }} className=" p-0 md:px-4 font-bold text-md  md:text-2xl xl:text-3xl text-black text-center">
                            Future Advanced Technologies
                        </p>
                    </div>
                </div>

                {/* Right Side Buttons and Nav */}
                <div className="w-[30%] md:w-1/2 flex md:flex-row-reverse  justify-center md:justify-end items-center">
                    {/* WhatsApp & Call (Always Visible) */}
                    <div className="flex items-center justify-center md:gap-6 mr-4 w-[30%] md:w-[30%]">
                        <a
                            href="https://wa.me/918767074603"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                            title="WhatsApp"
                        >
                            {/* <span className='hidden md:flex'>Chat on Whatsapp</span> */}
                            <Lottie animationData={wsp} loop={true} className="w-18 md:w-22" />
                            <span className='relative left-2 bottom-4.5 font-bold hidden md:flex'>Whatsapp</span>


                        </a>
                        <a href="tel:+918767074603" className=" ">
                            <div className='p-3.5 text-md md:text-xl xl:text-3xl  text-white bg-green-500 rounded-full hover:scale-115 ease-in-out duration-300 hidden md:flex'>

                                <PiPhoneCallFill />
                            </div>
                            <span className='relative left-1 md:left-3 font-bold hidden md:flex'>Call</span>

                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex w-[40%] md:w-[60%] justify-evenly text-black">
                        <li className="transform-gpu transition-transform duration-300 hover:scale-105">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600  border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`} to={"/"}>Home</NavLink>
                        </li>
                        <li className="transform-gpu transition-transform duration-300 hover:scale-110">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600  border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`} to={"/courses"}>Courses</NavLink>
                        </li>
                        <li className="transform-gpu transition-transform duration-300 hover:scale-110">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600  border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`} to={"/about"}>About us</NavLink>
                        </li>
                        <li className="transform-gpu transition-transform duration-300 hover:scale-110">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600  border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`} to={"/gallery"}>Gallery</NavLink>
                        </li>
                    </ul>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="md:hidden w-[13%] text-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-black ">
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute right-2 top-17 w-[40%] sm:w-[20%] bg-white shadow-2xl z-10 flex flex-col items-center space-y-2 border border-cyan-600 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
                    }`}
            >
                <NavLink
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? 'border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`
                    }
                    to={"/"}
                >
                    Home
                </NavLink>

                <NavLink
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? 'border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`
                    }
                    to={"/courses"}
                >
                    Courses
                </NavLink>

                <NavLink
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? 'border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`
                    }
                    to={"/about"}
                >
                    About us
                </NavLink>

                <NavLink
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `${isActive ? 'border-b-2 border-yellow-800' : ''} font-semibold p-2 hover:text-yellow-600 ease-in-out duration-100`
                    }
                    to={"/gallery"}
                >
                    Gallery
                </NavLink>
            </div>

        </div>
    );
}

export default Header;
