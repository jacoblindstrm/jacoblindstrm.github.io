
import React from 'react';
import {
    motion,
  } from "framer-motion";

// Animations Variants
const list = {
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1,
    },
  },
};

const item = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    x: -10, 
  },
  show: {
    opacity: 1, 
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 4,
      bounce: 0.5,
    },
  },
};

function Header() {
  return (
    <motion.footer
      variants={list}
      initial='hidden'
      animate='show'
    >
      <ul className="external-links">
          <li className="read-cv">
            <motion.a variants={item} href="https://read.cv/jacoblindstrm" rel="author noopener" title="Read Cv"><span className="social-title">Read CV</span></motion.a></li>
          <li className="figma">
            <motion.a variants={item} href="https://figma.com/@jacoblindstrm" rel="author noopener" title="Figma"><span className="social-title">Figma</span></motion.a></li>
              <li className="linkedin">
            <motion.a variants={item} href="https://www.linkedin.com/in/jacobsvensson-design/" rel="author noopener" title="LinkedIn"><span className="social-title">LinkedIn</span></motion.a></li>
          <li className="twitter">
            <motion.a variants={item} href="https://twitter.com/jacoblindstr_m" rel="author noopener" title="Twitter"><span className="social-title">Twitter</span></motion.a></li>
        </ul>
    </motion.footer>
  );
}

export default Header;