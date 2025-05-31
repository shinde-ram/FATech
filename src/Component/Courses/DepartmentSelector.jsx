import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const departments = ['All Departments', 'Mechanical', 'IT_CS', 'Civil'];

export default function DepartmentSelector() {
  const navigate = useNavigate();
  const { department } = useParams();

  return (
    <div className='flex flex-wrap justify-start gap-2 md:gap-4 ms-2 md:ms-10 mb-8'>
      {departments.map((dept) => {
        const routePath = dept === 'All Departments' ? '/courses' : `/courses/${dept}`;
        const isActive =
          (!department && dept === 'All Departments') || department === dept;

        return (
          <button
            key={dept}
            onClick={() => navigate(routePath)}
            className={`px-3 md:px-5 py-2 rounded-full transition font-medium border ${
              isActive
                ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100'
            }`}
          >
            {dept}
          </button>
        );
      })}
    </div>
  );
}
