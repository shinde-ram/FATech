// src/data/galleryItems.js

import img1 from '../assets/LOGO.png';
import img2 from '../assets/gallery/visiting-card.png';
import img3 from '../assets/gallery/visiting-back.png';
import img4 from '../assets/gallery/img1.webp';
import img5 from '../assets/gallery/img2.webp';
import img6 from '../assets/gallery/civil-house1.jpg';
import img7 from '../assets/gallery/jspm-seminar.jpg';
import img8 from '../assets/gallery/jspm-seminar2.jpg';
import img9 from '../assets/gallery/raisoni-seminar.jpg';
// import video1 from '../assets/gallery/institute.mp4';
// import video2 from '../assets/gallery/project-cad.mp4';
import video3 from '../assets/gallery/2D-drafting.mp4';

const GalleryItem = [
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
  // { src: video1, type: "video", desc: 'Short clip of our Institute' },
  // { src: video2, type: "video", desc: 'Designed by CAD student' }
];

export default GalleryItem;
