import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-[#1f1f1f] opacity-90 text-white w-full h-[6vh] md:h-[9vh] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-wide flex items-center space-x-1"
          >
            <span className="text-amber-500">C</span>
            <span>affeine</span>
          </a>

          {/* Hamburger Toggle */}
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </label>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-amber-400 transition">
              Home
            </a>
            <a href="#regular-menu" className="hover:text-amber-400 transition">
              Menu
            </a>
            <a href="#customize" className="hover:text-amber-400 transition">
              Customize
            </a>
            <a href="#offers" className="hover:text-amber-400 transition">
              Offers
            </a>
            <a href="#footer" className="hover:text-amber-400 transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="peer-checked:flex hidden flex-col md:hidden bg-[#1a1a1a] px-6 py-4 space-y-3">
          <a href="#home" className="hover:text-amber-400 transition">
            Home
          </a>
          <a href="#regular-menu" className="hover:text-amber-400 transition">
            Menu
          </a>
          <a href="#customize" className="hover:text-amber-400 transition">
            Customize
          </a>
          <a href="#offers" className="hover:text-amber-400 transition">
            Offers
          </a>
          <a href="#footer" className="hover:text-amber-400 transition">
            Contact
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
