import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { personalInfo, stats } from '../constants';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Lead AI Engineer', 'Full-Stack Developer', 'Team Leader'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, #09090b 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '120px', paddingBottom: '80px' }}>
        {/* Badge */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '50px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: '32px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#86efac', fontSize: '14px', fontWeight: 500, letterSpacing: '0.02em' }}>Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} style={{ height: '40px', marginBottom: '24px' }}>
          <span style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', color: '#818cf8', fontFamily: 'monospace' }}>
            {displayText}<span style={{ animation: 'blink 1s infinite' }}>|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp} style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Building enterprise AI platforms at <span style={{ color: '#fff', fontWeight: 500 }}>{personalInfo.company}</span>. Leading teams. Delivering impact.
        </motion.p>

        {/* Buttons */}
        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
          <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', fontSize: '15px', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)', letterSpacing: '0.02em' }}>
            View Projects
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="/resume.pdf" download="Yadhu_Krishnan_Resume.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', background: 'rgba(255,255,255,0.03)', color: '#fff', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', fontSize: '15px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', letterSpacing: '0.02em' }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff' }}>{stat.value}</p>
              <p style={{ fontSize: '14px', color: '#71717a' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Guinness Badge */}
        <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp} style={{ marginTop: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', background: 'linear-gradient(135deg, rgba(234,179,8,0.12) 0%, rgba(249,115,22,0.08) 100%)', borderRadius: '50px', border: '1px solid rgba(234,179,8,0.25)', boxShadow: '0 4px 20px rgba(234,179,8,0.15)' }}>
            <svg width="18" height="18" fill="#fbbf24" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
            <span style={{ color: '#fbbf24', fontSize: '14px', fontWeight: 600, letterSpacing: '0.02em' }}>Guinness World Record Holder</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '24px', height: '40px', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
          <div style={{ width: '4px', height: '8px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px' }} />
        </motion.div>
      </motion.a>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;
