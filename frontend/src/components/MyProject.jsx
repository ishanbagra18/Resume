import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'GeetHub',
    description:
      'A full-stack music streaming platform with JWT authentication, playlist management, likes, uploads, listening history, and a persistent music player with real-time features.',
    techStack: [
      'React',
      'Go',
      'gin',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
      'Cloudinary'
    ],
    link: 'https://github.com/ishanbagra18/Geethub-clientside',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200',
  },

  {
    title: 'ZeroWaste Platform',
    description:
      'A platform connecting vendors, NGOs, and volunteers to redistribute surplus food and products. Features secure authentication, real-time notifications, claims, messaging, and role-based access control.',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Cloudinary',
      'Tailwind CSS'
    ],
    link: 'https://github.com/ishanbagra18/zero_waste',
    image: 'https://i.pinimg.com/736x/3f/8e/45/3f8e452f8a44c901812536b4771ca28d.jpg',
  },

  {
    title: 'Portfolio.ai',
    description:
      'An AI-powered portfolio generator that creates customizable developer portfolios with authentication, multiple templates, resume-based data, and Twilio OTP verification.',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'Supabase',
      'Tailwind CSS',
      'RAG',
      'AI',
      'LLM'
    ],
    link: 'https://github.com/ishanbagra18/portfolio.ai',
    image: 'https://i.pinimg.com/736x/21/0c/22/210c22ae1d578cc50ad1b201fd7c9ef0.jpg',
  },
];

const MyProjects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-20 lg:px-24 overflow-hidden flex flex-col justify-center relative"
    >
      {/* Glow Background */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 mb-16 text-center">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[100px] md:text-[140px] font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent opacity-5 -top-8 left-0 select-none pointer-events-none whitespace-nowrap"
        >
          PROJECTS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            MY <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <motion.div
            animate={{ width: ['10%', '20%', '0%'] }}
            initial={{ width: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-1 bg-gradient-to-r from-pink-400 to-purple-500 mt-3 mx-auto rounded"
          />
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="relative z-10 flex flex-col gap-14 max-w-6xl mx-auto w-full">
        {projects.map(({ title, description, techStack, link, image }, index) => (
          <motion.div
            key={title}
            className="group relative bg-white/5 border border-zinc-800 backdrop-blur-md p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
            whileHover={{ scale: 1.015 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            onClick={() => window.open(link, '_blank')}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Text Section */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-pink-400 transition-colors">
                  {title}
                </h3>
                <p className="text-base text-zinc-400 font-light leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs px-3.5 py-1 rounded-full font-semibold tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center text-sm text-pink-400 font-semibold hover:text-pink-300 transition-colors">
                  <FaGithub className="mr-2" size={16} />
                  View on GitHub
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 w-full overflow-hidden rounded-2xl border border-zinc-850 shadow-inner">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto max-h-[260px] object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
