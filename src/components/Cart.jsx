import React from "react";

const Cart = ({
  cartItems,
  onRemove,
  onCheckout,
  onBack,
  isOrderCompleted,
}) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  if (isOrderCompleted) {
    return (
      <div className="w-full max-w-4xl mx-auto p-12 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
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
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-2">
          Order Confirmed!
        </h3>
        <p className="text-gray-500 font-medium mb-8">
          Your premium tools are ready for download.
        </p>
        <button
          onClick={onBack}
          className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-10 h-14 rounded-full font-bold border-none transition-all"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-12 bg-gray-50/50 rounded-[2.5rem] border-2 border-dashed border-gray-200 text-center">
        <h3 className="text-2xl font-bold text-gray-400 mb-2">
          Your cart is currently empty
        </h3>
        <p className="text-gray-400 mb-8 font-medium">
          Add some tools to get started with your workflow.
        </p>
        <button
          onClick={onBack}
          className="text-[#7C3AED] font-black hover:text-[#6D28D9] transition-colors"
        >
          Return to Shop
        </button>
      </div>
    );
  }
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 text-gray-900">
      <div className="space-y-6">
        <h2 className="text-3xl font-black mb-8">Shopping Bag</h2>
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center justify-between border-b border-gray-50 pb-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                <img
                  src={`/${item.icon}`}
                  className="w-8 h-8 object-contain"
                  alt={item.name}
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  {item.name}
                </h3>
                <p className="text-[#7C3AED] font-bold">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(index)}
              className="btn btn-ghost text-red-500 hover:bg-red-50 rounded-xl font-bold transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500 font-bold text-lg">Subtotal</p>
            <p className="text-4xl font-black text-gray-900">
              ${total.toFixed(2)}
            </p>
          </div>
          <button
            onClick={onCheckout}
            className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none w-full h-16 rounded-2xl text-lg font-black shadow-lg shadow-purple-100 transition-all active:scale-[0.98]"
          >
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;