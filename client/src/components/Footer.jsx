import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="relative w-full bg-[#f3e5dc]">
        {/* Decorative Elements */}
        <div className="foot foot1"></div>
        <div className="foot foot2"></div>
        <div className="foot foot3"></div>

        {/* Footer Main Content */}
        <div className="footer-items absolute bottom-0 w-full h-[38vh] flex justify-center gap-[5vw] px-4 py-10">
          {/* Column 1 - Get in Touch */}
          <div className="flex flex-col gap-5 w-[15vw] min-w-[200px]">
            <h3 className="text-lg font-bold">Get in Touch</h3>
            <p className="text-sm">Don't miss any new updates</p>
            <form action="/Coffee/index.html" className="flex flex-col gap-4">
              <input
                type="email"
                id="email-input"
                placeholder="Enter your email"
                required
                className="p-2 border border-gray-400 rounded"
              />
              <input
                type="submit"
                id="submit-btn"
                value="Submit"
                className="bg-yellow-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-yellow-700 transition"
              />
            </form>
          </div>

          {/* Column 2 - Menu */}
          <div className="flex flex-col gap-5 w-[15vw] min-w-[200px]">
            <h3 className="text-lg font-bold">Menu</h3>
            <p>Home</p>
            <p>Customize</p>
            <p>Offers</p>
            <p>Contact Us</p>
          </div>

          {/* Column 3 - Help */}
          <div className="flex flex-col gap-2 w-[15vw] min-w-[200px]">
            <h3 className="text-lg font-bold">Help</h3>
            {[
              "FAQ",
              "Terms & Conditions",
              "Reporting",
              "Documentation",
              "Support Policy",
              "Privacy",
            ].map((item, idx) => (
              <p key={idx} className="text-xs">
                {item}
              </p>
            ))}
          </div>

          {/* Column 4 - Team Solutions */}
          <div className="flex flex-col gap-5 w-[15vw] min-w-[200px]">
            <h3 className="text-lg font-bold">Team Solutions</h3>
            <div className="flex gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-[30px] h-[30px] bg-white rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Coffee Cup Image */}
        <div className="absolute -bottom-[210px] -right-[70px]">
          <img src="Images/coffeecup.png" alt="coffee cup" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
