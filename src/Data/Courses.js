import fullstack from '../assets/courses-thumbnail/full-stack-thumbnail.webp'
import python from '../assets/courses-thumbnail/python-thumbnail.webp'
import dsa from '../assets/courses-thumbnail/dsa-thumbnail.webp'
import datascience from '../assets/courses-thumbnail/data-science-thumbnail.jpg'
import java from '../assets/courses-thumbnail/java-thumbnail.jpg'
import basiclanguages from '../assets/courses-thumbnail/basic-languages.avif'

import autocad from '../assets/courses-thumbnail/autocad-thumbnail.webp'
import catia from '../assets/courses-thumbnail/catia-thumbnail.png'
import solidwork from '../assets/courses-thumbnail/solidworks-thumbnail.jpg'
import creo from '../assets/courses-thumbnail/creo-thumbnail.webp'

import revit from '../assets/courses-thumbnail/revit-thumbnail.webp'
import autocivil from '../assets/courses-thumbnail/autocad-civil-thumbnail.webp'
import sketchup from '../assets/courses-thumbnail/sketchup-thumbnail.webp'


export const allCourses = {
  Mechanical: [
    {
      title: "AutoCAD",
      description:
        "Learn the fundamentals of AutoCAD tailored for mechanical engineering. Master 2D and 3D drafting, modeling, dimensioning, and mechanical design principles to create precise engineering drawings and blueprints.",
      duration: "3 Months",
      image: autocad, // make sure to import or define the 'autocad' image
      dis: 20,
      price: 8000,
      offerPrice: 5999,
    },
    {
      title: "CATIA",
      description:
        "Master CATIA software for mechanical design and engineering. Learn 3D modeling, assembly design, drafting, surface modeling, and simulation techniques used in the automotive, aerospace, and manufacturing industries.",
      duration: "4 Months",
      image: catia, // make sure to import or define the 'catia' image
      dis: 25,
      price: 15000,
      offerPrice: 11999,
    },
    {
      title: "SolidWorks 3D Design",
      description:
        "Learn to build and simulate 3D models for real-world mechanical components. This course covers parametric modeling, simulation, and motion study. Develop parts, assemblies, and detailed engineering drawings. Perfect for students looking to enter the manufacturing and product design sector.",
      duration: "8 weeks",
      image: solidwork,
      dis: 35,
      price: 9000,
      offerPrice: 5850,
    },
    {
      title: "Creo",
      description:
        "Dive deep into Creo for mechanical product design and engineering. From sketches to full assemblies and sheet metal design, this course includes real-life engineering workflows. Learn the tools used by professionals in product development and automotive sectors.",
      duration: "5 weeks",
      image: creo,
      dis: 25,
      price: 8000,
      offerPrice: 6000,
    },
  ],

  IT_CS: [
    {
      title: "Full Stack Web Development",
      description:
        "Become a full-stack developer with HTML, CSS, JavaScript, React, Node.js, Spring Boot, and SQL/NoSQL. Build complete responsive websites and backend services. Work on capstone projects with deployment. Learn API creation, frontend-backend integration, and project management techniques.",
      duration: "4/6 Months",
      image: fullstack,
      dis: 30,
      price: 27500,
      offerPrice: 19999,
    },
    {
      title: "Python Programming",
      description:
        "From variables to automation — complete beginner to advanced Python. Learn OOP, file handling, automation scripts, data visualization, and web scraping. Perfect for aspiring developers, data scientists, and AI enthusiasts.",
      duration: "3 Months",
      image: python,
      dis: 35,
      price: 27700,
      offerPrice: 17999,
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Core DSA concepts with real-world coding problems and solutions. Covers arrays, linked lists, stacks, queues, trees, sorting, and searching. Master problem-solving for interviews and competitive coding.",
      duration: "8 weeks",
      image: dsa,
      dis: 35,
      price: 12000,
      offerPrice: 7800,
    },
    {
      title: "Data Science",
      description:
        "Master data science with Python, statistics, data visualization, machine learning, and deep learning. Learn tools like Pandas, NumPy, Scikit-learn, Matplotlib, and TensorFlow. Work on real-world datasets, build predictive models, and deploy ML projects. Includes capstone projects and portfolio guidance.",
      duration: "5/6 Months",
      image: datascience, // Make sure to import or define 'datascience' image
      dis: 35,
      price: 30000,
      offerPrice: 19499,
    },
    {
      title: "Advanced Java Programming",
      description:
        "Learn core and advanced Java programming, including OOP, collections, exception handling, JDBC, Servlets, JSP, and Spring Boot. Build console and web-based applications with real-world use cases. Develop RESTful APIs and understand deployment using tools like Maven and Git.",
      duration: "4/5 Months",
      image: java, // make sure to import or define the 'java' image
      dis: 25,
      price: 25000,
      offerPrice: 17999,
    },
    {
      title: "Programming Languages",
      description:
        "Pick any one programming basics course: C/C++, Java, or Python. Each course costs individually and covers fundamental programming concepts with hands-on practice.",
      duration: "2 Months",
      image: basiclanguages, // make sure to import or define the 'java' image
      dis: 40,
      price: 10000,
      offerPrice: 5999,
    },


  ],

  Civil: [
    {
      title: "Revit",
      description:
        "Hands-on training in building information modeling using Revit. Design structures, analyze layouts, and generate accurate 3D visualizations. Useful for civil engineers, architects, and designers.",
      duration: "6 weeks",
      image: revit,
      dis: 30,
      price: 10000,
      offerPrice: 7000,
    },
    {
      title: "AutoCAD for Civil",
      description:
        "Learn civil drafting, planning, and layout using AutoCAD. Focused modules on elevation design, contour mapping, and site planning. Practice with real-world templates and design workflows.",
      duration: "5 weeks",
      image: autocivil,
      dis: 35,
      price: 8000,
      offerPrice: 5200,
    },
    {
      title: "SketchUp",
      description:
        "Learn to model, render, and present architectural designs using SketchUp. Covers 3D modeling fundamentals, rendering plugins, and layout presentation. Ideal for beginners and intermediate civil or interior designers.",
      duration: "4 weeks",
      image: sketchup,
      dis: 30,
      price: 6000,
      offerPrice: 4200,
    },
  ],
};
