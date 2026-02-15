import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, DollarSign } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Organizing Team - HOD Outreach",
      company: "RIFT Hackathon (Pan-India)",
      period: "Feb 2026",
      description:
        "Head of College Outreach for RIFT, a massive student-led Pan-India hackathon spanning Bangalore, Noida, Pune, and Lucknow.",
      achievements: [
        "Achieved 8000+ registrations by leading a strategic nationwide outreach campaign.",
        "Secured key corporate sponsorships to fund event logistics and prize pools.",
        "Built and managed a network of campus ambassadors across major tech hubs.",
      ],
    },
    {
      role: "Research Lead",
      company: "Tech Club, PW IOI",
      period: "2025 - Present",
      description:
        "Driving technical growth by researching emerging tools, hackathons, and development ecosystems to upkill the student community.",
      achievements: [
        "Researching and introducing new development tools/workflows to enhance productivity.",
        "Facilitating connections with global developer communities like Google Developer Groups (GDG).",
        "Curating resources and strategies for effective networking and career growth in tech.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-[#1a1025] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in leadership, organization, and technical execution.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0f0715]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:border-purple-500/30 transition-colors shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="text-purple-500" size={24} />
                    {exp.role}
                  </h3>
                  <p className="text-lg text-purple-300 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full text-sm w-fit">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="mt-1 min-w-[20px]">
                      {i === 0 ? (
                        <Award className="text-yellow-400" size={20} />
                      ) : i === 1 ? (
                        <DollarSign className="text-green-400" size={20} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                      )}
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
