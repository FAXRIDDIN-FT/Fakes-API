import React, { useState, useEffect } from 'react';

import img1 from '../../assets/1.webp';
import img2 from '../../assets/2.avif';
import img3 from '../../assets/3.avif';
import img4 from '../../assets/4.webp';
import img5 from '../../assets/5.jpg';

const images = [img1, img2, img3, img4, img5];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 sekundlik autoplay

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 pt-[80px] bg-[#0f1117]">
      <div className="max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-xl">

        {/* Slide container */}
        <div className="relative h-[300px] md:h-[500px] bg-black">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />
          ))}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
        </div>

        {/* Dots / Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-300 focus:outline-none
                ${i === index
                  ? 'bg-blue-600 border-blue-600 scale-110 shadow-md'
                  : 'bg-gray-300 border-gray-400 hover:bg-gray-400 hover:scale-105'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);
