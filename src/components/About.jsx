import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center orbitron mb-10"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg max-w-3xl mx-auto"
        >
          I’m Yadhu Krishnan PS, a Python Full-Stack Developer with a background in accounting. My tech journey began with curiosity and a passion for problem-solving. Through self-learning and Brocamp’s intensive training, I’ve mastered Python, Django, React, and more. I’m proud to have led teams and earned the Best Coordinator award in November. I’m eager to build impactful solutions and grow with a dynamic team.
        </motion.p>
      </div>
    </section>
  );
};

export default About;