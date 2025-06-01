import React, { useState } from 'react';
import img1 from '../assets/LOGO.png';
import img2 from '../assets/gallery/visiting-card.png';
import img3 from '../assets/gallery/visiting-back.png';
import img4 from '../assets/gallery/img1.webp';
import img5 from '../assets/gallery/img2.webp';
const images = [
  { src: img2, desc: 'Front side of Visiting Card' },
  { src: img1, desc: 'Official 1Saath Logo' },
  { src: img3, desc: 'Back side of Visiting Card' },
  { src: img4, desc: 'Training ' },
  { src: img5, desc: 'Student Of CAE' },
  // Add more images here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-blue-100 py-10 px-4 md:px-10 bg-gradient-to-br from-fuchsia-200 via-blue-100 to-red-200" 
    >
      <h1 className="text-3xl md:text-5xl  font-extrabold text-center text-blue-600 mb-10 font-[Oregano] ">📸 Pictures Can Speak 📸</h1>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg shadow-md bg-white transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover "
            />
            <p className="text-sm text-gray-600 p-2">{image.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full p-4 relative">
            <img
              src={selectedImage.src}
              alt="Enlarged"
              className="w-full h-[80vh] object-contain rounded-lg shadow-lg bg-white"
            />
            <p className="text-white text-center mt-4">{selectedImage.desc}</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
