import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';

const categoryInfo = {
  languages: { name: 'Languages', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.05) 100%)', border: 'rgba(59,130,246,0.2)' },
  frameworks: { name: 'Frameworks & Libraries', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 100%)', border: 'rgba(99,102,241,0.2)' },
  databases: { name: 'Databases', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(16,185,129,0.05) 100%)', border: 'rgba(34,197,94,0.2)' },
  cloud: { name: 'Cloud & DevOps', gradient: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(239,68,68,0.05) 100%)', border: 'rgba(249,115,22,0.2)' },
  tools: { name: 'Tools & Integrations', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(244,63,94,0.05) 100%)', border: 'rgba(236,72,153,0.2)' },
};

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="skills" style={{ padding: '120px 0', background: '#09090b' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#818cf8', fontSize: '14px', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.1em' }}>SKILLS</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Technical Expertise</h2>
          <p style={{ fontSize: '16px', color: '#71717a', maxWidth: '500px', margin: '0 auto' }}>A comprehensive toolkit for building enterprise-grade applications</p>
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              style={{ padding: '24px', borderRadius: '16px', background: categoryInfo[category].gradient, border: `1px solid ${categoryInfo[category].border}` }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>{categoryInfo[category].name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skillList.map((skill) => (
                  <span key={skill} style={{ padding: '8px 14px', background: 'rgba(0,0,0,0.3)', color: '#d4d4d8', fontSize: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', fontSize: '14px', color: '#52525b', marginTop: '48px' }}>
          Also proficient in: REST APIs • JWT Auth • WebSocket • Razorpay • Google OAuth • Agile/Scrum
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
