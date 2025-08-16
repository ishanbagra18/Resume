import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = {
  role: "SDE Intern (React Native)",
  company: "Udchalo",
  period: "May 19 – August 19",
  description:
    "Worked on mobile app development using React Native. Built UI components from Figma designs and optimized performance for a better user experience.",
};

const Experience = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 drop-shadow-lg mb-10 tracking-wider text-center">
      Experience
    </h2>
    <div className="relative flex flex-col items-center w-full max-w-xl">
      {/* Vertical Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-500 via-green-400/40 to-green-700 rounded opacity-90" />
      {/* Timeline Dot + Icon */}
      <span
        className="absolute left-1/2 -translate-x-1/2 z-10 mt-2"
        aria-hidden="true"
      >
        <span className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg border-4 border-black">
          <Briefcase className="w-7 h-7 text-white" />
        </span>
      </span>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full mt-24 bg-black/70 ring-2 ring-green-500/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl shadow-green-700/50 hover:shadow-green-400/70 transition"
        tabIndex={0}
        aria-label={`${experience.role} at ${experience.company}`}
      >
        <h3 className="text-2xl font-bold text-green-400 mb-1">{experience.role}</h3>
        <div className="text-green-300 text-lg mb-0.5">{experience.company}</div>
        <div className="text-xs text-gray-400 mb-3">{experience.period}</div>
        <p className="text-gray-200 text-base">{experience.description}</p>
      </motion.div>
    </div>
  </section>
);

export default Experience;
