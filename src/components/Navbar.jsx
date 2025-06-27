import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const nameRef = useRef(null);

  useEffect(() => {
    // Animate links from right
    gsap.set(linksRef.current, { x: 100, opacity: 0 });
    gsap.to(linksRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.4,
      ease: 'power3.out',
    });

    // Animate name from left
    gsap.set(nameRef.current, { x: -100, opacity: 0 });
    gsap.to(nameRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);

  const navItems = [
    { label: 'Resume', href: '/ishanresume.pdf' }, // Link to a PDF file in public folder
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishan-bagra-52aa95289/' },
    { label: 'GitHub', href: 'https://github.com/ishanbagra18' },
  ];

  return (
    <nav
      ref={navRef}
      className="w-full bg-[#0a0a0a] text-white px-6 py-4 border-b border-gray-700 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side Links */}
        <div className="flex gap-6 text-sm sm:text-base overflow-hidden font-Oswald">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={(el) => (linksRef.current[index] = el)}
              className="hover:text-green-400 transition duration-200"
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side Name */}
        <div
          ref={nameRef}
          className="font-semibold text-lg sm:text-xl whitespace-nowrap font-mono"
        >
          Web Developer & Designer
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
