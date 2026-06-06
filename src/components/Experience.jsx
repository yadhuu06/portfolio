import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../constants';

const Experience = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="experience" style={{ padding: '120px 0', background: '#0c0c0f' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#818cf8', fontSize: '14px', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.1em' }}>EXPERIENCE</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: '#fff' }}>Professional Journey</h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              style={{ position: 'relative', paddingLeft: '32px', paddingBottom: index === experience.length - 1 ? 0 : '48px' }}
            >
              {/* Line */}
              {index !== experience.length - 1 && (
                <div style={{ position: 'absolute', left: '5px', top: '12px', bottom: 0, width: '2px', background: 'linear-gradient(to bottom, rgba(99,102,241,0.5) 0%, transparent 100%)' }} />
              )}

              {/* Dot */}
              <div style={{ position: 'absolute', left: 0, top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: exp.type === 'current' ? '#6366f1' : '#3f3f46', boxShadow: exp.type === 'current' ? '0 0 0 4px rgba(99,102,241,0.2)' : 'none' }} />

              {/* Card */}
              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>{exp.role}</h3>
                      {exp.type === 'current' && (
                        <span style={{ padding: '5px 12px', background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 100%)', color: '#a5b4fc', fontSize: '11px', borderRadius: '50px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', border: '1px solid rgba(99,102,241,0.3)' }}>Current</span>
                      )}
                    </div>
                    <p style={{ fontSize: '15px', color: '#818cf8' }}>{exp.company}</p>
                    <p style={{ fontSize: '13px', color: '#71717a' }}>{exp.location}</p>
                  </div>
                  <span style={{ fontSize: '13px', color: '#71717a', fontFamily: 'monospace' }}>{exp.period}</span>
                </div>

                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '16px' }}>{exp.description}</p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#a1a1aa' }}>
                      <svg style={{ flexShrink: 0, marginTop: '2px' }} width="16" height="16" fill="none" stroke="#6366f1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Growth */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginTop: '64px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '20px 32px', background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(99,102,241,0.2)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" fill="none" stroke="#818cf8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '16px', fontWeight: 500, color: '#fff' }}>Career Transition</p>
              <p style={{ fontSize: '14px', color: '#a1a1aa' }}>Accounting → Tech Lead in 20 months</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
