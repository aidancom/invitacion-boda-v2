import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';

const Slider = () => {

  const [current, setCurrent] = useState(0);


  const images = [
    "/img/slider/slide1.jpg",
    "/img/slider/slide2.jpg",
    "/img/slider/slide3.jpg",
  ];

  const length = images.length;
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);  

  return (
    <div className="relative overflow-hidden bg-[#4C5C37] p-15">
      <div className="max-w-[1200px] mx-auto text-center text-white">
        <h3 className="pb-5 text-4xl font-bold font-[DancingScript]">Nuestra historia</h3>
        <div className="relative w-full h-[650px] overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-[700px] flex-shrink-0 object-cover"
              />
            ))}
          </div>

          {/* Botones */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
          >
            ›
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all  ${
                i === current ? "bg-white w-5" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider
