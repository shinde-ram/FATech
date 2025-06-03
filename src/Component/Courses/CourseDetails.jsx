import { useNavigate, useParams } from 'react-router-dom';
import { allCourses } from '../../Data/Courses';
import React from 'react';
import { Syllabus } from '../../Data/Syllabus'; // Adjust path
import { ArrowLeft } from 'lucide-react';


const CourseDetails = () => {
  const { department, title } = useParams();

  const navigate = useNavigate();

  const handleEnrollClick = () => {
    const courseParam = encodeURIComponent(course.title.replace(/\s+/g, '-'));
    navigate(`/courseEnroll/${courseParam}`);
  };

  const courses = department === "All Departments"
    ? Object.entries(allCourses).flatMap(([dept, courseList]) =>
      courseList.map(course => ({ ...course, department: dept }))
    )
    : allCourses[department] || [];


  const course = courses.find(
    c => c.title.toLowerCase() === title.toLowerCase()
  );

  if (!course) return <div className="text-center text-red-500 mt-10">❌ Course not found</div>;

  const syllabus = Syllabus[course.department ? course.department : department]?.[course.title] || [];


  return (
    <>

      <div className="w-full h-[5vh] bg-gradient-to-r from-green-400 to-green-400 flex items-center justify-center text-center mb-4">
        <p className="text-green-800 font-semibold text-sm sm:text-base">
          🎉 Visit our institute in person and get an <span className="underline underline-offset-4">extra discount</span> on selected courses!
        </p>
      </div>
      <div className="sticky top-2 ms:top-[5vh] ms-2 md:ms-5 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-black font-semibold bg-blue-100 px-3 py-1 rounded-full shadow"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto py-10">
        {/* Top Section: Image and Info */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Course Image */}
          <div className="md:w-1/2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[50vh] object-cover rounded-xl shadow-lg shadow-gray-500"
            />
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-800 mb-3">{course.title}</h1>
            <p className="text-gray-700 mb-5 leading-relaxed">{course.description}</p>

            <ul className="text-gray-700 space-y-2 list-none">
              <li><strong>🕒 Duration:</strong> {course.duration}</li>
              <li>
                <strong>💰 Price:</strong> ₹<s>{course.price}</s> →
                <span className="text-green-600 font-semibold ml-1">₹{course.offerPrice}</span>
                <span className="text-sm text-gray-500">({course.dis}% off)</span>
              </li>
              <li><strong>📅 Mode:</strong> Online / Offline</li>
              <li><strong>📈 Level:</strong> Beginner to Advanced</li>
            </ul>

            <button onClick={handleEnrollClick} className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition">
              🚀 Enroll Now
            </button>
          </div>
        </div>

        {syllabus && (
          <div className="mt-12 flex flex-col md:flex-row-reverse gap-6 w-full md:w-[100%] mx-auto">
            {/* Combined What You’ll Learn + What Will You Get (right on md+, below on small) */}
            <div className="flex flex-col w-full md:w-1/2 gap-6 order-3 md:order-2">
              {/* What You’ll Learn */}
              <div className="bg-blue-100 rounded-xl py-6 md:p-6 shadow-sm border border-blue-200">
                <h2 className="text-2xl font-bold text-blue-800 mb-5 flex items-center gap-2">
                  📚 What You’ll Learn
                </h2>
                <ul className="list-none list-inside text-gray-800 space-y-3 pl-2">
                  <li>🛠️ Master industry-standard tools and workflows used by professionals</li>
                  <li>🌍 Work on real-world, hands-on projects to boost your portfolio</li>
                  <li>💡 Build deep technical understanding with practical examples</li>
                  <li>💬 Improve problem-solving and debugging skills</li>
                  <li>🎯 Learn how to approach technical interviews with confidence</li>
                  <li>📜 Prepare for certifications with curated resources</li>
                  <li>🤝 Get post-course support and mentorship to guide your career</li>
                  <li>🚀 Boost your job-readiness with resume and LinkedIn tips</li>
                  <li>📈 Stay updated with the latest trends in the field</li>
                </ul>
              </div>

              {/* What Will You Get */}
              <div className="bg-green-50 rounded-xl py-6 md:p-6 border border-green-200 shadow-sm">
                <h2 className="text-2xl font-bold text-green-800 mb-5 flex items-center gap-2">
                  🎁 What Will You Get
                </h2>
                <ul className="list-none list-inside text-gray-800 space-y-3 pl-2">
                  <li>📜 Certificate of Completion to showcase your achievement</li>
                  <li>💻 Hands-on Software Knowledge for real-world tools</li>
                  <li>🏭 Industrial Project Experience to strengthen your portfolio</li>
                </ul>
              </div>
            </div>

            {/* Syllabus Section (left on md+, above What You’ll Learn on small) */}
            <div className=" w-full md:w-1/2 ">
              <div className='bg-green-100 rounded-xl py-6 md:p-6  order-2 md:order-1 flex flex-col'>

                <h2 className="text-2xl font-bold text-blue-800 mb-4">📝 Short Syllabus</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                  {syllabus.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                {/* Syllabus Info Note */}
                <div className="bg-red-100 border border-red-300 text-yellow-800 p-4 rounded-xl my-6 text-sm md:text-base">
                  📌 <strong>Note:</strong> This is a basic reference syllabus. Due to confidentiality, we do not provide a full syllabus online. For a detailed syllabus, please <span className="underline text-blue-600 cursor-pointer hover:text-blue-800">visit us in person</span> or contact our team directly.
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );

};

export default CourseDetails;
