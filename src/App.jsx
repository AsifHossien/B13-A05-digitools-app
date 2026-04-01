import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "./data/products.json";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("product");
  const [cart, setCart] = useState([]);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setIsOrderCompleted(false);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
    toast.warn("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    setIsOrderCompleted(true);
    toast.success("Order Placed Successfully!");
  };

  const handleBackToProducts = () => {
    setIsOrderCompleted(false);
    setView("product");
  };

  return (
    <div className="min-h-screen bg-white font-sans w-full">
      <ToastContainer position="bottom-right" />

      <Navbar cartCount={cart.length} activeTab={view} onToggle={setView} />

      <main className="w-full">
        <div
          className={
            view === "product" ? "block w-full overflow-hidden" : "hidden"
          }
        >
          <Banner />
          <Stats />
        </div>

        <section className="py-20 flex justify-center w-full">
          <div className="w-11/12 max-w-325 mx-auto min-h-[60vh]">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Premium Digital Tools
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Choose from our curated collection of premium digital products
                designed to boost your productivity and creativity.
              </p>
              <div className="inline-flex p-1.5 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
                <button
                  onClick={() => setView("product")}
                  className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    view === "product"
                      ? "bg-[#7C3AED] text-white shadow-lg"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setView("cart")}
                  className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    view === "cart"
                      ? "bg-[#7C3AED] text-white shadow-lg"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  Cart ({cart.length})
                </button>
              </div>
            </div>
            <div className="w-full">
              {view === "product" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                  {products.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <Cart
                  cartItems={cart}
                  onRemove={handleRemove}
                  onCheckout={handleCheckout}
                  isOrderCompleted={isOrderCompleted}
                  onBack={handleBackToProducts}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full overflow-hidden">
        <Steps />
        <Pricing />
        <Footer />
      </footer>
    </div>
  );
}

export default App;