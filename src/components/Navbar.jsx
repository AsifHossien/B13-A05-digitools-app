import React from "react";

const Navbar = ({ cartCount, activeTab, onToggle }) => {
  return (
    <div className="pt-6 w-11/12 mx-auto">
      <nav className="navbar  backdrop-blur-lg px-8 h-20 ">
        <div className="navbar-start">
          <button
            onClick={() => onToggle("product")}
            className="text-4xl font-black tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              DigiTools
            </span>
          </button>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-gray-50/50 rounded-full px-2 py-1.5 gap-1 border border-gray-100">
            <li>
              <button
                onClick={() => onToggle("product")}
                className={`rounded-full px-5 py-2.5 font-bold text-sm transition-all duration-300 ${
                  activeTab === "product"
                    ? "bg-primary text-white shadow-md scale-105"
                    : "text-gray-500 hover:text-primary hover:bg-white"
                }`}
              >
                Products
              </button>
            </li>
            <li>
              <button className="text-sm font-bold text-gray-500 hover:text-primary hover:bg-white rounded-full px-5 py-2.5 transition-all">
                Features
              </button>
            </li>
            <li>
              <button className="text-sm font-bold text-gray-500 hover:text-primary hover:bg-white rounded-full px-5 py-2.5 transition-all">
                Pricing
              </button>
            </li>
            <li>
              <button className="text-sm font-bold text-gray-500 hover:text-primary hover:bg-white rounded-full px-5 py-2.5 transition-all">
                Testimonials
              </button>
            </li>
            <li>
              <button className="text-sm font-bold text-gray-500 hover:text-primary hover:bg-white rounded-full px-5 py-2.5 transition-all">
                FAQ
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              onClick={() => onToggle("cart")}
              className="hover:opacity-80 transition-opacity"
            >
              <div className="indicator">
                <img
                  className="w-6"
                  src="/src/assets/shopping-cart.png"
                  alt="Cart"
                />
                <span className="badge badge-sm indicator-item bg-primary text-white border-none font-bold">
                  {cartCount}
                </span>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost hover:bg-gray-100 rounded-full px-6 hidden md:flex text-gray-700 font-bold border-none">
            Login
          </button>
          <button className="btn bg-linear-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-violet-500 rounded-full px-8 hidden md:flex text-white font-bold border-none shadow-lg shadow-violet-200">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;