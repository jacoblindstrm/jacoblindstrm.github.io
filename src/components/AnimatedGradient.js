import {
    animate,
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion";
  import { useEffect } from "react";

  export function AnimatedGradient() {
    let interval = useMotionValue(0);
    let y = useTransform(interval, (value) => Math.sin(value) * 100);
    let x = useTransform(interval, (value) => Math.cos(value) * 100);
  
    useEffect(() => {
      let controls = animate(interval, [0, Math.PI * 2], {
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      });
  
      return controls.stop;
    }, [interval]);
    
    if (window.matchMedia('(prefers-reduced-motion)').matches) return;

    return (
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <motion.div
          style={{
            x,
            y,
            scale: 1.75,
            backgroundImage: "var(--gradient)",
          }}
          className="absolute inset-0"
        ></motion.div>
      </div>
    );
  }