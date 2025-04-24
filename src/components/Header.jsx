import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full glass shadow-lg z-50"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold orbitron">Yadhu Krishnan PS</h1>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;