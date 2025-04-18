import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* Logo Section */}
        <div className="logo flex items-center gap-2">
          <a href="#" className="logo-png"></a>
          <a href="#" className="caffeine-logo text-2xl font-bold">
            <span className="caffeine-c text-yellow-600">C</span>affeine
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <input type="checkbox" id="check" className="hidden" />

        <label htmlFor="check" className="icons cursor-pointer">
          <div className="humburger space-y-1">
            <div className="humburger1 w-6 h-0.5 bg-black"></div>
            <div className="humburger2 w-6 h-0.5 bg-black"></div>
            <div className="humburger3 w-6 h-0.5 bg-black"></div>
          </div>
          <div className="cross relative w-6 h-6">
            <div className="cross1 absolute w-6 h-0.5 bg-black rotate-45 top-3 left-0"></div>
            <div className="cross2 absolute w-6 h-0.5 bg-black -rotate-45 top-3 left-0"></div>
          </div>
        </label>

        {/* Navigation Links */}
        <nav className="navbar flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <a href="#home" style={{ "--i": 0 }}>
            Home
          </a>
          <a href="#regular-menu" style={{ "--i": 1 }}>
            Menu
          </a>
          <a href="#customize" style={{ "--i": 2 }}>
            Customize
          </a>
          <a href="#offers" style={{ "--i": 3 }}>
            Offers
          </a>
          <a href="#footer" style={{ "--i": 4 }}>
            Contact us
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
