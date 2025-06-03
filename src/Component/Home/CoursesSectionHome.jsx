import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CoursesCard from './CoursesCardHome';
import bg from '../../assets/courses-bg.jpg';
import mechanicalBg from '../../assets/mech.png';
import itBg from '../../assets/it.png';
import civilBg from '../../assets/civil.png';

function CoursesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const softwareByCategory = {
    Mechanical: {
      list: [
        'AutoCAD', 'SolidWorks', 'HyperMesh', 'CATIA',
        'Ansys', 'NX CAD', 'Creo', 'MATLAB',
      ],
      bg: mechanicalBg,
    },
    Civil: {
      list: [
        'Revit', 'STAAD Pro', 'AutoCAD Civil 3D', 'ETABS',
        'SketchUp', '3ds Max', 'MS Project', 'Primavera',
      ],
      bg: civilBg,
    },
    IT_CS: {
      list: [
        'C', 'Data Structures', 'Full Stack Development', 'Python',
        'C++', 'Java', 'JavaScript', 'React', 'Node.js', 'SQL', 'Machine Learning',
      ],
      bg: itBg,
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
        <div className="relative" data-aos="fade-left">
          <div>
            <h2
              className="text-6xl font-bold mb-10 text-blue-600"
              style={{ fontFamily: "'Emilys Candy', cursive" }}
            >
              Our Courses
            </h2>
          </div>
          <div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {Object.entries(softwareByCategory).map(([category, { list, bg }]) => (
              <div key={category} data-aos="zoom-in-up" data-aos-delay="300">
                <CoursesCard
                  category={category}
                  list={list.slice(0, 3)}
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
