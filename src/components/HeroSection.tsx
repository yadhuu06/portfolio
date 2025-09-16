import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  "Python Full-Stack Developer",
  "Creative Coder",
  "Real-time Systems Expert",
  "Django & React Specialist"
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.slice(0, displayText.length + 1));
        if (displayText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Variants for text animations
  const nameVariants = {
    hidden: { opacity: 0, y: 50, skewX: 10 },
    visible: { opacity: 1, y: 0, skewX: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } }
  };

  const roleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.5 } }
  };

  const descVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.8 } }
  };

  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -5, transition: { type: 'spring', stiffness: 400, damping: 10 } }
  };

  const socialVariants = {
    rest: { opacity: 0.6, rotate: 0 },
    hover: { opacity: 1, rotate: 15, transition: { duration: 0.4, ease: 'easeInOut' } }
  };

  const scrollVariants = {
    animate: { y: [0, 10, 0], transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={nameVariants}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="block mb-2 text-foreground">Hi, I'm</span>
            <span className="gradient-text text-5xl md:text-7xl lg:text-8xl">
              Yadhu Krishnan PS
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                variants={roleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xl md:text-2xl text-primary font-display"
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={descVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Building scalable applications and real-time systems with modern web technologies.
            Creator of BitCode - the real-time coding battle platform.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="rest">
              <Button variant="cyber" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="rest">
              <Button variant="neon" size="lg" asChild>
                <a href="/Yadhu_Krishnan_PS_CV.pdf" download>
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/yadhuu06"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              whileTap="rest"
              className="text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yadhu-krishnan-s"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              whileTap="rest"
              className="text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:yadhuu.ps@gmail.com"
              variants={socialVariants}
              whileHover="hover"
              whileTap="rest"
              className="text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={scrollVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-primary animate-pulse" />
      </motion.div>
    </section>
  );
}