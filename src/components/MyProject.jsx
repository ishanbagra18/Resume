import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: ' Chat App',
    description: 'Real-time chat application with WebSockets, group & private messaging, and JWT-based auth.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js','Tailwind CSS'],
    link: 'https://github.com/ishanbagra18/mychatapp',
    image: 'https://static.vecteezy.com/system/resources/previews/011/356/168/original/young-boy-and-girl-doing-online-chatting-3d-character-illustration-png.png', // Replace with actual image URL
  },
  {
    title: ' Blog Application',
    description: 'Full-featured blog with user roles, comment system, likes, and a dashboard for authors.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    link: 'https://github.com/ishanbagra18/blog-application',
    image: 'https://i.pinimg.com/originals/8a/f9/a6/8af9a6cb24dcf4b9fb647c6f1e5b815c.gif', // Replace with actual image URL
  },
  {
    title: 'Portfolio Generator',
    description: 'Generate and customize portfolios with user login, templates, and Twilio phone verification.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Twilio','Tailwind CSS'],
    link: 'https://github.com/ishanbagra18/portfolio',
    image: 'https://i.pinimg.com/736x/21/0c/22/210c22ae1d578cc50ad1b201fd7c9ef0.jpg', // Replace with actual image URL
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
      className="min-h-screen bg-black text-white px-6 py-20 lg:px-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Glow Background */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-pink-500 blur-3xl opacity-10 rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 mb-16 text-center">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[100px] md:text-[140px] font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent opacity-10 -top-8 left-0 select-none pointer-events-none whitespace-nowrap"
        >
          PROJECTS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            MY <span className="text-pink-500">PROJECTS</span>
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
            className="h-1 bg-gradient-to-r from-pink-400 to-purple-500 mt-2 mx-auto rounded"
          />
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="relative z-10 flex flex-col gap-14">
        {projects.map(({ title, description, techStack, link, image }, index) => (
          <motion.div
            key={title}
            className="group relative bg-white/5 border border-gray-700 backdrop-blur-md p-6 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer hover:shadow-pink-500/40"
            whileHover={{ scale: 1.015, boxShadow: `0 0 25px #ec489933` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => window.open(link, '_blank')}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                  {title}
                </h3>
                <p className="text-sm mt-2 text-gray-300">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-500/10 border border-pink-500 text-pink-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-sm text-pink-400 font-medium hover:underline">
                  <FaGithub className="mr-2" />
                  View on GitHub
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 w-full">
                <img
                  src={image}
                  alt={title}
                  className="rounded-2xl w-full h-auto max-h-[280px] object-cover  shadow-inner group-hover:scale-105 transition-transform duration-300"
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
