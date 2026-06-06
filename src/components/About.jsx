import React from 'react';
import { motion } from 'framer-motion';
import { achievement, education } from '../constants';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="about" style={{ padding: '120px 0', background: '#09090b' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#818cf8', fontSize: '14px', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.1em' }}>ABOUT</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: '#fff' }}>The Story So Far</h2>
        </motion.div>

        {/* Bio */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} style={{ maxWidth: '700px', margin: '0 auto 80px', textAlign: 'center' }}>
          <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#d4d4d8', lineHeight: 1.8, marginBottom: '20px' }}>
            I'm <span style={{ color: '#fff', fontWeight: 600 }}>Yadhu Krishnan PS</span> — a Lead AI Engineer who made an unconventional leap from accounting to cutting-edge technology.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.8, marginBottom: '20px' }}>
            After completing my B.Com and working as an Accountant & Manager for 2+ years, I discovered my true calling in technology. Through intensive self-learning and hands-on training at Brototype, I mastered modern development practices and AI technologies.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.8 }}>
            Today, I lead a team of 8 engineers at Glimmora International, building enterprise AI platforms that drive real business impact.
          </motion.p>
        </motion.div>

        {/* Two Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Education */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="#818cf8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff' }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {education.map((edu) => (
                <div key={edu.id} style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 500, color: '#fff' }}>{edu.degree}</h4>
                    <span style={{ fontSize: '13px', color: '#71717a', fontFamily: 'monospace' }}>{edu.period}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#818cf8', marginBottom: '8px' }}>{edu.institution}, {edu.location}</p>
                  <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.6 }}>{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} transition={{ delay: 0.1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(234,179,8,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="#eab308" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff' }}>Achievement</h3>
            </div>

            <div style={{ borderRadius: '16px', background: 'linear-gradient(135deg, rgba(234,179,8,0.05) 0%, rgba(249,115,22,0.03) 100%)', border: '1px solid rgba(234,179,8,0.1)', overflow: 'hidden' }}>
              <div style={{ padding: '20px', borderBottom: '1px solid rgba(234,179,8,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>{achievement.title}</h4>
                  <span style={{ padding: '5px 12px', background: 'linear-gradient(135deg, rgba(234,179,8,0.2) 0%, rgba(249,115,22,0.15) 100%)', color: '#fbbf24', fontSize: '11px', borderRadius: '50px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', border: '1px solid rgba(234,179,8,0.3)' }}>{achievement.date}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#eab308' }}>{achievement.subtitle}</p>
              </div>

              <div style={{ padding: '20px' }}>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '20px' }}>{achievement.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  {[
                    { value: achievement.myContribution, label: 'My Work' },
                    { value: achievement.teamSize, label: 'Team' },
                    { value: achievement.totalPlatforms, label: 'Total' },
                    { value: '24h', label: 'Duration' },
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '12px 8px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                      <p style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>{item.value}</p>
                      <p style={{ fontSize: '11px', color: '#71717a', marginTop: '4px' }}>{item.label}</p>
                    </div>
                  ))}
                </div>

                <a href={achievement.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 20px', borderRadius: '50px', background: 'linear-gradient(135deg, rgba(234,179,8,0.15) 0%, rgba(249,115,22,0.1) 100%)', border: '1px solid rgba(234,179,8,0.3)', color: '#fbbf24', fontSize: '14px', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.02em' }}>
                  Read My Story
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
