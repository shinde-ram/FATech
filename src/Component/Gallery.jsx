import React from 'react'
import img from '../assets/LOGO.png'

const Gallery = () => {
  return (
    <div className='flex justify-center items-center w-full h-[90vh]'>
      <img src={img} alt="" />
      <div className='absolute text-red-500 bg-red-100 p-5 text-xl font-bold top-40'>This page is under Process to Build </div>
    </div>
  )
}

export default Gallery
