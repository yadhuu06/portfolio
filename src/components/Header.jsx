import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) setMobileOpen(false);
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(9,9,11,0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '14px' }}>
            YK
          </div>
          <div style={{ display: 'none' }} className="logo-text">
            <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px', lineHeight: 1.2 }}>Yadhu Krishnan</p>
            <p style={{ color: '#71717a', fontSize: '12px' }}>Lead AI Engineer</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'none', alignItems: 'center', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{ padding: '10px 16px', color: '#a1a1aa', fontSize: '14px', textDecoration: 'none', borderRadius: '8px', display: 'block' }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-cta">
          <a href="#contact" style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 2px 12px rgba(99, 102, 241, 0.3)' }}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'block', padding: '8px', background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer' }} className="mobile-toggle" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(9,9,11,0.98)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
            className="mobile-menu"
          >
            <div style={{ padding: '24px' }}>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '14px 16px', color: '#d4d4d8', fontSize: '16px', textDecoration: 'none', borderRadius: '12px' }}>
                  {item}
                </a>
              ))}
              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <a href="#contact" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '16px', textAlign: 'center', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)' }}>Contact Me</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .logo-text { display: block !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
