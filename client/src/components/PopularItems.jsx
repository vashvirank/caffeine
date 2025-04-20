import React from "react";

const PopularItems = () => {
  const images = [
    "co1.jpg",
    "co2.jpg",
    "co3.jpg",
    "co4.jpg",
    "co5.jpg",
    "co6.jpg",
    "co7.jpg",
    "co8.jpg",
    "co9.jpg",
    "co11.jpg",
  ];
  return (
    <>
      <section id="special-menu" className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-neutral-800 dark:text-white">
            Popular Items
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={`Images/${img}`}
                  alt={`Popular item ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {`Item ${index + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularItems;
