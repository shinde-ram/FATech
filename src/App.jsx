import { useState } from 'react'
import './App.css'
import Hero from './Component/Home/Hero'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Courses from './Component/Courses/Courses'
import Gallery from './Component/Gallery/Gallery'
import Footer from './Component/Footer'
import DepartmentCourses from './Component/Courses/DepartmentCourses'
import ScrollToTop from './Component/ScrollToTop'
import CourseDetails from './Component/Courses/CourseDetails'
import AboutUs from './Component/AboutUs/AboutUs'
import CourseEnrollForm from './Component/CourseEnrollForm'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Header />
            <ScrollToTop />

      <Routes>
        <Route path="/" element={<Hero />}></Route>

        <Route path="/courses" element={<Courses />}>
          <Route index element={<DepartmentCourses />} />
          <Route path=":department" element={<DepartmentCourses />} />
        </Route>

        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/courses/:department/:title" element={<CourseDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courseEnroll/:course" element={<CourseEnrollForm/>}></Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
