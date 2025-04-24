import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useVanta from '../hooks/useVanta';

const Hero = () => {
  const vantaRef = useRef(null);
  useVanta(vantaRef);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h2 className="text-6xl font-bold orbitron mb-4">Yadhu Krishnan PS</h2>
        <p className="text-2xl mb-6">Python Full-Stack Developer | Problem Solver</p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full orbitron"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;