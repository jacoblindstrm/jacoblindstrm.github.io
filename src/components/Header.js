
import React from 'react';
import {
    motion,
  } from "framer-motion";

const intro = {
    hidden: {
        y: -100,
        opacity: 0 
    },
    show: {
        opacity: 1, 
        y: 0,
        transition: {
        type: "spring",
        duration: 2.2,
        bounce: 0.5,
        delay: 0.25,
        },
    }
};

function Header() {
  return (
    <motion.section variants={intro} initial='hidden' animate='show'>
         <h1>I am Jacob Lindström, an experienced Design Technologist specializing in design systems and prototyping. I work at <a href="https://osynlig.se" rel="author noopener" title="Osynlig">Osynlig.</a></h1>
        <h2> Husband and dad living in Nyköping, Sweden. I like to drink natural wine and to race bikes.</h2>
    </motion.section>
  );
}

export default Header;