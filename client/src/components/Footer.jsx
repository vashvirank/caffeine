import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-[#1f1f1f] text-white pt-16 pb-10 px-6 md:px-20 relative"
      >
        {/* Decorative Background Elements (can be replaced with custom styles or images) */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-amber-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-10 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -z-10"></div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10 relative">
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <p className="text-sm mb-4">Don't miss any new updates</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="px-3 py-2 rounded bg-[#2a2a2a] text-sm outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-sm py-2 rounded text-white"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#customize" className="hover:text-amber-400">
                  Customize
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-amber-400">
                  Offers
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-amber-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              {[
                "FAQ",
                "Terms & Conditions",
                "Reporting",
                "Documentation",
                "Support Policy",
                "Privacy",
              ].map((item, idx) => (
                <li key={idx} className="hover:text-amber-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Team Solutions</h3>
            <div className="flex gap-3 flex-wrap">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-sm text-gray-300"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Coffee Cup Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="/images/coffeecup.png"
            alt="coffee cup"
            className="w-24 h-auto opacity-70"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
