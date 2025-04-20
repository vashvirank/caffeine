import React, { useState } from "react";
import Home from "./Home";
import PopularItems from "./PopularItems";
import RegularMenu from "./RegularMenu";
import Customize from "./Customize";
import Offers from "./Offers";

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      {/* <PopularItems /> */}
      <RegularMenu />
      <Customize />
      <Offers />
    </div>
  );
};

export default HeroSection;
