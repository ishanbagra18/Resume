import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const nameRef = useRef(null);

  useEffect(() => {
    // Animate links from right
    gsap.set(linksRef.current, { x: 50, opacity: 0 });
    gsap.to(linksRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Animate name from left
    gsap.set(nameRef.current, { x: -50, opacity: 0 });
    gsap.to(nameRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    });
  }, []);

  const navItems = [
    { label: 'Resume', href: 'https://drive.google.com/file/d/1PjRvjmDntAhiu1-Y_h8uoU8zTx4uZzqV/view?usp=sharing' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishan-bagra-52aa95289/' },
    { label: 'GitHub', href: 'https://github.com/ishanbagra18' },
  ];

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-3 sm:px-4 md:px-8">
      <nav
        ref={navRef}
        className="max-w-5xl mx-auto backdrop-blur-md bg-black/40 border border-white/10 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex justify-between items-center transition-all duration-300"
      >
        {/* Left Side Links */}
        <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-semibold font-Poppins">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={(el) => (linksRef.current[index] = el)}
              className="relative py-1 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side Name — hidden on very small screens */}
        <div
          ref={nameRef}
          className="hidden xs:block font-bold text-[10px] sm:text-xs tracking-widest bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent uppercase font-mono"
        >
          Web Developer & Designer
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
