import React from "react";

const Steps = () => {
  const stepsData = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: "/src/assets/user.png", // Using the uploaded user.png
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: "/src/assets/package.png", // Using the uploaded package.png
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "/src/assets/rocket.png", // Using the uploaded rocket.png
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-11/12 max-w-325 mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="relative bg-purple-50 border border-gray-200 rounded-[2.5rem] p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100 group"
            >
              
              <div className="absolute top-8 right-8 w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-200">
                {step.id}
              </div>
              <div className="w-28 h-28 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black text-[#111827] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
