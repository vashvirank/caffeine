import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
  Plus,
  Minus,
  CircleCheckBig,
  AlignLeft,
  SquareCheck,
  Square,
} from "lucide-react";

const Customize = () => {
  const ingredientsList = [
    "Espresso",
    "Caramel",
    "Cream",
    "Brown sugar",
    "White sugar",
    "Chocolate",
    "Milk",
    "Water",
  ];
  const images = [
    "/images/custom1.jpg",
    "/images/custom2.jpg",
    "/images/custom3.jpg",
    "/images/custom4.jpg",
    "/images/custom5.jpg",
    "/images/custom6.jpg",
    "/images/custom7.jpg",
    "/images/custom8.jpg",
  ];
  const [nextClick, setNextClick] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const panelRef = useRef(null);

  const [selected, setSelected] = useState([]);

  const handleSelectionChange = (ind, add) => {
    if (add) {
      if (selected.length >= 5) {
        alert("max 5 ingredients are allowed");
        return;
      }
      if (!selected.includes(ind)) {
        setSelected([...selected, ind]);
      }
    } else {
      setSelected(selected.filter((item) => item !== ind));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowIngredients(false);
      }
    };

    const handleScroll = () => {
      setShowIngredients(false);
    };

    if (showIngredients) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showIngredients]);

  return (
    <>
      <section
        id="Customize"
        className="bg-[#28140e] flex lg:min-h-screen relative"
      >
        <div
          ref={panelRef}
          className={`${
            showIngredients ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 bg-yellow-900/60 backdrop-blur-[5px] absolute md:relative aspect-1/2 md:aspect-auto h-full md:h-auto z-1 md:w-2/8 rounded-r-full transition-transform overflow-hidden`}
        >
          <div className="h-full w-full text-white flex flex-col gap-2.5 pl-8 md:pl-5 lg:pl-10 pr-5 justify-center">
            <h2 className="text-2xl font-bold">
              <span className="text-orange-400">C</span>hoose your ingredients
            </h2>
            <p className="text-orange-100 flex items-center gap-1">
              <AlignLeft size={20} /> Max 5 ingredients
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((item, ind) => (
                <div key={ind} className="bg-green-500/30 h-4 w-4 rounded-full">
                  {selected.length > ind && (
                    <CircleCheckBig size={16} className="text-green-300" />
                  )}
                </div>
              ))}
            </div>
            {ingredientsList.map((item, ind) => (
              <label
                key={ind}
                onClick={() =>
                  handleSelectionChange(ind, selected.includes(ind) ? 0 : 1)
                }
                className="flex gap-1.5 items-center"
              >
                {selected.includes(ind) ? (
                  <SquareCheck
                    strokeWidth={2}
                    size={16}
                    className="text-orange-50 bg-orange-200/30 rounded"
                  />
                ) : (
                  <Square strokeWidth={1} size={16} />
                )}
                {item}
              </label>
            ))}
            <ChevronsLeft
              size={30}
              className="absolute md:hidden right-2 top-1/2 -translate-y-1/2 z-2 bg-white/10 text-white rounded-full p-1"
              onClick={() => setShowIngredients(false)}
            />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <ChevronsRight
            size={30}
            className="bg-white/10 text-white rounded-full p-1"
            onClick={() => setShowIngredients(true)}
          />
        </div>
        <div className="w-full md:w-6/8 flex flex-col">
          <h2 className="text-4xl mt-10 mb-5 lg:mb-0 mr-6 md:mr-0 text-orange-300/30 font-bold scale-y-125 relative text-center ">
            Customize menu
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 items-center h-full px-3 md:px-10 pt-5">
            {images.map((image, ind) =>
              (!nextClick && ind < 4) || (nextClick && ind >= 4) ? (
                <div key={ind} className="relative">
                  <div
                    className="relative bg-cover bg-center aspect-[3/4] rounded-full overflow-hidden"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <p className="absolute text-sm bottom-2 bg-yellow-900/20 text-yellow-950 backdrop-blur-[5px] rounded-full left-1/2 -translate-x-1/2 text-center px-2">
                      {ingredientsList[ind]}
                    </p>
                  </div>
                  <div>
                    {selected.includes(ind) ? (
                      <Minus
                        onClick={() => handleSelectionChange(ind, 0)}
                        size={20}
                        strokeWidth={2.5}
                        className="absolute bg-orange-200 text-yellow-950 top-3.5 right-3.5 p-0.5 rounded hover:scale-95 transition-transform"
                      />
                    ) : (
                      <Plus
                        onClick={() => handleSelectionChange(ind, 1)}
                        size={20}
                        strokeWidth={2.5}
                        className="absolute bg-white text-yellow-950 top-3.5 right-3.5 p-0.5 rounded hover:scale-95 transition-transform"
                      />
                    )}
                  </div>
                </div>
              ) : null
            )}
          </div>

          <div className="relative my-5 lg:mb-20 flex gap-5 justify-center text-white">
            <button
              onClick={() => setNextClick(!nextClick)}
              className={`py-1.5 w-28 rounded bg-yellow-900/80 flex items-center justify-center gap-1 ${
                nextClick ? "pr-3" : "pl-3"
              }`}
            >
              {nextClick ? (
                <>
                  <ChevronLeft size={20} />
                  Previous
                </>
              ) : (
                <>
                  Next
                  <ChevronRight size={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customize;
