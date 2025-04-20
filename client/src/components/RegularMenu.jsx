import React, { useState } from "react";

const RegularMenu = () => {
  const categories = [
    { id: 1, name: "Coffee", folder: "co", count: 8 },
    { id: 2, name: "Beverages", folder: "bevrege", count: 8 },
    { id: 3, name: "Dessert", folder: "dessert", count: 8 },
    { id: 4, name: "Food", folder: "food", count: 8 },
    { id: 5, name: "Sandwich", folder: "sandwitch", count: 8 },
  ];
  const [activeMenu, setActiveMenu] = useState(1);
  const renderImages = (folder, count) => {
    return Array.from({ length: count }, (_, i) => {
      const index = folder === "co" && i === 9 ? 11 : i + 1; // Fix for "co11.jpg"
      const imgName =
        folder === "co" && i === 9 ? "co11.jpg" : `${folder}${index}.jpg`;
      const ext = folder === "bevrege" ? "png" : "jpg";

      const style =
        folder === "bevrege" && i === 0
          ? "relative bg-red-500 text-white font-semibold text-center flex items-center justify-center rounded-full aspect-[4/5] w-[15vw]"
          : "overflow-hidden";

      return (
        <div
          key={i}
          className={`m-2 flex-shrink-0 w-[15vw] rounded-xl shadow-md ${style}`}
        >
          {folder === "bevrege" && i === 0 && (
            <>
              $10
              <img src={`Images/${folder}${index}.${ext}`} alt="" />
            </>
          )}
          {!(folder === "bevrege" && i === 0) && (
            <img
              src={`Images/${folder}${index}.${ext}`}
              alt={`${folder} ${index}`}
            />
          )}
        </div>
      );
    });
  };
  return (
    <>
      <section id="regular-menu" className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-neutral-800 dark:text-white">
            Our Regular Menu Pack
          </h2>

          <ul className="flex justify-center space-x-6 mb-10">
            {categories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => setActiveMenu(cat.id)}
                className={`cursor-pointer px-6 py-3 rounded-full border-2 transition-all transform hover:scale-105 ${
                  activeMenu === cat.id
                    ? "bg-amber-600 text-white border-amber-600"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300"
                }`}
              >
                {cat.name}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {renderImages(
              categories[activeMenu - 1]?.folder,
              categories[activeMenu - 1]?.count
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegularMenu;
