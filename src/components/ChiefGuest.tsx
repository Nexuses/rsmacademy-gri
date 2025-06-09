const ChiefGuest = () => {
  return (
    <div className="py-16 bg-navy text-white">
      <div className="container-padding">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
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
              <div className="h-full flex flex-col justify-center">
                <div>
                  <p className="mb-3 text-sm">
                    With over 25 years of professional experience—including 16
                    years in ESG—Kareem brings unmatched insight into corporate
                    sustainability, reporting, and strategy.
                  </p>
                  <p className="mb-3 text-sm">
                    Holding an MBA in Renewables and Sustainability, he has
                    advised top organizations across sectors on embedding ESG
                    into business transformation.
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
                <a 
                  href="https://www.linkedin.com/in/kareem-abu-eid-mba-592a98b8/?originalSubdomain=sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#005885] text-white py-1 px-3 rounded-md transition-colors text-sm mt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefGuest;
