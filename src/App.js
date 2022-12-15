import React from 'react';
import {
  motion,
} from "framer-motion";
import { useRef } from "react";

// import { AnimatedGradient } from "./components/AnimatedGradient";
// import { Glass } from "./components/Glass";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Clock from './components/Clock';
import Logo from './assets/img/logotype.svg';


function App() {
  const constraintsRef = useRef(null);
  const time = useTime();

  return (
    <div className="App" onMouseMove={(e) => Sparks(e.clientX, e.clientY)} ref={constraintsRef}>
      <div class="Layout">
        <Header></Header>
        <Footer></Footer>
        <Clock time={time} />
      </div>
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
