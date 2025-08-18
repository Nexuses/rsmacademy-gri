// import { Briefcase, Leaf, Users } from 'lucide-react';
// import { motion } from 'framer-motion';

const TrainerProfile = () => {
  // const trainers = [
  //   {
  //     name: "Merin Abraham",
  //     title: "GRI Certified Trainer",
  //     linkedin: "https://www.linkedin.com/in/merin-abraham-895960251/",
  //     image: "/Merin.png",
  //     description: "An architect-turned-sustainability specialist, Merin couples a Master's in Sustainable Built Environment (UNSW) with LEED Green Associate credentials. Her work spans consultancy, teaching and innovative urban-design projects, weaving ESG principles into hospitality, healthcare and mixed-use developments across the GCC, Australia and Asia.",
  //     achievements: [
  //       { icon: <Leaf className="h-5 w-5" />, title: "Integrates ESG and green-building standards into large-scale master-plans" },
  //       { icon: <Users className="h-5 w-5" />, title: "Guides client teams through GRI-aligned sustainability reports and retrofit programmes" },
  //       { icon: <Briefcase className="h-5 w-5" />, title: "Blends academic insight with on-the-ground project delivery for practical outcomes" }
  //     ]
  //   },
  //   {
  //     name: "Yousef Abdulhadi",
  //     title: "GRI Certified Trainer",
  //     linkedin: "https://www.linkedin.com/in/yousef-abdulhadi-beng-60925713b/",
  //     image: "/Yousef.png",
  //     description: "With an engineering foundation and deep expertise in GHG accounting, climate-risk management and ESG strategy, Yousef helps organisations translate sustainability ambitions into measurable action. He has steered manufacturing, retail and energy clients across the MENA region through complex emissions inventories and transformation roadmaps, leveraging fluency in both Arabic and English to bridge global standards with local realities.",
  //     achievements: [
  //       { icon: <Briefcase className="h-5 w-5" />, title: "Builds and verifies GHG inventories in line with leading protocols" },
  //       { icon: <Leaf className="h-5 w-5" />, title: "Develops climate-risk assessments and forward-looking ESG strategies" },
  //       { icon: <Users className="h-5 w-5" />, title: "Advises cross-sector clients on embedding sustainability within core operations" }
  //     ]
  //   }
  // ];

  // Animation variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: { 
  //     y: 0, 
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 12
  //     }
  //   }
  // };

  // const iconVariants = {
  //   hidden: { scale: 0 },
  //   visible: { 
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 200,
  //       delay: 0.2
  //     }
  //   }
  // };

  return (
    // <div className="pb-16 bg-white">
    <div className="bg-white">
      <div className="container-padding">
        {/* <div className="text-center mb-8"> */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy mb-3">Learn from GRI-Certified Trainers</h2>
          <p className="text-lg text-darkGray mx-auto" style={{ maxWidth: "90%", lineHeight: "1.5" }}>
            Advance your sustainability journey with guidance from GRI Certified Trainers who blend 
            technical expertise with hands-on experience. Our instructors bring deep knowledge in ESG 
            reporting, stakeholder engagement, and materiality—empowering you to apply the GRI 
            Standards with clarity and confidence across diverse industries.
          </p>
        </div>

        {/* <div className="space-y-8">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 justify-center md:justify-start">
                        <h3 className="text-2xl font-bold text-navy">{trainer.name}</h3>
                        <a 
                          href={trainer.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center bg-[#0077B5] hover:bg-[#005885] text-white p-1 rounded-md transition-colors"
                          aria-label={`Connect with ${trainer.name} on LinkedIn`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                      </div>
                      <p className="text-primary font-medium">{trainer.title}</p>
                    </motion.div>
                    
                    <motion.p 
                      className="text-darkGray mb-5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {trainer.description}
                    </motion.p>
                    
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <h4 className="font-bold text-navy md:col-span-3 mb-1">Highlights</h4>
                      {trainer.achievements.map((achievement, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                          variants={itemVariants}
                          whileHover={{ 
                            scale: 1.03, 
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                          }}
                        >
                          <motion.div 
                            className="text-primary bg-white p-2 rounded-full shadow-sm"
                            variants={iconVariants}
                          >
                            {achievement.icon}
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm">{achievement.title}</h4>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TrainerProfile;
