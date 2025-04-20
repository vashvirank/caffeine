import React from "react";

const Offers = () => {
  const offerImages = [
    "Images/co1.jpg",
    "Images/co2.jpg",
    "Images/co3.jpg",
    "Images/co4.jpg",
    "Images/co5.jpg",
    "Images/co6.jpg",
    "Images/co7.jpg",
  ];
  return (
    <>
      <section id="offers" className="py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12">
            Special Offers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {offerImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all"
              >
                <img
                  src={src}
                  alt={`Offer ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Surprise Deal!
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            <div className="w-3 h-3 rounded-full bg-neutral-400 transition-all hover:bg-neutral-600"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-400 transition-all hover:bg-neutral-600"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-400 transition-all hover:bg-neutral-600"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
