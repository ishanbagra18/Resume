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
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-black relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-20 text-center relative z-10">
      Work <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
    </h2>

    <div className="relative flex flex-col items-center w-full max-w-xl z-10">
      {/* Vertical Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-green-500/80 via-zinc-800 to-zinc-950 rounded-full" />
      
      {/* Timeline Dot + Icon */}
      <span
        className="absolute left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] border-2 border-black">
          <Briefcase className="w-5 h-5 text-white" />
        </span>
      </span>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full mt-16 bg-white/5 border border-zinc-800 backdrop-blur-md rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition duration-300"
        tabIndex={0}
        aria-label={`${experience.role} at ${experience.company}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
          <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{experience.role}</h3>
          <span className="text-xs font-mono font-semibold tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full w-fit">
            {experience.period}
          </span>
        </div>
        <div className="text-zinc-300 text-lg font-medium mb-4">{experience.company}</div>
        <p className="text-zinc-400 text-base font-light leading-relaxed">{experience.description}</p>
      </motion.div>
    </div>
  </section>
);

export default Experience;
