import React from 'react';
import {
  animate,
  motion,
} from "framer-motion";
import { useRef } from "react";

import { AnimatedGradient } from "./components/AnimatedGradient";
import { Glass } from "./components/Glass";
import './App.css';

import Clock from './components/Clock';

function App() {
  const constraintsRef = useRef(null);
  const time = useTime();

  return (
    <div className="App" onMouseMove={(e) => Sparks(e.clientX, e.clientY)} ref={constraintsRef}>
      <Glass />
      <AnimatedGradient />
      <motion.h1 
          className="font--size-body color--purple"
          initial={{ 
            rotate: 0,
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.5,
              delay: 0.5,
            },
          }}
          drag
          whileDrag={{ scale: 1.25, rotate: "4deg", textShadow: '2px 2px 15px rgba(0,0,0,0.3)' }}
          dragConstraints={constraintsRef}
        >
          Jacob Lindstrõm ↲
        </motion.h1>
      <section className="start">
        <motion.h2 
          initial={{ 
            y: "35%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              duration: 2,
              bounce: 0.5,
              delay: 0.1,
            },
          }}>I am an experienced UX Engineer
          <motion.span 
            initial={{ 
              opacity: 0, 
              scale: 2,
              rotate: "-25deg"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: "0",
              transition: {
                type: "spring",
                duration: 1.8,
                bounce: 0.5,
                delay: 0.3,
              },
            }}          
            className="font--super">
              ➀
          </motion.span> specializing in design systems and prototyping. I work at <a href="https://osynlig.se">Osynlig</a></motion.h2>
        <motion.div
          className="bio"
          initial={{ 
            y: "35%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",              
              duration: 1.8,
              bounce: 0.4,
              delay: 0.3,
            },
          }}
        >
          <p className="font--casual">Husband and dad living in Nykōping, Sweden. I like to drink natural wine and to race bikes.</p>
        </motion.div>

        <aside>
        <motion.p 
          className="font--super"
          initial={{ 
            x: "-5%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              duration: 0.8,
              bounce: 0.35,
              delay: 1,
            },
          }}
          drag
          whileDrag={{ scale: 1.15, textShadow: '1px 1px 10px rgba(0,0,0,0.25)' }}
          dragConstraints={constraintsRef}
        >
            ➀ Designer + Developer
        </motion.p>
        <motion.p 
          className="font--super alt"
          initial={{ 
            x: "-5%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              duration: 0.8,
              bounce: 0.35,
              delay: 1.2,
            },
          }}
          drag
          whileDrag={{ scale: 1.15, textShadow: '1px 1px 10px rgba(0,0,0,0.25)' }}
          dragConstraints={constraintsRef}
        >
          ○ Studied Interaction Design at Malmö University
        </motion.p>
        <motion.p 
          className="font--super alt"
          initial={{ 
            x: "-5%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              duration: 0.8,
              bounce: 0.35,
              delay: 1.4,
            },
          }}
          drag
          whileDrag={{ scale: 1.15, textShadow: '1px 1px 10px rgba(0,0,0,0.25)' }}
          dragConstraints={constraintsRef}
        >
          △ Product Designer, PM, Developer at <a href="https://hoodin.com">Hoodin</a>
        </motion.p>
        <motion.p 
          className="font--super alt"
          initial={{ 
            x: "-5%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              duration: 0.8,
              bounce: 0.35,
              delay: 1.6,
            },
          }}
          drag
          whileDrag={{ scale: 1.15, textShadow: '1px 1px 10px rgba(0,0,0,0.25)' }}
          dragConstraints={constraintsRef}
        >
          △ Interaction Designer at <a href="https://youcruit.com">Youcruit</a>
        </motion.p>
      </aside>
      </section>
      
      <motion.footer>
        <ul className="social">
          <motion.li
              initial={{ 
              y: "15%",
              opacity: 0 
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.35,
                delay: 1.2,
              },
            }}
          >
            <a className="email" href="mailto:its@jacoblindstrom.design">its@jacoblindstrom.design</a>
          </motion.li>
          <ul className="external-links">
            <li className="figma">
              <motion.a initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: '-5%',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.25,
                    delay: 1.5,
                  },
                }} href="https://figma.com/@jacoblindstrm" rel="author noopener" title="Figma"><span className="social-title">Figma</span></motion.a></li>
            <li className="github">
              <motion.a initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: '-5%',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.25,
                    delay: 1.6,
                  },
                }} href="https://github.com/jacoblindstrm" rel="author noopener" title="Github"><span className="social-title">Github</span></motion.a></li>
            <li className="dribbble">
              <motion.a initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: '-5%',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.25,
                    delay: 1.7,
                  },
                }} href="https://dribbble.com/jacoblindstrom" rel="author noopener" title="Dribbble"><span className="social-title">Dribbble</span></motion.a></li>
            <li className="twitter">
              <motion.a initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: '-5%',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.25,
                    delay: 1.8,
                  },
                }} href="https://twitter.com/jacoblindstr_m" rel="author noopener" title="Twitter"><span className="social-title">Twitter</span></motion.a></li>
            <li className="linkedin">
              <motion.a initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: '-5%',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.25,
                    delay: 1.9,
                  },
                }} href="https://www.linkedin.com/in/jacobsvensson-design/" rel="author noopener" title="LinkedIn"><span className="social-title">LinkedIn</span></motion.a></li>
            <li className="spotify">
              <motion.a initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: '-5%',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.2,
                    bounce: 0.25,
                    delay: 2,
                  },
                }} href="https://open.spotify.com/user/z9v8we1abbpx7dej3vvsqj38t" rel="author noopener" title="Spotify"><span className="social-title">Spotify</span></motion.a></li>
          </ul>
        </ul>
      </motion.footer>
      <Clock time={time} />
      <div id="Sparks"></div>
    </div>
  );
}

function Sparks(x, y) {
  if (window.matchMedia('(prefers-reduced-motion)').matches) return;
  
  const sparks = document.getElementById('Sparks');

  function createElement() {
      const div = document.createElement('div');       
      const color = getColor();
      const size = getRandomSize();

      const limitSpread = 100;
      div.style.cssText = `background: ${color}; border-radius: 100%; width: ${size}rem; height: ${size}rem; opacity: 0;`;
      div.classList.add(`cursor_sparks`);
      div.style.transform = `translateX(${x + randomIntFromInterval(1,limitSpread)}px) translateY(${y  + randomIntFromInterval(1,limitSpread)}px)`;

      // append
      sparks.appendChild(div);

      div.addEventListener('animationend', () => {
        div.remove();
      });
  }

  function getColor() {
      const hue = Math.round((x / window.screen.width) * 360 + 30);
      return `hsla(${hue}, 100%, 50%, 0.2)`;
  }

  function getRandomSize() {
      const sizes = ["0.8", "1", "1.7", "0.3"];
      return sizes[Math.floor(Math.random() * sizes.length)];

  }

  function randomIntFromInterval(min, max) { // min and max included 
      let num = Math.floor(Math.random() * (max - min + 1) + min);
      
      num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;

      return num;
  } 

  createElement();
}

function useTime() {
  const [time, setTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => {
      window.clearInterval(intervalId);
    }
  }, []);
  
  return time;
}

export default App;
