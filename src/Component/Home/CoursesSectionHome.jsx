import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CoursesCard from './CoursesCardHome';
import mechanicalBg from '../../assets/mech.png';
import itBg from '../../assets/it.png';
import civilBg from '../../assets/civil.png';
import entc from "../../assets/entc.png"

function CoursesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const softwareByCategory = {
    Mechanical: {
      list: [
        'AutoCAD', 'SolidWorks','Ansys', 'HyperMesh'
      ],
      bg: mechanicalBg,
    },
    Civil: {
      list: [
        'Revit', 'STAAD Pro', 'AutoCAD Civil 3D', 
      ],
      bg: civilBg,
    },
    IT_CS: {
      list: [
         'Java', 'Python', 'Full Stack Development'
      ],
      bg: itBg,
    },
     ENTC: {
      list: [
         'AutoCAD', 'Creo Cabling', 'Wiring & Harness'
      ],
      bg: entc,
    },
  };

  return (
    <div>
      <section
        id="about"
        className="relative py-12 text-center px-6 bg-contain bg-center bg-gray-100"
      >
        {/* Overlay */}
        <div className="absolute inset-0 opacity-10"></div>

        {/* Content */}
        <div className="relative w-[100%] flex flex-col justify-center items-center" data-aos="fade-left">
          <div>
            <h2
              className="text-6xl font-bold mb-10 text-blue-600"
              style={{ fontFamily: "'Emilys Candy', cursive" }}
            >
              Our Courses
            </h2>
          </div>
          <div
            className="grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 3xl:grid-cols-3 w-[100%] sm:w-[70%] md:w-[100%] lg:w-[90%] xl:w-[70%]  "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {Object.entries(softwareByCategory).map(([category, { list, bg }]) => (
              <div key={category} data-aos="zoom-in-up" data-aos-delay="300">
                <CoursesCard
                  category={category}
                  list={list}
                  bg={bg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesSection;
