// add the photo of mine

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const ConnectWithMe = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_en40hq9', 'template_5k8ez91', form.current, {
        publicKey: 'ya8uE8UM4j66HfXzW',
      })
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          alert(`❌ Mail sending failed: ${error.text || 'Something went wrong.'}`);
        }
      );
  };

  return (
    <section className="relative bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 blur-[160px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Wanna work together?
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Let's{' '}
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
      </motion.div>

      

      {/* Two‑column grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

        {/* ── LEFT — Photo card ── */}  
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Photo frame */}
          <div className="relative w-full max-w-sm mx-auto">
            {/* Green glow blob */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.22) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }}
            />

            {/* Card */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                border: '1.5px solid rgba(34,197,94,0.25)',
                background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 100%)',
                boxShadow: '0 0 60px rgba(34,197,94,0.12), inset 0 0 40px rgba(34,197,94,0.03)',
              }}
            >
              <img
                src="/me.png"
                alt="Ishan Bagra"
                className="w-full"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  height: 'clamp(280px, 50vw, 420px)',
                }}
              />

              {/* Bottom overlay with name */}
              <div
                className="px-6 py-5"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)',
                  marginTop: '-60px',
                  position: 'relative',
                }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-Poppins">Ishan Bagra</h3>
                    <p className="text-zinc-400 text-sm mt-0.5">Full Stack Developer</p>
                  </div>
                  {/* Available badge */}
                  <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {['React', 'Go', 'Node.js', 'Python', 'Supabase'].map(tag => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-zinc-700 font-mono hover:border-green-500/40 hover:text-green-400 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Contact info */}
          <div className="mt-6 w-full max-w-sm space-y-3">
            {[
              { icon: FaEnvelope, label: 'ishanbagra2@gmail.com', href: 'mailto:ishanbagra2@gmail.com' },
              { icon: FaPhone, label: '+91-6377253179', href: 'tel:+916377253179' },
              { icon: FaGithub, label: 'github.com/ishan', href: 'https://github.com/ishanbagra18' },
              { icon: FaLinkedin, label: 'linkedin.com/in/ishan', href: 'https://www.linkedin.com/in/ishan-bagra-52aa95289/' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-zinc-800 hover:border-green-500/30 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <Icon className="text-green-400 w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — Contact form ── */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:gap-5 bg-white/[0.03] border border-zinc-800 rounded-3xl p-5 sm:p-8 backdrop-blur-sm"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
        >
          <h3 className="text-lg font-semibold text-white font-Poppins mb-1">Send a message</h3>

          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="John"
                required
                className="w-full px-4 py-3 bg-black/40 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                required
                className="w-full px-4 py-3 bg-black/40 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@email.com"
              required
              className="w-full px-4 py-3 bg-black/40 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Message</label>
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Hi! I would love to discuss a project with you..."
              className="w-full px-4 py-3 bg-black/40 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
              boxShadow: '0 0 24px rgba(34,197,94,0.25)',
            }}
          >
            Send Message →
          </button>

          <p className="text-center text-zinc-600 text-xs font-mono">
            I typically reply within 24 hours ✦
          </p>
        </motion.form>

      </div>
    </section>
  );
};

export default ConnectWithMe;
