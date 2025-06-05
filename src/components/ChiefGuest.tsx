const ChiefGuest = () => {
  return (
    <div className="py-6 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">
            Exclusive Live Q&A in Final Session
          </h3>
          <p className="text-base max-w-2xl mx-auto">
            Join Kareem as he shares actionable best practices on ESG
            implementation and GRI reporting—tailored to challenges and
            opportunities in the MENA region.
          </p>
        </div>

        <div className="bg-navy/80 rounded-xl overflow-hidden shadow-lg border border-white/20 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left content section with description */}
            <div className="md:w-1/2 p-6">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="mb-3 text-sm">
                    With over 25 years of professional experience—including 16
                    years in ESG—Kareem brings unmatched insight into corporate
                    sustainability, reporting, and strategy. Holding an MBA in
                    Renewables and Sustainability, he has advised top
                    organizations across sectors on embedding ESG into business
                    transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right section with image and name/designation */}
            <div className="md:w-1/2 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-[250px] md:h-auto overflow-hidden">
                <img
                  src="/Kareem.png"
                  alt="Kareem Abu Eid"
                  className="w-full h-full object-cover object-top transition-all duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="md:w-1/2 p-4 flex flex-col justify-center bg-primary/80">
                <h3 className="text-xl font-bold mb-1">Kareem Abu Eid</h3>
                <p className="text-base text-white/90 mb-2">
                  MENA Region Lead – ESG & Sustainability Services, RSM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefGuest;
