import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import assistance from "../../assets/assistance-icon.png"
import Curriculum from "../../assets/curriculam.png"
import faculty from "../../assets/faculty.png"
import lab from "../../assets/lab.png"
import skill from "../../assets/skill.png"
import project from "../../assets/project.png"

const features = [
    {
        icon: assistance,
        title: "100% Placement Assistance",
        description: "We provide end-to-end support to help students land their dream jobs in top companies.",
    },
    {
        icon: Curriculum,
        title: "Industry-Relevant Curriculum",
        description: "Courses designed with input from industry experts to keep you job-ready from day one.",
    },
    {
        icon: faculty,
        title: "Experienced Faculty",
        description: "Our educators come with real-world experience and a passion for teaching.",
    },
    {
        icon: lab,
        title: "State-of-the-Art Labs",
        description: "Hands-on experience with the latest tools and technologies in fully-equipped labs.",
    },
    {
        icon: skill,
        title: "Soft Skills Training",
        description: "Boost your confidence with communication, interview, and personality development training.",
    },
    {
        icon: project,
        title: "Live Projects & Internships",
        description: "Gain real-world exposure with projects and internships partnered with industry leaders.",
    },
];


const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-blue-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
          {features.map((feature, index) => (
  <div
    key={index}
    data-aos="fade-up"
className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 "
  >
    <img src={feature.icon} alt={feature.title} className="w-10 h-10 text-black mb-4 mx-auto" />
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Feature;
