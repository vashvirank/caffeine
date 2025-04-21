import React, { useEffect, useRef } from "react";

const images = [
  "/images/co1.jpg",
  "/images/co2.jpg",
  "/images/co3.jpg",
  "/images/co4.jpg",
  "/images/co5.jpg",
  "/images/co6.jpg",
  "/images/co7.jpg",
  "/images/co8.jpg",
  "/images/co9.jpg",
  "/images/co10.jpg",
  "/images/co11.jpg",
];

const PopularItems = () => {
  return (
    <section className="px-2 md:px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-5 mb-2 text-yellow-950/85">
        Popular Items
      </h2>
      <div className="relative overflow-hidden py-5">
        <div className="relative">
          {/* Inline animation with responsive speed */}
          <style>
            {`
          @keyframes scroll-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scrolling-desktop {
            animation: scroll-slow 25s linear infinite;
          }

          .scrolling-mobile {
            animation: scroll-fast 20s linear infinite;
          }

          .group:hover .scrolling-desktop,
          .group:hover .scrolling-mobile {
            animation-play-state: paused;
          }
        `}
          </style>

          <div className="group">
            {/* Desktop */}
            <div className="hidden sm:flex gap-3 w-max scrolling-desktop">
              {[...images, ...images].map((image, index) => (
                <img
                  draggable="false"
                  key={index}
                  loading="lazy"
                  src={image}
                  alt={`image ${index}`}
                  className="w-50 lg:w-60 opcaity-90 hover:opacity-100 hover:scale-105 hover:brightness-110 hover:contrast-125 transition-transform duration-200 rounded-lg"
                />
              ))}
            </div>

            {/* Mobile */}
            <div className="flex sm:hidden gap-2 w-max scrolling-mobile">
              {[...images, ...images].map((image, index) => (
                <img
                  key={index}
                  draggable="false"
                  loading="lazy"
                  src={image}
                  alt={`image ${index}`}
                  className="w-30 rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
