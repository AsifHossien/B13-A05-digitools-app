import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white py-24 flex justify-center">
      <div className="w-11/12 max-w-300 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-[35px] border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all flex flex-col text-left">
            <h3 className="text-xl font-extrabold text-gray-800 mb-1">
              Starter
            </h3>
            <p className="text-xs text-gray-400 mb-6 font-medium uppercase tracking-wider">
              Perfect for getting started
            </p>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900">$0</span>
              <span className="text-gray-400 text-sm font-semibold">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-8 grow">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Basic templates
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Community Support
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                1 project per month
              </li>
            </ul>
            <button className="btn btn-primary hover:bg-info rounded-3xl font-bold py-3 h-auto min-h-0 text-sm">
              Get Started Free
            </button>
          </div>
          <div className="relative p-8 rounded-[35px] bg-primary text-white shadow-2xl shadow-primary/30 flex flex-col text-left border-2 border-primary">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-md">
              Most Popular
            </div>
            <h3 className="text-xl font-extrabold mb-1">Pro</h3>
            <p className="text-xs text-white/60 mb-6 font-medium uppercase tracking-wider">
              Best for professionals
            </p>
            <div className="mb-6">
              <span className="text-4xl font-black">$29</span>
              <span className="text-white/60 text-sm font-semibold">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-8 grow">
              <li className="flex items-center gap-3 text-sm text-white">
                <i className="fa-solid fa-circle-check text-white text-xs"></i>{" "}
                Access to all premium tools
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <i className="fa-solid fa-circle-check text-white text-xs"></i>{" "}
                Unlimited templates
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <i className="fa-solid fa-circle-check text-white text-xs"></i>{" "}
                Priority support
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <i className="fa-solid fa-circle-check text-white text-xs"></i>{" "}
                Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <i className="fa-solid fa-circle-check text-white text-xs"></i>{" "}
                Cloud sync
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <i className="fa-solid fa-circle-check text-white text-xs"></i>{" "}
                Advanced analytics
              </li>
            </ul>
            <button className="btn bg-white text-primary border-none hover:bg-gray-100 rounded-3xl font-bold py-3 h-auto min-h-0 text-sm">
              Start Pro Trial
            </button>
          </div>
          <div className="p-8 rounded-[35px] border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all flex flex-col text-left">
            <h3 className="text-xl font-extrabold text-gray-800 mb-1">
              Enterprise
            </h3>
            <p className="text-xs text-gray-400 mb-6 font-medium uppercase tracking-wider">
              For teams and businesses
            </p>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900">$99</span>
              <span className="text-gray-400 text-sm font-semibold">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-8 grow">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Team collaboration
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Custom integrations
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Dedicated support
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                SLA guarantee
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-circle-check text-primary text-xs"></i>{" "}
                Custom branding
              </li>
            </ul>
            <button className="btn btn-primary hover:bg-info rounded-3xl font-bold py-3 h-auto min-h-0 text-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
