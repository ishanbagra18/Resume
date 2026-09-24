import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

export function SmoothCursor({
  cursor,
  springConfig = { damping: 35, stiffness: 350, mass: 0.15, restDelta: 0.001 },
  className = "",
  ...props
}) {
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);

  const rotate = useTransform([velocityX, velocityY], ([latestX, latestY]) => {
    if (Math.abs(latestX) < 2 && Math.abs(latestY) < 2) return 0;
    const angle = Math.atan2(latestY, latestX) * (180 / Math.PI);
    return angle + 90;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect if user is on a touch device
    const touchQuery = window.matchMedia("(pointer: coarse)");
    if (touchQuery.matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over interactive elements
      const target = e.target;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          window.getComputedStyle(target).cursor === "pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-300 ${className}`}
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
      }}
      {...props}
    >
      {cursor ? (
        cursor
      ) : (
        <motion.div
          animate={{
            scale: isHovered ? 1.4 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative -top-1 -left-1"
        >
          <motion.div style={{ rotate }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            >
              <path
                d="M3 3L10.07 19.97L13.58 13.58L19.97 10.07L3 3Z"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default SmoothCursor;
