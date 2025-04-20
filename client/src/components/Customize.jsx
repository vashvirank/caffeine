import React, { useState } from "react";

const Customize = () => {
  const ingredientsList = [
    "espresso",
    "caramel",
    "whipped cream",
    "brown sugar",
    "white sugar",
    "chocolate",
    "milk",
    "Water",
  ];
  const [selected, setSelected] = useState([]);
  const [sliderPage, setSliderPage] = useState(0);
  const maxItems = 5;
  const handleToggle = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      if (selected.length >= maxItems) return;
      setSelected([...selected, item]);
    }
  };

  const handleNext = () => {
    setSliderPage((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      <section id="customize" className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Ingredient Selector */}
          <div className="relative flex flex-col justify-center items-center rounded-full bg-gradient-to-r from-amber-400 to-amber-600 p-8 w-full lg:w-2/3 h-96 mb-8 lg:mb-0">
            <div className="absolute inset-0 bg-neutral-900 rounded-full opacity-50"></div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 z-10">
              Choose Your Ingredients
            </h2>
            <p className="text-lg text-white mb-6 z-10">Max 5 ingredients</p>

            {/* Ingredient Dots */}
            <div className="flex space-x-2 mb-6 z-10">
              {Array.from({ length: maxItems }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[3vh] aspect-square rounded-full transition-all ${
                    selected[i] ? "bg-amber-500" : "bg-[rgba(245,222,179,0.5)]"
                  }`}
                ></div>
              ))}
            </div>

            {/* Checkboxes for Ingredients */}
            <div className="space-y-4 z-10">
              {ingredientsList.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <span className="text-lg text-white">{item}</span>
                  <input
                    type="checkbox"
                    checked={selected.includes(item)}
                    onChange={() => handleToggle(item)}
                    className="form-checkbox h-5 w-5 text-amber-500"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Slider Content */}
          <div>
            {/* Slider Page 1 */}
            <div
              className={`transition-opacity duration-300 ${
                sliderPage === 0
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`card card${i} relative w-40 h-56 bg-orange-100 rounded-xl shadow-md flex items-end justify-center p-4 mb-4`}
                >
                  {i === 1 && (
                    <div className="text-white font-bold text-xl">Espresso</div>
                  )}
                  <button className="mt-4 bg-amber-500 text-white rounded-lg py-2 px-4">
                    Add
                  </button>
                </div>
              ))}
            </div>

            {/* Slider Page 2 */}
            <div
              className={`transition-opacity duration-300 ${
                sliderPage === 1
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {[5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className={`card card${i} relative w-40 h-56 bg-orange-100 rounded-xl shadow-md flex items-end justify-center p-4 mb-4`}
                >
                  <button className="mt-4 bg-amber-500 text-white rounded-lg py-2 px-4">
                    Add
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handleNext}
                className="bg-amber-500 text-white py-2 px-6 rounded-lg transition-all hover:bg-amber-600"
              >
                {sliderPage === 0 ? "Next →" : "← Back"}
              </button>
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg transition-all hover:bg-green-600">
                Order
              </button>
            </div>

            {/* Max Warning */}
            {selected.length >= maxItems && (
              <p className="mt-4 text-red-500 text-lg font-semibold">
                You cannot select more than 5 items
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Customize;
