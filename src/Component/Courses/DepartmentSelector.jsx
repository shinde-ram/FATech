import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const departments = ['All', 'Mechanical', 'IT_CS', 'Civil', 'ENTc'];

export default function DepartmentSelector() {
  const navigate = useNavigate();
  const { department } = useParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='flex flex-col flex-wrap justify-start gap-2 md:gap-4 ms-2 md:ms-2 mb-8'>
      {/* Back Button */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out
        ${scrolled ? "top-2 left-2" : "top-[16%] left-2 md:left-2"}`}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-black font-semibold bg-blue-100 px-3 py-1 rounded-full shadow"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      {/* Department Buttons */}
      <div className='flex gap-3 flex-wrap'>
        {departments.map((dept) => {
          const routePath = dept === 'All' ? '/courses' : `/courses/${dept}`;
          const isActive = (!department && dept === 'All') || department === dept;

          return (
            <button
              key={dept}
              onClick={() => {
                navigate(routePath);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-2 mt-3 md:px-5 py-2 rounded-full transition text-sm font-bold md:text-lg border whitespace-nowrap
                ${isActive
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100'
                }`}
            >
              {dept}
            </button>
          );
        })}
      </div>
    </div>
  );
}
