import React from 'react';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={socialLinks.github} className="hover:text-green-400">GitHub</a>
          <a href={socialLinks.linkedin} className="hover:text-green-400">LinkedIn</a>
          <a href={`mailto:${socialLinks.email}`} className="hover:text-green-400">Email</a>
        </div>
        <p>&copy; 2025 Yadhu Krishnan PS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;