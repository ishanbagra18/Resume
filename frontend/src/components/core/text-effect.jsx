import React from 'react';
import { motion } from 'framer-motion';

const presets = {
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.008,
          delayChildren: 0,
        },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.25 } },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.008,
          delayChildren: 0,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.008,
          delayChildren: 0,
        },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
    },
  },
  blur: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.008,
          delayChildren: 0,
        },
      },
    },
    item: {
      hidden: { opacity: 0, filter: 'blur(6px)' },
      visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.25 } },
    },
  },
};

function processNode(node, itemVariants, keyPrefix = '') {
  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node);
    const words = text.split(' ');
    return words.map((word, wordIndex) => (
      <span key={`${keyPrefix}-w-${wordIndex}`} className="inline-block whitespace-nowrap">
        {Array.from(word).map((char, charIndex) => (
          <motion.span
            key={`${keyPrefix}-c-${wordIndex}-${charIndex}`}
            variants={itemVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
        {wordIndex < words.length - 1 && (
          <span className="inline-block">&nbsp;</span>
        )}
      </span>
    ));
  }

  if (React.isValidElement(node)) {
    const children = React.Children.toArray(node.props.children);
    return React.cloneElement(
      node,
      { ...node.props, key: node.key || keyPrefix },
      children.map((child, idx) => processNode(child, itemVariants, `${keyPrefix}-${idx}`))
    );
  }

  return node;
}

export function TextEffect({
  children,
  per = 'char',
  preset = 'fade',
  as = 'div',
  className = '',
  variants,
  delay = 0,
  ...props
}) {
  const Component = motion[as] || motion.div;
  const selectedPreset = presets[preset] || presets.fade;
  const containerVariants = variants?.container || selectedPreset.container;
  const itemVariants = variants?.item || selectedPreset.item;

  const childArray = React.Children.toArray(children);

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: containerVariants.hidden,
        visible: {
          ...containerVariants.visible,
          transition: {
            ...containerVariants.visible?.transition,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {childArray.map((child, idx) => processNode(child, itemVariants, `root-${idx}`))}
    </Component>
  );
}

export default TextEffect;
