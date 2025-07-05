import React, { useEffect, useState } from 'react';
import { allCourses } from '../../Data/Courses';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DepartmentCourses() {
  const { department: routeDepartment } = useParams();
  const department = routeDepartment || 'All';
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  // ✅ Init AOS once on component mount
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const selectedCourses =
      !department || department === 'All'
        ? Object.values(allCourses).flat()

        : allCourses[department] || [];

    setCourses(selectedCourses);
    setLoading(true);

    if (selectedCourses.length === 0) {
      setLoading(false);
      return;
    }

    // ✅ Preload images and refresh AOS when done
    let loaded = 0;
    selectedCourses.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loaded += 1;
        if (loaded === selectedCourses.length) {
          AOS.refresh(); // ✅ Trigger AOS after all images loaded
          setLoading(false);
        }
      };
    });

    // ✅ Scroll to top on department change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [department]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div key={department} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-5">
      {courses.map((course, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-offset="200"
          className="relative bg-gradient-to-r from-amber-100 to-blue-100 rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full bg-fuchsia-50 p-2 h-48 object-cover"
          />
          <Link to={`/courses/${department}/${course.title}`}>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h2>
              <p className="text-gray-600 text-sm mb-2 line-clamp-3">{course.description}</p>
              <p className="text-sm text-blue-800">Duration: {course.duration}</p>
              <button className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md transition duration-300">
                View Details →
              </button>
            </div>
          </Link>
          <div className="absolute right-6 bottom-4 bg-red-400 px-3 rounded-md text-white shadow-md shadow-black">
            <span>{course.dis}% Off</span>
          </div>
        </div>
      ))}
    </div>
  );
}
