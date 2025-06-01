import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import leftside from '../assets/registeration.jpg';
import bg from '../assets/form-bg.jpg';
import { databases } from '../../appwriteConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CourseEnrollForm = () => {
    const navigate = useNavigate();
    const { course } = useParams();
    const decodedCourseTitle = decodeURIComponent(course).replace(/-/g, ' ');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        city_name: '',
        class_degree: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullData = { ...formData, course: decodedCourseTitle };

        try {
            const response = await databases.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                "unique()",
                fullData
            );
            toast.success("🎉 You have successfully enrolled!");
            setTimeout(() => {
            navigate("/courses");
        }, 3000);
        } catch (error) {
            console.log(error);
            toast.error("❌ Please Try Again");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10" style={{ backgroundImage: `url(${bg})` }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            <div className="relative z-10 w-full max-w-6xl bg-white bg-opacity-90 shadow-2xl rounded-xl flex flex-col md:flex-row justify-center items-center overflow-hidden">

                {/* Left Side Illustration with Green BG */}
                <div className="hidden md:flex md:w-1/2  justify-center items-center p-4">
                    <img src={leftside} alt="Illustration" className="h-full w-[80%] object-contain" />
                </div>

                <div className="absolute top-0 py-1 w-full bg-blue-300  text-center text-black font-medium  text-lg">
                    After filling this form, our team will reach you
                </div>
                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 mt-5">

                    <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                        Enroll for <span className="text-green-600">{decodedCourseTitle}</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            name="college"
                            placeholder="College"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            name="city_name"
                            placeholder="City"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            name="class_degree"
                            placeholder="Class / Degree"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="text"
                            value={decodedCourseTitle}
                            readOnly
                            className="w-full px-4 py-3 bg-gray-100 rounded border border-gray-300 cursor-not-allowed"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </div>
    );
};

export default CourseEnrollForm;
