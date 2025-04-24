import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 64, 0.5)' }}
      className="glass p-6 rounded-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold orbitron mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <a
        href={project.github}
        className="text-green-400 hover:underline"
      >
        View on GitHub
      </a>
    </motion.div>
  );
};

export default ProjectCard;