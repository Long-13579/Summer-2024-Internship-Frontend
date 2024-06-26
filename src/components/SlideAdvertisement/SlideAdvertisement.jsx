import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import drink_popcorn from '@/assets/bap-nuoc-onl.webp';
import phim1 from '@/assets/phim1.webp';
import Button from '@/components/Button';
import next_icon from '@/assets/navigate-next.svg';
import prev_icon from '@/assets/navigate-before.svg';

const SlideAdvertisement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { img: drink_popcorn, button: false },
    { img: phim1, button: true },
    { img: phim1, button: true },
  ];

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: previous,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="w-full relative" {...handlers}>
      <div className="relative h-96 overflow-hidden rounded-2xl bg-indigo-50">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.img} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover rounded-xl" 
              draggable="false"
              onDragStart={(e) => e.preventDefault()} 
            />
            {slide.button && (
              <Button
                title="BOOKING NOW"
                extraClass="absolute bottom-4 left-4"
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons with images */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <button onClick={previous} className="bg-gray-100 p-2 rounded-full shadow-md">
          <img src={prev_icon} alt="Previous" className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <button onClick={next} className="bg-gray-100 p-2 rounded-full shadow-md">
          <img src={next_icon} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SlideAdvertisement;
