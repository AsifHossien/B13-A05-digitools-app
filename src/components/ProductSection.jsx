import React from "react";

const ProductSection = ({ view, setView, cartCount }) => {
  return (
    <div className="text-center mb-16 px-4">
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
        Premium Digital Tools
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="inline-flex p-1.5 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
        <button
          onClick={() => setView("product")}
          className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
            view === "product"
              ? "bg-[#7C3AED] text-white shadow-lg scale-105"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setView("cart")}
          className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
            view === "cart"
              ? "bg-[#7C3AED] text-white shadow-lg scale-105"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default ProductSection;