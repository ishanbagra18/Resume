import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ConnectWithMe = () => {
  const form = useRef(null);

  const { scrollYProgress } = useScroll({
    target: form,
    offset: ['start end', 'end start'],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

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
          console.error('FAILED...', error.text);
          alert('❌ Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 lg:px-24 overflow-hidden flex flex-col justify-center items-center">
      {/* Glow Background */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-pink-500 blur-3xl opacity-10 rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 text-center"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">
          WANNA WORK TOGETHER ?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          <span className="text-white">LET'S </span>
          <span className="text-green-400">CONNECT</span>
          <span className="text-white"> →</span>
        </h2>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl bg-white/5 border border-gray-700 backdrop-blur-md p-8 rounded-3xl shadow-lg space-y-6"
      >
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm mb-1 text-gray-300">First Name:</label>
            <input
              type="text"
              name="first_name"
              placeholder="John"
              required
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1 text-gray-300">Last Name:</label>
            <input
              type="text"
              name="last_name"
              placeholder="Doe"
              required
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@email.com"
            required
            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Your Message:</label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Hi! I would like to connect with you."
            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default ConnectWithMe;
