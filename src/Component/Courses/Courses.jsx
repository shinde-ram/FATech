import React from 'react';
import { Outlet } from 'react-router-dom';
import DepartmentSelector from './DepartmentSelector';

export default function Courses() {

  return (
    <div className="bg-blue-50 pt-5 md:pt-0 py-10">
      {/* 🎉 Offer banner */}
      <div className="w-full h-[5vh] bg-gradient-to-r from-green-400 to-green-400 flex items-center justify-center text-center mb-4">
        <p className="text-green-800 font-semibold text-sm sm:text-base">
          🎉 Visit our institute in person and get an <span className="underline underline-offset-4">extra discount</span> on selected courses!
        </p>
      </div>

      <DepartmentSelector />
      <Outlet />

    </div>
  );
}
