import React, { useState } from "react";
import { categories, images, itemName } from "../data/regularMenuData";

const RegularMenu = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <>
      <section id="Menu" className="relative">
        <div>
          <h2 className="text-yellow-950/85 text-3xl md:text-4xl font-bold text-center mb-8 mt-2">
            Our Regular Menu Pack
          </h2>

          <ul className="flex justify-center gap-1.5 md:gap-5 mb-6">
            {categories.map((cat, ind) => (
              <li
                key={ind}
                onClick={() => setActiveMenu(ind)}
                className={`text-sm md:text-base cursor-pointer px-3 md:px-6 md:py-1 rounded-full border-1 transition-all transform hover:scale-95 ${
                  activeMenu === ind
                    ? "bg-yellow-950/85 text-white hover:bg-yellow-950/80 border-gray-300"
                    : "text-yellow-950/85 border-yellow-950/85 hover:bg-yellow-950/10 font-semibold"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="mx-2 md:mx-20 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
            {images[activeMenu].map((image, ind) => (
              <div
                key={ind}
                className="group relative rounded-lg overflow-hidden"
              >
                <div
                  className="rounded-lg relative bg-cover bg-center aspect-square"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <p className="absolute bottom-0 bg-black/50 bg-opacity-50 text-white w-full text-center py-1">
                    {itemName[activeMenu][ind]}
                  </p>
                </div>
                <div className="absolute top-0 translate-y-full group-hover:translate-y-[10%] transition-transform duration-300 bg-black/80 aspect-square w-full">
                  <h2 className="text-white p-2 text-xl">
                    {itemName[activeMenu][ind]}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/spoon.png"
          className="absolute bottom-0 right-0 h-60"
        />
      </section>
    </>
  );
};

export default RegularMenu;
