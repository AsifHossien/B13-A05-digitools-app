import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsData from "./data/products.json";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductSection from "./components/ProductSection";
import ProductGrid from "./components/ProductGrid";
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
    toast.success(`${product.name} added!`);
  };
  const handleRemove = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    toast.warn("Item removed");
  };
  const handleCheckout = () => {
    setCart([]);
    setIsOrderCompleted(true);
    toast.success("Order Placed!");
  };
  return (
    <div className="min-h-screen bg-white font-sans  w-full">
      <ToastContainer position="bottom-right" />
      <Navbar cartCount={cart.length} activeTab={view} onToggle={setView} />
      <main className="w-full">
        {view === "product" && (
          <div className="w-full">
            <Banner />
            <Stats />
          </div>
        )}
        <section className="py-20 flex justify-center w-full">
          <div className="w-11/12 max-w-325 mx-auto min-h-[60vh]">
            <ProductSection
              view={view}
              setView={setView}
              cartCount={cart.length}
            />
            <div className="w-full">
              {view === "product" ? (
                <ProductGrid
                  products={productsData}
                  onAddToCart={handleAddToCart}
                />
              ) : (
                <Cart
                  cartItems={cart}
                  onRemove={handleRemove}
                  onCheckout={handleCheckout}
                  isOrderCompleted={isOrderCompleted}
                  onBack={() => {
                    setIsOrderCompleted(false);
                    setView("product");
                  }}
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