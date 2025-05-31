import React from 'react';

function CourseCard({ course, onView }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <h3 className="text-lg font-bold text-blue-800">{course.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{course.description}</p>
      <button
        onClick={() => onView(course.id)}
        className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
      >
        View Details →
      </button>
    </div>
  );
}

export default CourseCard;
