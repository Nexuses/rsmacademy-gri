import { useInView, animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Counter animation component
const Counter = ({ from = 0, to, duration = 2, decimals = 0 }: { from?: number; to: number; duration?: number; decimals?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  
  useEffect(() => {
    if (inView) {
      const animation = animate(count, to, { duration });
      
      const unsubscribe = count.on("change", (value: number) => {
        if (nodeRef.current) {
          nodeRef.current.textContent = decimals === 0 
            ? Math.floor(value).toLocaleString()
            : value.toFixed(decimals);
        }
      });
      
      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [count, inView, to, duration, decimals]);
  
  return <span ref={nodeRef}>{from}</span>;
};

const LearningApproach = () => {
  const approaches = [
    {
      title: "Understand the GRI Standards",
      description: "Learn how the GRI Standards are structured and how to use them in your reports — including Universal, Sector, and Topic Standards.",
      icon: "📊"
    },
    {
      title: "Report on Key Sustainability Issues",
      description: "Gain the ability to report on human rights, environmental impact, and governance, while meeting global due diligence and disclosure expectations.",
      icon: "🌱"
    },
    {
      title: "Create Clear and Trusted Reports",
      description: "Learn how to improve the quality, accuracy, and transparency of your reports to meet the needs of stakeholders and regulators.",
      icon: "📝"
    },
    {
      title: "Align with the UN SDGs and Get Certified",
      description: "See how your work connects to the UN Sustainable Development Goals, and get ready to pass the GRI Certification Exam with confidence.",
      icon: "🎓"
    }
  ];

  return (
    <div className="pt-16 bg-white">
      <div className="container-padding">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-navy">Empower Your ESG Journey with Practical Learning</h2>
          <p className="text-xl text-darkGray">
            Build the skills you need to lead sustainability reporting in your organization. This training offers practical, easy-to-apply knowledge designed for real-world impact.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative" style={{ maxHeight: '360px' }}>
              <img 
                src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"
                alt="Sustainability and Environmental Reporting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1">GRI Standards: Course Overview</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div 
              key={index} 
              className="p-6 bg-white border border-primary rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block w-14 h-14 flex items-center justify-center text-2xl">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-primary transition-colors">
                  {approach.title}
                </h3>
                <p className="text-darkGray">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white rounded-xl overflow-hidden shadow-xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Why This Training Matters</h3>
            <p className="mb-6">
              As global demand for transparency and accountability rises, sustainability reporting has become a critical skill
              across all industries. The GRI Standards are the world's most widely used framework, helping professionals deliver
              trusted, impactful ESG reports that meet stakeholder expectations and regulatory demands.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <motion.div 
                className="p-4 bg-secondary/20 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-3xl font-bold"><Counter from={0} to={100} />+</p>
                <p className="text-sm">Countries Using GRI</p>
              </motion.div>
              <motion.div 
                className="p-4 bg-secondary/20 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-3xl font-bold"><Counter from={0} to={77} />%</p>
                <p className="text-sm">Of the World's Largest 250 Companies</p>
              </motion.div>
              <motion.div 
                className="p-4 bg-secondary/20 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-3xl font-bold"><Counter from={0} to={14000} />+</p>
                <p className="text-sm">Organizations Reporting with GRI</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningApproach;