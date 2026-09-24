import React, { createContext, useContext, useState, useId, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MorphingDialogContext = createContext(null);

export function MorphingDialog({ children, transition }) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <MorphingDialogContext.Provider
      value={{
        isOpen,
        setIsOpen,
        uniqueId,
        triggerRef,
        transition: transition || { type: 'spring', bounce: 0.05, duration: 0.25 },
      }}
    >
      {children}
    </MorphingDialogContext.Provider>
  );
}

export function useMorphingDialog() {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error('MorphingDialog components must be used within MorphingDialog');
  }
  return context;
}

export function MorphingDialogTrigger({ children, className = '', style = {}, as = 'div', ...props }) {
  const { setIsOpen, uniqueId, triggerRef, transition } = useMorphingDialog();
  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      transition={transition}
      onClick={() => setIsOpen(true)}
      style={{ cursor: 'pointer', ...style }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

export function MorphingDialogContainer({ children }) {
  const { isOpen, setIsOpen } = useMorphingDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
          />
          {children}
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function MorphingDialogContent({ children, className = '', style = {}, ...props }) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      transition={transition}
      style={style}
      className={`relative z-10 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MorphingDialogImage({ src, alt, className = '', style = {}, ...props }) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.img
      layoutId={`dialog-img-${uniqueId}`}
      transition={transition}
      src={src}
      alt={alt}
      style={style}
      className={className}
      {...props}
    />
  );
}

export function MorphingDialogTitle({ children, className = '', style = {}, ...props }) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.h3
      layoutId={`dialog-title-${uniqueId}`}
      transition={transition}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </motion.h3>
  );
}

export function MorphingDialogSubtitle({ children, className = '', style = {}, ...props }) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.p
      layoutId={`dialog-subtitle-${uniqueId}`}
      transition={transition}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
}

export function MorphingDialogDescription({ children, className = '', variants, disableLayoutAnimation, ...props }) {
  const { uniqueId } = useMorphingDialog();

  const defaultVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.25 } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.15 } },
  };

  return (
    <motion.div
      layoutId={disableLayoutAnimation ? undefined : `dialog-desc-${uniqueId}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants || defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MorphingDialogClose({ className = '', children, ...props }) {
  const { setIsOpen } = useMorphingDialog();

  return (
    <button
      type="button"
      onClick={() => setIsOpen(false)}
      className={`absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800/90 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700/50 shadow-md ${className}`}
      aria-label="Close dialog"
      {...props}
    >
      {children || <X size={18} />}
    </button>
  );
}
