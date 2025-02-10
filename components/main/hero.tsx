"use client";

import { useState, useEffect } from "react";

// Array of college campus images
const slides = [
  {
    id: 1,
    imgSrc: "/hero1.jpg",
    imgAlt: "Campus 1",
  },
  {
    id: 2,
    imgSrc: "/hero2.jpg",
    imgAlt: "Campus 2",
  },
  {
    id: 3,
    imgSrc: "/hero3.jpg",
    imgAlt: "Campus 3",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] w-screen overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.imgSrc}
              alt={slide.imgAlt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black h-2/5 max-sm:h-1/2"></div>
          </div>
        ))}
      </div>

      <div className="absolute max-sm:mb-[4vh] z-10 bottom-[6vw] left-0 right-0 flex flex-col   font-goudy text-[#F3E8D8]  mx-[4vw]">
        <h1 className="text-[4vw]  font-light max-sm:text-[4vh]">
          Explore The Campus together with ISS.
        </h1>
        <div className="flex  font-mont text-[2.5vh]  w-full font-mont items-center justify-between">
          <p className="w-1/2  max-sm:text-[2vh]">
            Discover the vibrant atmosphere and state of the art facilities of
            our campus together with ISS.
          </p>
          <div className="rounded mr-[1vw] bg-yellow-400 py-[1.3vh] max-sm:py-[1.3vw] max-sm:px-[3vh] px-[3vw] max-sm:text-[2vh] max-sm:font-semibold font-mont font-medium  text-black">
            RSVP
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-[1vw] max-sm:h-[1.6vh] max-sm:w-[1.6vh] w-[1vw] rounded-full ${
              index === currentSlide
                ? "bg-[#F3E8D8]"
                : " border-[0.3vh] max-sm:border-[0.5vw] border-[#F3E8D8]"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
