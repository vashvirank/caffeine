import { Link } from "react-scroll";
import React, { act, useState } from "react";
import {
  bg,
  cup,
  cupData,
  colors,
  buttonStyles,
  pStyles,
} from "../data/homeData";

const Home = () => {
  const [activeCup, setActiveCup] = useState(0);
  const handleButtonClick = (cup) => {
    setActiveCup(cup);
  };
  return (
    <>
      <div>
        <section
          className={`${bg[activeCup]} bg-black pt-[6vh] md:pt-[9vh] min-h-screen flex flex-col md:flex-row bg-gradient-to-b  text-gray-200`}
        >
          {/* left section */}
          <div className="min-h-1/2 p-3 pt-0 md:p-0 md:min-h-full min-w-full md:min-w-3/7 flex justify-center">
            <img
              src="/images/left.png"
              className="hidden lg:block opacity-65"
            />
            <div className="flex flex-col items-center md:items-start md:px-0 gap-5 ml-5">
              <div className="md:ml-[30%] flex flex-col items-center h-1/4 group">
                <span className="mx-auto w-[1px] h-5 bg-white group-hover:opacity-50 transition duration-100"></span>
                <img
                  src="/images/lamp.png"
                  className="w-8 group-hover:opacity-50 transition duration-100 drop-shadow-[0px_10px_10px_gray,0px_40px_20px_gray,0px_70px_40px_gray]"
                />
              </div>
              <p className="text-2xl font-bold">{cupData[activeCup][0]}</p>
              <h2 className="my-2 text-5xl font-extrabold scale-y-110">
                {cupData[activeCup][1]}
              </h2>
              <p className={`${pStyles[activeCup]} text-center md:text-left`}>
                {cupData[activeCup][2]}
              </p>
              <Link
                to="regular-menu"
                className={`${buttonStyles[activeCup]} my-2 py-1 px-14 rounded hover:scale-95 transition-transform cursor-pointer`}
              >
                Check out menu
              </Link>
            </div>
          </div>

          {/* right section */}
          <div className="min-h-3/5 p-3 pb-13 md:p-0 md:min-h-full min-w-full md:min-w-4/7 relative flex items-center justify-center">
            <img
              src="/images/right.png"
              className="absolute right-0 opacity-90 hidden md:block"
            />
            <div className="relative">
              <img src="/images/round.png" className="" />
              <img
                key={activeCup}
                id={"cup" + activeCup}
                src={cup[activeCup]}
                className="active absolute drop-shadow-[15px_15px_10px_black] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/11"
              />
            </div>
            <div className="absolute bottom-3 md:right-3 lg:right-8 flex flex-row md:flex-col gap-2 md:top-1/2 md:-translate-y-1/2 md:mt-[5vh]">
              {colors?.map((color, ind) => (
                <button
                  onClick={() => handleButtonClick(ind)}
                  key={ind}
                  className={`${color} ${
                    activeCup == ind ? "ring-white" : "ring-white/40"
                  } w-7 h-7 rounded-full ring-2`}
                ></button>
              ))}
            </div>
          </div>
        </section>
        <div className="flex drop-shadow-[0px_-1px_1px_black]">
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
          <img src="/images/paper.png" />
        </div>
      </div>
    </>
  );
};

export default Home;
