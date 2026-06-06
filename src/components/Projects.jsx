import React from 'react';
import { motion } from 'framer-motion';
import { projects, socialLinks } from '../constants';

const Projects = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="projects" style={{ padding: '120px 0', background: '#0c0c0f' }}>
      <div className="container">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#818cf8', fontSize: '14px', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.1em' }}>PROJECTS</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Featured Work</h2>
          <p style={{ fontSize: '16px', color: '#71717a', maxWidth: '500px', margin: '0 auto' }}>Real-world applications showcasing full-stack development skills</p>
        </motion.div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              style={{
                padding: '32px',
                borderRadius: '20px',
                background: project.featured ? 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.04) 100%)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${project.featured ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)'}`,
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff' }}>{project.title}</h3>
                    {project.featured && (
                      <span style={{ padding: '6px 14px', background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 100%)', color: '#a5b4fc', fontSize: '12px', borderRadius: '50px', fontWeight: 600, letterSpacing: '0.03em', border: '1px solid rgba(99,102,241,0.3)' }}>Featured</span>
                    )}
                  </div>
                  <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.7 }}>{project.description}</p>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)', letterSpacing: '0.02em' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: 'rgba(255,255,255,0.03)', color: '#e4e4e7', fontSize: '14px', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', letterSpacing: '0.02em' }}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      Code
                    </a>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {project.tech.map((tech) => (
                  <span key={tech} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', color: '#71717a', fontSize: '13px', borderRadius: '6px' }}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginTop: '48px', textAlign: 'center' }}>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50px', color: '#a1a1aa', fontSize: '15px', fontWeight: 500, textDecoration: 'none', backdropFilter: 'blur(10px)' }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            View all projects on GitHub
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
