import React from 'react'
import Header from '../Header'
import HeroLeft from './HeroLeft'
import CoursesSection from './CoursesSectionHome'
import NumberBox from './NumberBox'
import Testimonial from './Testimonial'
import Placement from './Placement'
import Feature from './Feature'
import Footer from '../Footer'

function Hero() {
  return (
    <>
      {/* <div className='fixed z-12 w-full border'> */}

      {/* <Header /> */}
      {/* </div> */}
      <HeroLeft />
      <CoursesSection />
      <NumberBox />
      <Placement/>
      <Feature/>
      <Testimonial/>
      {/* <Footer/> */}
     


    </>
  )
}

export default Hero
