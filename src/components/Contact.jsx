import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="contact" style={{ padding: '120px 0', background: '#09090b' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#818cf8', fontSize: '14px', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.1em' }}>CONTACT</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Let's Work Together</h2>
          <p style={{ fontSize: '16px', color: '#71717a', maxWidth: '500px', margin: '0 auto' }}>Have a project in mind or want to discuss opportunities?</p>
        </motion.div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Contact Links */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
            <a href={`mailto:${socialLinks.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 32px', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', borderRadius: '50px', color: '#fff', fontSize: '15px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)', letterSpacing: '0.02em' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {socialLinks.email}
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50px', color: '#e4e4e7', fontSize: '15px', fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(10px)', letterSpacing: '0.02em' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50px', color: '#e4e4e7', fontSize: '15px', fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(10px)', letterSpacing: '0.02em' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          </motion.div>

          {/* Availability */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: 'rgba(34,197,94,0.08)', borderRadius: '50px', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px rgba(34,197,94,0.6)', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#86efac', fontSize: '15px', fontWeight: 500, letterSpacing: '0.02em' }}>Currently open to new opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
    </section>
  );
};

export default Contact;
