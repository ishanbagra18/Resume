import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaAward } from 'react-icons/fa';
import { Plus } from 'lucide-react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/core/morphing-dialog';

const certificates = [
  {
    title: 'Building Chatbots with React & GPT APIs',
    issuer: 'H2 Skills',
    type: 'Professional Certification',
    date: '2024',
    description: 'Certificate of completion for successfully building interactive chatbots using React.js and GPT APIs, focusing on real-world conversational interfaces, state management, and OpenAI integration.',
    skillsVerified: ['React.js', 'GPT-3.5 / GPT-4 APIs', 'Chatbot UI', 'Async State'],
    image: '/c1.png',
    link: '/c1.png',
  },
  {
    title: 'Summer School of Web3.0 & Hackathons',
    issuer: 'IIIT Sri City',
    type: 'National Workshop & Hackathon',
    date: '2024',
    description: 'Awarded for active participation in the Web3.0 Summer School and Hackathons hosted by IIIT Sri City, exploring blockchain architecture, smart contracts, and decentralized application development.',
    skillsVerified: ['Web3.0', 'Blockchain Basics', 'Smart Contracts', 'DApps'],
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
      id="certificates"
      ref={sectionRef}
      className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white px-6 py-24 lg:px-20 overflow-hidden relative flex flex-col justify-center border-t border-slate-200 dark:border-zinc-900 transition-colors duration-400"
    >
      {/* Heading Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Verified Honors & Certifications
        </p>

        <div className="relative inline-block max-w-full">
          {/* Parallax Background Text centered directly behind main title */}
          <motion.h1
            style={{ y: yParallax }}
            className="absolute text-[50px] sm:text-[85px] md:text-[120px] lg:text-[150px] leading-none font-black bg-gradient-to-r from-teal-500 via-green-400 to-cyan-400 bg-clip-text text-transparent opacity-20 dark:opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider font-AlumniSansSC z-0"
          >
            CREDENTIALS
          </motion.h1>

          <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            MY <span className="bg-gradient-to-r from-teal-500 via-green-400 to-cyan-500 dark:from-teal-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">CERTIFICATES</span>
          </h2>
        </div>

        <motion.div
          animate={{ width: ['10%', '20%', '5%'] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="relative z-10 h-1 bg-gradient-to-r from-teal-400 to-green-400 mt-4 mx-auto rounded-full"
        />
      </motion.div>

      {/* Certificate Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 z-10 max-w-6xl mx-auto w-full">
        {certificates.map(({ title, issuer, type, date, description, skillsVerified, image, link }) => (
          <MorphingDialog
            key={title}
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <MorphingDialogTrigger
              style={{
                borderRadius: '24px',
              }}
              className="w-full sm:w-[360px] lg:w-[420px] bg-white/90 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl hover:border-teal-500/50 hover:shadow-[0_0_35px_rgba(20,184,166,0.25)] transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="px-5 py-3 border-b border-slate-200 dark:border-zinc-800/80 bg-slate-100/80 dark:bg-zinc-900/50 flex items-center justify-between text-xs font-mono">
                  <span className="text-teal-600 dark:text-teal-400 flex items-center gap-1.5 font-semibold">
                    <FaCheckCircle className="text-teal-600 dark:text-teal-400 text-xs" /> Verified Credential
                  </span>
                  <span className="text-zinc-500">{date}</span>
                </div>

                {/* Certificate Thumbnail Container */}
                <div className="overflow-hidden border-b border-slate-200 dark:border-zinc-800/80 bg-slate-50 dark:bg-zinc-950 p-4 flex items-center justify-center relative">
                  <MorphingDialogImage
                    src={image}
                    alt={title}
                    className="w-full h-52 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-3 text-left">
                  <MorphingDialogTitle className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {title}
                  </MorphingDialogTitle>
                  
                  <MorphingDialogSubtitle className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    Issued by <span className="text-teal-600 dark:text-teal-300 font-semibold">{issuer}</span> • {type}
                  </MorphingDialogSubtitle>
                  
                  <p className="text-slate-600 dark:text-zinc-300 text-xs font-light leading-relaxed line-clamp-2">
                    {description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skillsVerified.map((sk) => (
                      <span key={sk} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-slate-200 dark:border-zinc-800/80 bg-slate-100/50 dark:bg-zinc-900/30 flex items-center justify-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors">
                <Plus size={14} />
                <span>Enlarge Certificate View</span>
              </div>
            </MorphingDialogTrigger>

            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{
                  borderRadius: '24px',
                }}
                className="pointer-events-auto relative flex flex-col w-full max-w-[92vw] sm:max-w-[720px] max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white shadow-2xl dark:shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-5 sm:p-7 z-50"
              >
                {/* Close Button Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-teal-600 dark:text-teal-400 text-lg" />
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Official Certificate Viewer</span>
                  </div>
                  <MorphingDialogClose className="relative top-0 right-0 z-30 text-slate-800 dark:text-white" />
                </div>

                {/* Title & Subtitle at Top */}
                <div className="mt-4 space-y-1.5 text-left">
                  <MorphingDialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {title}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-semibold font-mono">
                    Issued by <span className="text-slate-800 dark:text-zinc-200">{issuer}</span> — {type} ({date})
                  </MorphingDialogSubtitle>
                </div>

                {/* Certificate Image Container */}
                <div className="w-full bg-slate-100 dark:bg-zinc-900/90 rounded-2xl border border-slate-200 dark:border-zinc-800/80 p-3 sm:p-4 flex items-center justify-center my-4 overflow-hidden shadow-inner">
                  <MorphingDialogImage
                    src={image}
                    alt={title}
                    className="max-h-[42vh] w-full object-contain rounded-lg shadow-xl"
                  />
                </div>

                {/* Info & Description */}
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.98, y: 10 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.98, y: 10 },
                  }}
                  className="space-y-4 pt-1 text-left"
                >
                  <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                    {description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Skills Verified:</span>
                    <div className="flex flex-wrap gap-2">
                      {skillsVerified.map((sk) => (
                        <span key={sk} className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/30">
                          ✓ {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-zinc-800">
                    <a
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-green-400 text-black font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={12} />
                      Open Original Certificate Image
                    </a>
                  </div>
                </MorphingDialogDescription>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>
    </section>
  );
};

export default MyCertificate;


