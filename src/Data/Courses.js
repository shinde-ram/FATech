    import autocad from '../assets/courses-thumbnail/autocad-thumbnail.jpg'
    import fullstack from '../assets/courses-thumbnail/full-stack-thumbnail.jpg'
    import python from '../assets/courses-thumbnail/python-thumbnail.webp'
    import dsa from '../assets/courses-thumbnail/dsa-thumbnail.webp'
    import solidwork from '../assets/courses-thumbnail/solidworks-thumbnail.webp'
    import creo from '../assets/courses-thumbnail/creo-thumbnail.webp'
    import revit from '../assets/courses-thumbnail/revit-thumbnail.webp'
    import autocivil from '../assets/courses-thumbnail/autocad-civil-thumbnail.webp'
    import sketchup from '../assets/courses-thumbnail/sketchup-thumbnail.webp'


   export const allCourses = {
  Mechanical: [
    {
      title: "AutoCAD Essentials",
      description:
        "Master 2D drafting and technical drawings for mechanical systems. Learn to create precise layouts, understand layer management, and produce professional blueprints. Ideal for engineering students and professionals entering the CAD field. Real-world projects and case studies included. Boost your confidence in mechanical design basics.",
      duration: "6 weeks",
      image: autocad,
      dis: 30,
      price: 7000,
      offerPrice: 4900,
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
        "Become a full-stack developer with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build complete responsive websites and backend services. Work on capstone projects with deployment. Learn API creation, frontend-backend integration, and project management techniques.",
      duration: "10 weeks",
      image: fullstack,
      dis: 40,
      price: 15000,
      offerPrice: 9000,
    },
    {
      title: "Python Programming",
      description:
        "From variables to automation — complete beginner to advanced Python. Learn OOP, file handling, automation scripts, data visualization, and web scraping. Perfect for aspiring developers, data scientists, and AI enthusiasts.",
      duration: "6 weeks",
      image: python,
      dis: 30,
      price: 10000,
      offerPrice: 7000,
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
