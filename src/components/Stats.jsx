const Stats = () => {
  return (
    /* Full-width purple background wrapper */
    <div className="w-full bg-purple-600 py-12 mb-16 overflow-hidden">
      {/* Centered content wrapper matching your 11/12 grid */}
      <div className="w-11/12 max-w-325 mx-auto">
        <div className="stats w-full bg-transparent border-none text-white grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat place-items-center border-none">
            <div className="stat-value text-4xl md:text-5xl font-black">
              50K+
            </div>
            <div className="stat-desc text-lg text-purple-100 font-medium">
              Active Users
            </div>
          </div>
          <div className="stat place-items-center border-l-0 md:border-l-2 border-purple-400">
            <div className="stat-value text-4xl md:text-5xl font-black">
              800+
            </div>
            <div className="stat-desc text-lg text-purple-100 font-medium">
              Premium Tools
            </div>
          </div>
          <div className="stat place-items-center border-l-0 md:border-l-2 border-purple-400">
            <div className="stat-value text-4xl md:text-5xl font-black">
              4.9
            </div>
            <div className="stat-desc text-lg text-purple-100 font-medium">
              Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
