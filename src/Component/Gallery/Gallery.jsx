import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUp } from 'lucide-react'; // optional icon
import Loading from '../Loading'; // adjust path if needed



import GalleryItem from '../../Data/GalleryItem';


const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const totalItems = GalleryItem.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedCount((prev) => {
        const next = prev + 3;
        if (next >= GalleryItem.length) {
          clearInterval(interval);
          setLoading(false);
        }
        return next;
      });
    }, 100); // Load 3 items every 1.5 seconds

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
    loadedCount < GalleryItem.length && (
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
          {GalleryItem.slice(0, loadedCount + 3).map((item, index) => (
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
                  loading="lazy"
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
