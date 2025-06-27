import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 lg:px-24 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left: Text */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Ishan Bagra. All rights reserved.
        </div>

        {/* Center: Socials */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/ishanbagra18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ishan-bagra-52aa95289/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ishanbagra18/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ishanbagra2@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Scroll to top or slogan */}
        <div className="text-sm text-gray-500 text-center md:text-right italic">
          Let's build something great ✨
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
