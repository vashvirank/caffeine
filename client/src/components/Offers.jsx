import React from "react";

const Offers = () => {
  const offerImages = [
    "images/co1.jpg",
    "images/co2.jpg",
    "images/co3.jpg",
    "images/co4.jpg",
    "images/co5.jpg",
    "images/co6.jpg",
    "images/co7.jpg",
  ];
  return (
    <>
      <section id="Offers" className="py-8 bg-gray-50 dark:bg-neutral-900">
        <div className="mx-auto md:px-5 lg:px-10">
          <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12">
            Special Offers
          </h2>

          <div className="flex justify-center flex-wrap gap-3 md:gap-6">
            {offerImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all w-6/13 md:w-3/10 lg:w-3/13"
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
        </div>
      </section>
    </>
  );
};

export default Offers;
