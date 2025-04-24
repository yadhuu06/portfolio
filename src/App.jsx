import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-800 shadow-md z-10">
        <nav className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Yadhu Krishnan PS</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-4">Python Full-Stack Developer</h2>
          <p className="text-xl mb-6">Building scalable, user-friendly applications with passion and precision.</p>
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto">
            I’m Yadhu Krishnan PS, a Python Full-Stack Developer with a background in accounting. My journey into tech was fueled by curiosity and a passion for problem-solving. Through self-learning and intensive bootcamp training, I’ve mastered Python, Django, React, and more. I’m excited to create impactful solutions and grow with a dynamic team.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">TimeTwist</h3>
              <p className="mb-4">A stylish watch e-commerce platform with Django, React, and Razorpay integration for secure payments.</p>
              <a
                href="https://github.com/yadhuu06/Time-Twist"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Let’s Connect</h2>
          <p className="text-lg mb-6">Open to job opportunities as a Python Full-Stack Developer. Reach out to discuss exciting projects!</p>
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;