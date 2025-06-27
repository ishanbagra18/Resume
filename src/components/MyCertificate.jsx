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
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-24 lg:px-24 overflow-hidden"
    >
      {/* Heading Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-teal-400 blur-3xl opacity-10 pointer-events-none rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-24">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[120px] md:text-[160px] font-extrabold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent opacity-10 -top-10  -translate-x-1/2 select-none pointer-events-none whitespace-nowrap"
        >
          CERTIFICATES  
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            MY <span className="text-green-400">CERTIFICATES</span>
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
            className="h-1 bg-gradient-to-r from-green-400 to-green-300 mt-2 mx-auto rounded"
          />
        </motion.div>
      </div>

      {/* Certificate Cards Row */}
      <div className="flex flex-wrap justify-center gap-10 z-10">
        {certificates.map(({ title, issuer, description, image, link }, index) => (
          <motion.div
            key={title}
            className="w-[320px] md:w-[360px] lg:w-[400px] bg-white/5 border border-gray-700 rounded-3xl shadow-md backdrop-blur-lg hover:shadow-teal-400/40 transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => window.open(link, '_blank')}
          >
            <img
              src={image}
              alt={title}
              className="rounded-t-3xl w-full h-48 object-cover border-b border-gray-600"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-green-300 text-sm mb-2">Issued by <span className="font-medium">{issuer}</span></p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

              <div className="flex justify-center items-center gap-2 text-sm text-green-400 font-medium hover:underline">
                <FaExternalLinkAlt />
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
