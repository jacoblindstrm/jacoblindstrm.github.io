import React from 'react';
import {
  motion,
} from "framer-motion";
import format from 'date-fns/format';

const appear = {
  hidden: { 
    opacity: 0,
    x: 10, 
  },
  show: {
    opacity: 1, 
    scale: 1,
    x: 0,
    transition: {
      type: "ease-in-out",
      duration: 0.8,
      delay: 1,
    },
  },
};

function Clock({ time }) {
  return (
    <motion.ul 
      className="time" 
      variants={appear} 
      initial='hidden'
      animate='show'
    >
      <li>
        {format(new Date(), 'MMMM Y') }
      </li>
      <li>
        Nyköping
      </li>
      <li>
        {format(time, 'HH:mm:ss')}
      </li>
    </motion.ul>
  );
}

export default Clock;