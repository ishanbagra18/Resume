import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';

const ConnectWithMe = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus(null);

    emailjs
      .sendForm('service_en40hq9', 'template_5k8ez91', form.current, {
        publicKey: 'ya8uE8UM4j66HfXzW',
      })
      .then(
        () => {
          setLoading(false);
          setFormStatus({ success: true, message: 'Message sent successfully! I will reply within 24 hours.' });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error);
          setFormStatus({ success: false, message: `Mail delivery failed: ${error.text || 'Something went wrong.'}` });
        }
      );
  };

  return (
    <section id="contact" className="relative bg-slate-50 dark:bg-black text-slate-900 dark:text-white py-24 px-4 sm:px-6 lg:px-20 overflow-hidden border-t border-slate-200 dark:border-zinc-900 transition-colors duration-400">

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[160px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          LET'S{' '}
          <span className="bg-gradient-to-r from-green-500 via-teal-400 to-teal-600 dark:from-green-400 dark:via-teal-300 dark:to-teal-500 bg-clip-text text-transparent">
            CONNECT
          </span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-3 mx-auto w-24 rounded-full" />
      </motion.div>

      {/* Two‑column grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left — Photo card & Info */}
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
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.25) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }}
            />

            {/* Card */}
            <div
              className="relative overflow-hidden rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-green-500/30 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] bg-gradient-to-b from-slate-100 dark:from-zinc-900/60 via-slate-200/80 dark:via-zinc-950/80 to-slate-900 dark:to-black"
            >
              <img
                src="/me.png"
                alt="Ishan Bagra"
                className="w-full h-[340px] sm:h-[380px] md:h-[420px] object-cover object-[center_82%] block transition-all duration-300"
              />

              {/* Bottom overlay with name */}
              <div
                className="px-6 py-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent dark:from-black dark:via-black/85 dark:to-transparent -mt-20 relative z-10 text-white"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-Poppins">Ishan Bagra</h3>
                    <p className="text-zinc-300 dark:text-zinc-400 text-xs font-mono mt-0.5">Full Stack Developer</p>
                  </div>
                  {/* Available badge */}
                  <div className="flex items-center gap-1.5 bg-green-500/20 dark:bg-green-500/10 border border-green-500/40 dark:border-green-500/30 rounded-full px-3 py-1 mb-1 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 dark:text-green-400 text-xs font-medium font-mono">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {['React', 'Go', 'Node.js', 'React Native', 'Supabase', 'Python'].map(tag => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 font-mono hover:border-green-500/40 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Quick Copy Contact Links */}
          <div className="mt-6 w-full max-w-sm space-y-2.5">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 hover:border-green-500/40 transition-all shadow-sm group">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-600 dark:text-green-400 w-4 h-4 flex-shrink-0" />
                <span className="text-slate-800 dark:text-zinc-200 text-xs sm:text-sm font-mono">ishanbagra2@gmail.com</span>
              </div>
              <button
                onClick={() => copyToClipboard('ishanbagra2@gmail.com', 'email')}
                className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-1 px-2 py-1 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
              >
                {copiedItem === 'email' ? <FaCheck className="text-green-600 dark:text-green-400" /> : <FaCopy />}
                <span>{copiedItem === 'email' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 hover:border-green-500/40 transition-all shadow-sm group">
              <div className="flex items-center gap-3">
                <FaPhone className="text-teal-600 dark:text-teal-400 w-4 h-4 flex-shrink-0" />
                <span className="text-slate-800 dark:text-zinc-200 text-xs sm:text-sm font-mono">+91-6377253179</span>
              </div>
              <button
                onClick={() => copyToClipboard('+916377253179', 'phone')}
                className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 px-2 py-1 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
              >
                {copiedItem === 'phone' ? <FaCheck className="text-teal-600 dark:text-teal-400" /> : <FaCopy />}
                <span>{copiedItem === 'phone' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/ishanbagra18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all text-xs font-mono shadow-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ishan-bagra-52aa95289/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-mono shadow-sm"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 bg-white/90 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.7)] text-slate-900 dark:text-white"
        >
          <div className="mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-Poppins">Send Me a Message</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">Have a project or opportunity? Let's discuss.</p>
          </div>

          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="John"
                required
                className="w-full px-4 py-3 bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-zinc-800 rounded-xl text-slate-900 dark:text-white text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                required
                className="w-full px-4 py-3 bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-zinc-800 rounded-xl text-slate-900 dark:text-white text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              required
              className="w-full px-4 py-3 bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-zinc-800 rounded-xl text-slate-900 dark:text-white text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Hi Ishan, I'd love to discuss a project..."
              className="w-full px-4 py-3 bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-zinc-800 rounded-xl text-slate-900 dark:text-white text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all resize-none"
            />
          </div>

          {/* Status Message Alert */}
          {formStatus && (
            <div
              className={`p-3 rounded-xl text-xs font-mono border ${
                formStatus.success
                  ? 'bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
              boxShadow: '0 0 25px rgba(34,197,94,0.3)',
            }}
          >
            {loading ? (
              <span className="font-mono text-xs animate-pulse">Sending Message...</span>
            ) : (
              <>
                <FaPaperPlane className="text-black text-xs" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <p className="text-center text-zinc-500 dark:text-zinc-600 text-xs font-mono pt-1">
            ⚡ Fast response guaranteed within 24 hours
          </p>
        </motion.form>

      </div>
    </section>
  );
};

export default ConnectWithMe;

