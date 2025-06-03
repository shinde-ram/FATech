import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUp } from 'lucide-react'; // optional icon
import Loading from './Loading'; // adjust path if needed



import img1 from '../assets/LOGO.png';
import img2 from '../assets/gallery/visiting-card.png';
import img3 from '../assets/gallery/visiting-back.png';
import img4 from '../assets/gallery/img1.webp';
import img5 from '../assets/gallery/img2.webp';
import img6 from '../assets/gallery/civil-house1.jpg';
import img7 from '../assets/gallery/jspm-seminar.jpg';
import img8 from '../assets/gallery/jspm-seminar2.jpg';
import img9 from '../assets/gallery/raisoni-seminar.jpg';
import video1 from '../assets/gallery/institute.mp4';
import video2 from '../assets/gallery/project-cad.mp4';
import video3 from '../assets/gallery/2D-drafting.mp4';

const galleryItems = [
  { src: img2, type: "image", desc: 'Front side of Visiting Card' },
  { src: img3, type: "image", desc: 'Back side of Visiting Card' },
  { src: img1, type: "image", desc: 'Official 1Saath Logo' },
  { src: img4, type: "image", desc: 'Training ' },
  { src: img5, type: "image", desc: 'Student Of CAE' },
  { src: video3, type: "video", desc: '2D-Drafting with angle projection project' },
  { src: img6, type: "image", desc: 'Designed by student in Revit Software' },
  { src: img7, type: "image", desc: 'Seminar by Lokhandwala sir in JSPM college' },
  { src: img8, type: "image", desc: 'Seminar in JSPM college Wagholi' },
  { src: img9, type: "image", desc: 'Seminar in Raisoni college by our Director' },
  { src: video1, type: "video", desc: 'Short clip of our Institute' },
  { src: video2, type: "video", desc: 'Designed by CAD student' },
];

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const totalItems = galleryItems.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedCount((prev) => {
        const next = prev + 3;
        if (next >= galleryItems.length) {
          clearInterval(interval);
          setLoading(false);
        }
        return next;
      });
    }, 1500); // Load 3 items every 1.5 seconds

    return () => clearInterval(interval);
  }, []);



  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scroll
    });
  };
  if (loading) return <Loading />;

  {
    loadedCount < galleryItems.length && (
      <div className="text-center mt-4">
        <Loading />
      </div>
    )
  }
  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 left-3 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="w-full h-[5vh] bg-gradient-to-r from-green-400 to-green-400 flex items-center justify-center text-center">
        <p className="text-green-800 font-semibold text-sm sm:text-base">
          A glimpse into our journey, one moment at a time.
        </p>
      </div>
      <div className="bg-blue-100 py-10 px-4 md:px-10 bg-gradient-to-br from-fuchsia-200 via-blue-100 to-red-200">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-blue-600 mb-10 font-[Oregano]">📸 Pictures Can Speak 📸</h1>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.slice(0, loadedCount + 3).map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => item.type === 'image' && setSelectedImage(item)}
              className="break-inside-avoid p-2 cursor-pointer group overflow-hidden rounded-lg shadow-md bg-gray-100 "
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover"
                  onLoad={() => setLoadedCount(prev => prev + 1)}
                  onError={() => setLoadedCount(prev => prev + 1)}
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-[60vh] object-cover"
                  muted
                  loop
                  autoPlay
                  onLoadedData={() => setLoadedCount(prev => prev + 1)}
                  onError={() => setLoadedCount(prev => prev + 1)}
                />
              )}

              <p className="text-sm text-gray-600 p-2">{item.desc}</p>
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
    </>
  );
};

export default Gallery;
