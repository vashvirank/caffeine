import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="bg-[#1f1f1f]/80 backdrop-blur-[8px] text-white w-full h-[6vh] md:h-[9vh] shadow-md fixed top-0 left-0 z-20 flex items-center justify-between px-3 md:px-5 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#" className="tracking-wide flex items-center gap-2">
            <img
              src="/images/coffee.png"
              className="h-7 ring-2 ring-orange-200 rounded-full"
            />
            <span className="text-xl font-bold scale-y-150 ">
              <span className="text-yellow-600">C</span>
              <span className="text-white/80">affeine</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {["Home", "Menu", "Customize", "Offers", "Contact"].map(
              (link, idx) => (
                <Link
                  key={idx}
                  to={link}
                  offset={-60}
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  {link}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="flex flex-col top-[6vh] left-0 p-3 absolute md:hidden gap-2 bg-[#1f1f1f]/90 backdrop-blur-[8px] text-white w-full">
            {["Home", "Menu", "Customize", "Offers", "Contact"].map(
              (link, idx) => (
                <Link
                  key={idx}
                  to={link}
                  offset={-60}
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  {link}
                </Link>
              )
            )}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
