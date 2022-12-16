
import React from 'react';
import {
    motion,
  } from "framer-motion";

const intro = {
    hidden: {
        y: 100,
        opacity: 0 
    },
    show: {
        opacity: 1, 
        y: 0,
        transition: {
        type: "spring",
        duration: 2.8,
        bounce: 0.25,
        delay: .25,
        },
    }
};

function Bio() {
  return (
    <motion.div variants={intro} initial='hidden' animate='show' className='bio'>
        <p>As a design technologist I bring a unique blend of technical skills and design expertise to every project. With a BSc in Interaction Design from Malmö University, I have a strong foundation in user-centered design principles and a keen eye for aesthetics.</p> 
        <p>Whether it's developing interactive proto&shy;types or creating and main&shy;taining design systems, I am always looking for ways to push the boundaries of what's possible with technology and design.</p>
        <p>Collaborating with cross-functional teams and staying up-to-date on the latest design and development tools are just a few of the things that drive me in my work.</p>
        <p>When I'm not working, you find me enjoying the outdoors with my family, or on my bicycle.</p>
    </motion.div>
  );
}

export default Bio;