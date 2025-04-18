import React, { useState } from "react";

const Section = () => {
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
              <img
                src={`Images/${folder}${index}.${ext}`}
                alt=""
                className="absolute top-[-30px] right-[-30px] w-[10vw] aspect-[2/3]"
              />
            </>
          )}
          {!(folder === "bevrege" && i === 0) && (
            <img
              src={`Images/${folder}${index}.${ext}`}
              alt={`${folder} ${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
      );
    });
  };
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
      <section id="home">
        <div
          className="cup visible"
          id="cup1"
          style={{
            background: "linear-gradient(rgb(30, 30, 30), black)",
            width: "100%",
            height: "100%",
            zIndex: -10,
          }}
        >
          <img
            src="Images/cc1.png"
            alt=""
            style={{
              position: "absolute",
              right: 0,
              height: "100vh",
              transform: "rotateY(180deg)",
              opacity: 0.9,
            }}
          />
          <img
            src="Images/cc1.png"
            alt=""
            style={{
              position: "absolute",
              left: "-100px",
              height: "100vh",
              opacity: 0.6,
            }}
          />
          <div className="left">
            <p style={{ fontSize: "20px" }}>Are You Hungry?</p>
            <h2
              style={{ fontSize: "50px", fontWeight: "bolder" }}
              id="head1"
              className="animate-head"
            >
              Don't Wait !
            </h2>
            <p style={{ color: "rgb(204, 116, 0)" }}>
              Let start to order food now dolorem distinctio quaerat?
            </p>
            <a className="home-btn1" href="#regular-menu">
              Check Out Menu
            </a>
            <a href="#regular-menu">click</a>
          </div>
          <div className="right" id="right1">
            <img src="Images/black.png" alt="" id="cup-img1" />
          </div>
        </div>

        {/* Repeat for cup2 to cup5 with respective style conversions below */}

        <div
          style={{
            position: "absolute",
            right: "20px",
          }}
        >
          <ul
            style={{
              height: "170px",
              width: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {[
              { id: 1, bg: "black" },
              { id: 2, bg: "rgb(144, 49, 144)" },
              { id: 3, bg: "rgb(255, 102, 0)" },
              { id: 4, bg: "rgb(106, 162, 185)" },
              { id: 5, bg: "rgb(145, 87, 43)" },
            ].map((color) => (
              <li
                key={color.id}
                onClick={() => colour(`${color.id}`)}
                className={`colour ${color.id === 1 ? "colour-active" : ""}`}
                id={`colour${color.id}`}
                style={{
                  width: "30px",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  backgroundColor: color.bg,
                }}
              ></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="special-menu" className="relative pt-[5vh] bg-white">
        <p className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Popular Items
        </p>

        <div className="relative overflow-x-auto">
          <div className="flex gap-4 px-4 w-max">
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-[180px] h-[220px] rounded-lg overflow-hidden shadow-lg bg-white flex-shrink-0"
              >
                <img
                  src={`Images/${img}`}
                  alt={`Popular item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      <section id="regular-menu" className="relative py-10 px-4 bg-white">
        <p className="text-3xl font-bold text-center mb-6 text-gray-800">
          Our Regular Menu Pack
        </p>

        {/* Tabs */}
        <ul className="flex justify-center gap-4 mb-6 flex-wrap">
          {categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => setActiveMenu(cat.id)}
              className={`cursor-pointer px-4 py-2 rounded-full border ${
                activeMenu === cat.id
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition-all`}
            >
              {cat.name}
            </li>
          ))}
        </ul>

        {/* Image Container */}
        <div className="flex flex-wrap justify-center items-start gap-4">
          {renderImages(
            categories[activeMenu - 1].folder,
            categories[activeMenu - 1].count
          )}
        </div>

        {/* Spoon image */}
        <img
          src="Images/spoon.png"
          alt="spoon"
          className="absolute top-1/2 right-[-56px] w-[20vw] transform -translate-y-1/2 hidden md:block"
        />
      </section>

      <section
        id="customize"
        className="flex flex-col md:flex-row gap-10 px-4 py-10"
      >
        {/* Ingredient Selector */}
        <div className="pattern2">
          <div className="box p-6 bg-white shadow-lg rounded-xl max-w-md">
            <h2 className="text-2xl font-bold mb-2">Choose your ingredients</h2>
            <p className="mb-4 text-gray-600">max 5 ingredients</p>

            {/* Dots */}
            <div className="flex gap-2 mb-4">
              {Array.from({ length: maxItems }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[2vh] aspect-square rounded-full transition ${
                    selected[i] ? "bg-amber-500" : "bg-[rgba(245,222,179,0.5)]"
                  }`}
                ></div>
              ))}
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              {ingredientsList.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <span className="capitalize">{item}</span>
                  <input
                    type="checkbox"
                    checked={selected.includes(item)}
                    onChange={() => handleToggle(item)}
                    className="w-5 h-5"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="customize-slider relative flex flex-col items-center justify-center w-full max-w-3xl">
          <div
            className="absolute top-0 left-0 right-0 transition-opacity duration-300 flex gap-6"
            style={{
              opacity: sliderPage === 0 ? 1 : 0,
              pointerEvents: sliderPage === 0 ? "auto" : "none",
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`card card${i} relative w-40 h-56 bg-orange-100 rounded-xl shadow-md flex items-end justify-center`}
              >
                {i === 1 && (
                  <div className="absolute bottom-3 left-12 bg-[rgba(83,22,0,0.2)] text-[rgb(113,43,0)] px-2 py-1 rounded-lg text-sm">
                    Espresso
                  </div>
                )}
                <button className="add-button bg-amber-600 text-white py-1 px-3 rounded-full mb-4">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div
            className="absolute top-0 left-0 right-0 transition-opacity duration-300 flex gap-6"
            style={{
              opacity: sliderPage === 1 ? 1 : 0,
              pointerEvents: sliderPage === 1 ? "auto" : "none",
            }}
          >
            {[5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`card card${i} relative w-40 h-56 bg-orange-100 rounded-xl shadow-md flex items-end justify-center`}
              >
                <button className="add-button bg-amber-600 text-white py-1 px-3 rounded-full mb-4">
                  Add
                </button>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-72 flex gap-4">
            <button
              onClick={handleNext}
              className="btn bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              {sliderPage === 0 ? "Next →" : "← Back"}
            </button>
            <button className="btn1 bg-green-600 text-white py-2 px-4 rounded-lg">
              Order
            </button>
          </div>

          {/* Max warning */}
          {selected.length >= maxItems && (
            <p className="absolute bottom-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm">
              You cannot select more than 5 items
            </p>
          )}
        </div>
      </section>

      <section
        id="offers"
        className="overflow-hidden flex flex-col gap-16 items-center py-10"
      >
        <h2 className="text-3xl font-bold">Offers</h2>

        <div className="slider1 z-[9] flex flex-wrap justify-center gap-8 px-4">
          {offerImages.map((src, index) => (
            <div key={index} className="offer-card w-60 h-80 perspective">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
                <img
                  src={src}
                  alt={`offer ${index + 1}`}
                  className="offer-card-front absolute w-full h-full object-cover backface-hidden rounded-lg shadow-lg"
                />
                <div className="offer-card-back absolute w-full h-full bg-yellow-100 backface-hidden rounded-lg shadow-inner rotate-y-180 flex items-center justify-center text-center text-xl font-semibold text-amber-700">
                  Surprise Deal!
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circles for slider indicators */}
        <div className="flex gap-3">
          <div className="cir w-4 h-4 bg-yellow-400 rounded-full cir1"></div>
          <div className="cir w-4 h-4 bg-yellow-400 rounded-full cir2"></div>
          <div className="cir w-4 h-4 bg-yellow-400 rounded-full cir3"></div>
        </div>
      </section>
    </>
  );
};

export default Section;
