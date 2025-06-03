import React from 'react'
import Header from '../Header'
import HeroLeft from './HeroLeft'
import CoursesSection from './CoursesSectionHome'
import NumberBox from './NumberBox'
import Testimonial from './Testimonial'
import Placement from './Placement'
import Feature from './Feature'
import Footer from '../Footer'
import { ArrowUp } from 'lucide-react'; // optional icon


function Hero() {
   const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smooth scroll
        });
    };
  return (
    <>
      {/* <div className='fixed z-12 w-full border'> */}

      {/* <Header /> */}
      {/* </div> */}
      <button
                onClick={scrollToTop}
                className="fixed bottom-5 left-3 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                <ArrowUp className="w-5 h-5" />
            </button>

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
