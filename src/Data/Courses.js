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
import ugnx from '../assets/courses-thumbnail/ug-nx-cad.jpg'
import hypermesh from '../assets/courses-thumbnail/hypermesh-thumbnail.webp'
import ansys from '../assets/courses-thumbnail/ansys-thumbnail.png'

import revit from '../assets/courses-thumbnail/revit-thumbnail.webp'
import autocivil from '../assets/courses-thumbnail/autocad-civil-thumbnail.webp'
import sketchup from '../assets/courses-thumbnail/sketchup-thumbnail.webp'
import twinmotion from '../assets/courses-thumbnail/twinmotion-thumbnail.webp'
import staddpro from '../assets/courses-thumbnail/staad-pro-thumbnail.webp'
import etabs from '../assets/courses-thumbnail/etabs-thumbnail.png'
import lumion from '../assets/courses-thumbnail/lumion-thumbnail.jpg'

import elect_autocad from '../assets/courses-thumbnail/autocad-electrical.jpg'
import wiring_harness from '../assets/courses-thumbnail/wiring-harness.png'
import creo_cabling from '../assets/courses-thumbnail/creo-cabling.webp'
import embedded_system from '../assets/courses-thumbnail/embedded-system.webp'
import hil_testing from '../assets/courses-thumbnail/hil-testing.webp'
import iot from '../assets/courses-thumbnail/iot.webp'




