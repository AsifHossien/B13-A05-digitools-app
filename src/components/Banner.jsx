const Banner = () => {
  return (
    <div className="relative py-16 md:py-24 w-11/12 max-w-[1300px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Content */}
        <div className="flex flex-col text-left order-2 lg:order-1 flex-1">
          {/* THE NEW BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#F5F3FF] border border-purple-100 rounded-full px-4 py-1.5 mb-8 w-fit shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-[#7C3AED] tracking-tight">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Supercharge Your <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed font-medium">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn bg-[#7C3AED] border-none px-10 h-14 rounded-full text-white font-bold shadow-xl shadow-purple-100 hover:bg-[#6D28D9] transition-all normal-case">
              Explore Products
            </button>
            <button className="btn btn-outline border-2 border-gray-100 px-8 h-14 rounded-full flex gap-2 text-gray-700 hover:bg-gray-50 font-bold normal-case">
              <img src="/src/assets/Play.png" alt="Play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end order-1 lg:order-2 flex-1">
          <div className="relative w-full max-w-lg">
            <img
              src="/src/assets/banner.png"
              alt="Digital Tools"
              className="w-full h-auto object-contain drop-shadow-2xl animate-pulse-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;