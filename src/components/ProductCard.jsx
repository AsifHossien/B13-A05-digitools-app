import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    // 1. Trigger the cart logic in App.jsx
    onAddToCart(product);

    // 2. Trigger local visual transformation
    setIsAdded(true);

    // 3. Revert back to original state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-4xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100 w-full max-w-sm group">
      <div className="absolute top-6 right-6">
        <span
          className={`px-4 py-1 rounded-full text-xs font-bold ${
            product.tag === "Best Seller"
              ? "bg-orange-100 text-orange-600"
              : product.tag === "Popular"
                ? "bg-purple-100 text-purple-600"
                : "bg-green-100 text-green-600"
          }`}
        >
          {product.tag}
        </span>
      </div>

      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
        <img
          src={`/src/assets/${product.icon}`}
          alt={product.name}
          className="w-8 h-8 object-contain"
        />
      </div>

      <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
        {product.description}
      </p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-3xl font-black text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-400 font-bold text-sm">
          /{product.period === "one-time" ? "One-Time" : "Mo"}
        </span>
      </div>

      <ul className="space-y-3 mb-10">
        {product.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-600 font-medium text-sm"
          >
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        disabled={isAdded}
        className={`w-full h-14 rounded-4xl font-black text-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 ${
          isAdded
            ? "bg-green-500 text-white shadow-lg shadow-green-100"
            : "bg-[#7C3AED] text-white shadow-lg shadow-purple-100 hover:bg-[#6D28D9]"
        }`}
      >
        {isAdded ? (
          <>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Added to Cart
          </>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default ProductCard;