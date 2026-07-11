import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: 'Building Chatbots with React & GPT APIs',
    issuer: 'H2 Skills',
    description: 'Certificate of completion for successfully building interactive chatbots using React.js and GPT APIs, focusing on real-world conversational interfaces.',
    image: '/c1.png',
    link: '/c1.png',
  },
  {
    title: 'Summer School of Web3.0 & Hackathons',
    issuer: 'IIIT Sri City',
    description: 'Awarded for active participation in the Web3.0 Summer School and Hackathons hosted by IIIT Sri City, exploring blockchain, smart contracts, and decentralized applications.',
    image: '/c2.png',
    link: '/c2.png',
  },
];

const MyCertificate = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-24 lg:px-24 overflow-hidden relative flex flex-col justify-center"
    >
      {/* Heading Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-24">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[100px] md:text-[140px] font-extrabold bg-gradient-to-r from-teal-500 to-green-300 bg-clip-text text-transparent opacity-5 -top-10 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap"
        >
          CERTIFICATES  
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            MY <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">CERTIFICATES</span>
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
            className="h-1 bg-gradient-to-r from-teal-400 to-green-400 mt-3 mx-auto rounded"
          />
        </motion.div>
      </div>

      {/* Certificate Cards Row */}
      <div className="flex flex-wrap justify-center gap-10 z-10 max-w-6xl mx-auto w-full">
        {certificates.map(({ title, issuer, description, image, link }, index) => (
          <motion.div
            key={title}
            className="w-full sm:w-[340px] lg:w-[380px] bg-white/5 border border-zinc-800 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.025 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            onClick={() => window.open(link, '_blank')}
          >
            <div className="overflow-hidden rounded-t-3xl border-b border-zinc-800">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 text-center space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">{title}</h3>
              <p className="text-teal-400 text-sm font-medium">
                Issued by <span className="text-zinc-300">{issuer}</span>
              </p>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{description}</p>

              <div className="flex justify-center items-center gap-2 text-sm text-teal-400 font-semibold group-hover:text-teal-300 transition-colors pt-2">
                <FaExternalLinkAlt size={12} />
                <span>View Certificate</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyCertificate;