export const allCourses = {
  Mechanical: [
    {
      title: "AutoCAD",
      description:
        "Learn the fundamentals of AutoCAD tailored for mechanical engineering. Master 2D and 3D drafting, modeling, dimensioning, and mechanical design principles to create precise engineering drawings and blueprints.",
      duration: "3 Months",
      image: autocad, // make sure to import or define the 'autocad' image
         dis: 20,
      price: 8749,
      offerPrice: 6999,
    },
    {
      title: "CATIA",
      description:
        "Master CATIA software for mechanical design and engineering. Learn 3D modeling, assembly design, drafting, surface modeling, and simulation techniques used in the automotive, aerospace, and manufacturing industries.",
      duration: "4 Months",
      image: catia, // make sure to import or define the 'catia' image
      title: "CATIA",
      dis: 25,
      price: 19999,
      offerPrice: 14999,
    },
    {
      title: "SolidWorks 3D Design",
      description:
        "Learn to build and simulate 3D models for real-world mechanical components. This course covers parametric modeling, simulation, and motion study. Develop parts, assemblies, and detailed engineering drawings. Perfect for students looking to enter the manufacturing and product design sector.",
      duration: "8 weeks",
      image: solidwork,
         dis: 35,
      price: 23076,
      offerPrice: 14999,
    },
    {
      title: "Creo",
      description:
        "Dive deep into Creo for mechanical product design and engineering. From sketches to full assemblies and sheet metal design, this course includes real-life engineering workflows. Learn the tools used by professionals in product development and automotive sectors.",
      duration: "5 weeks",
      image: creo,
        dis: 25,
      price: 19999,
      offerPrice: 14999,
    },
    {
      title: "UG NX CAD",
      description:
        "Master Siemens NX for 3D modeling, assemblies, drafting, and sheet metal design. This course is tailored for mechanical engineers and includes real-world industrial projects used in automotive and manufacturing design workflows.",
      duration: "5 weeks",
      image: ugnx, // replace 'ugnx' with your actual image import or path
           title: "UG NX CAD",
      dis: 25,
      price: 23999,
      offerPrice: 17999,
    },
    {
      title: "HyperMesh",
      description:
        "Learn HyperMesh for high-performance finite element preprocessing. This course covers geometry cleanup, meshing techniques, 1D/2D/3D elements, and model setup for structural, thermal, and crash analysis—widely used in the automotive and aerospace industries.",
      duration: "5 weeks",
      image: hypermesh, 
        dis: 25,
      price: 26666,
      offerPrice: 19999,
    },
    {
      title: "ANSYS",
      description:
        "Master ANSYS Workbench for structural, thermal, and modal analysis. This course includes geometry import, meshing, boundary condition setup, and result interpretation, all aligned with real-world engineering simulations used in industries like automotive and aerospace.",
      duration: "5 weeks",
      image: ansys, // Replace with your actual image import or path
        dis: 25,
      price: 26666,
      offerPrice: 19999,
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
      price: 38570,
      offerPrice: 26999,
    },
    {
      title: "Advanced Python Programming",
      description:
        "From variables to automation — complete beginner to advanced Python. Learn OOP, file handling, automation scripts, data visualization, and web scraping. Perfect for aspiring developers, data scientists, and AI enthusiasts.",
      duration: "3 Months",
      image: python,
      dis: 35,
      price: 38460,
      offerPrice: 24999,
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Core DSA concepts with real-world coding problems and solutions. Covers arrays, linked lists, stacks, queues, trees, sorting, and searching. Master problem-solving for interviews and competitive coding.",
      duration: "8 weeks",
      image: dsa,
      dis: 35,
      price: 15384,
      offerPrice: 9999,
    },
    {
      title: "Data Science",
      description:
        "Master data science with Python, statistics, data visualization, machine learning, and deep learning. Learn tools like Pandas, NumPy, Scikit-learn, Matplotlib, and TensorFlow. Work on real-world datasets, build predictive models, and deploy ML projects. Includes capstone projects and portfolio guidance.",
      duration: "5/6 Months",
      image: datascience, // Make sure to import or define 'datascience' image
      dis: 35,
      price: 44614,
      offerPrice: 28999,
    },
    {
      title: "Advanced Java Programming",
      description:
        "Learn core and advanced Java programming, including OOP, collections, exception handling, JDBC, Servlets, JSP, and Spring Boot. Build console and web-based applications with real-world use cases. Develop RESTful APIs and understand deployment using tools like Maven and Git.",
      duration: "4/5 Months",
      image: java, // make sure to import or define the 'java' image
      dis: 25,
      price: 35999,
      offerPrice: 26999,
    },
    {
      title: "Programming Languages",
      description:
        "Pick any one programming basics course: C/C++, Java, or Python. Each course costs individually and covers fundamental programming concepts with hands-on practice.",
      duration: "2 Months",
      image: basiclanguages, // make sure to import or define the 'java' image
        dis: 40,
      price: 9999,
      offerPrice: 5999,
    },


  ],

  Civil: [
    {
      title: "Revit",
      description:
        "Learn Revit for Building Information Modeling (BIM) with a focus on architecture, structural elements, and construction documentation. This course equips civil engineers with tools to create 3D models, generate plans, and manage construction data efficiently.",
      duration: "5 weeks",
      image: revit, // Replace with your actual image import or path
      dis: 25,
      price: 23999,
      offerPrice: 17999,
    },
    {
      title: "AutoCAD for Civil",
      description:
        "Learn 2D drafting and detailing with AutoCAD for civil engineering applications. This course covers site plans, building layouts, road profiles, cross-sections, and essential tools used in infrastructure and construction documentation.",
      duration: "4 weeks",
      image: autocivil, // Replace with your actual image import or path
      dis: 25,
      price: 9332,
      offerPrice: 6999,
    },
    {
      title: "SketchUp",
      description:
        "Learn SketchUp for 3D modeling and architectural visualization. This course covers everything from creating basic shapes to detailed building models, rendering, and layout documentation—perfect for civil, architecture, and interior design students.",
      duration: "4 weeks",
      image: sketchup, // Replace with your actual image import or path
       dis: 25,
      price: 19999,
      offerPrice: 14999,
    },
    {
      title: "Twinmotion",
      description:
        "Master Twinmotion for real-time 3D visualization and immersive architectural presentations. This course guides you through importing models, applying materials, lighting, animation, and exporting stunning images and videos—ideal for architecture and design students.",
      duration: "4 weeks",
      image: twinmotion, // Replace with your actual image import or path
      dis: 25,
      price: 19999,
      offerPrice: 14999,
    },
    {
      title: "STAAD Pro",
      description:
        "Learn STAAD.Pro for structural analysis and design of buildings, bridges, and other infrastructure projects. This course covers modeling, load application, analysis methods, and design checks according to international codes—perfect for civil and structural engineering students.",
      duration: "5 weeks",
      image: staddpro, // Replace with your actual image import or path
       dis: 30,
      price: 25713,
      offerPrice: 17999,
    },
    {
      title: "ETABS",
      description:
        "Learn ETABS for advanced structural analysis and design of buildings. This course covers model creation, load application, analysis, and design of steel and concrete structures following international codes—ideal for civil and structural engineering students.",
      duration: "5 weeks",
      image: etabs, // Replace with your actual image import or path
      dis: 30,
      price: 22856,
      offerPrice: 15999,
    },
    {
      title: "Lumion",
      description:
        "Master Lumion for stunning architectural visualization and rendering. This course covers importing models, applying materials, adding environments, animations, and producing high-quality images and videos—perfect for architects, interior designers, and visualizers.",
      duration: "4 weeks",
      image: lumion, // Replace with your actual image import or path
       dis: 25,
      price: 19999,
      offerPrice: 14999,
    },
  ],

 ENTc: [
  {
    title: "AutoCAD Electrical",
    description:
      "Learn AutoCAD Electrical for designing electrical control systems, wiring diagrams, panel layouts, and circuiting. Ideal for electrical and E&TC students interested in industrial automation and electrical planning.",
    duration: "4 weeks",
    image: elect_autocad, 
     dis: 25,
      price: 15999,
      offerPrice: 11999,
  },
  {
    title: "Wiring and Harness Design",
    description:
      "Hands-on course on wiring harness design for automotive and industrial systems. Covers wire routing, connectors, terminals, and 2D harness drawing standards using industry-grade tools.",
    duration: "3 weeks",
    image: wiring_harness, 
      dis: 20,
      price: 18749,
      offerPrice: 14999,
  },
  {
    title: "Creo Cabling",
    description:
      "Master cabling and harness design in Creo for E&TC applications. Learn 3D routing, connectors, wire length calculations, and electrical schematic integration with 3D assemblies.",
    duration: "3 weeks",
    image: creo_cabling, 
     dis: 25,
      price: 19999,
      offerPrice: 14999,
  },
  {
    title: "Embedded Systems",
    description:
      "Learn embedded systems with hands-on programming in C/C++ and Microcontrollers (8051/AVR/ARM). Includes hardware interfacing, sensors, actuators, and real-time system design.",
    duration: "6 weeks",
    image: embedded_system, 
     dis: 30,
      price: 19999,
      offerPrice: 13999,
  },
  {
    title: "HIL Testing",
    description:
      "Introduction to Hardware-in-the-Loop (HIL) simulation for automotive ECUs. Learn test case development, system integration, and real-time simulation using dSPACE or similar tools.",
    duration: "5 weeks",
    image: hil_testing,
   dis: 30,
      price: 17142,
      offerPrice: 11999,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Learn IoT architecture, microcontrollers, sensors, communication protocols (MQTT, HTTP), cloud integration, and build real-world smart IoT projects using Arduino, NodeMCU, and Raspberry Pi.",
    duration: "6 weeks",
    image: iot, 
      dis: 30,
      price: 21428,
      offerPrice: 14999,
  },
],

};
