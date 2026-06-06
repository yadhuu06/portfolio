import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalData = {
  help: `Available commands:
  about        About Yadhu
  skills       Technical skills
  experience   Work experience
  projects     Featured projects
  contact      Contact information
  social       Social links
  guinness     Guinness World Record
  clear        Clear terminal
  help         Show this help`,

  about: `╔══════════════════════════════════════════════╗
║           YADHU KRISHNAN PS                  ║
║           Lead AI Engineer                   ║
╚══════════════════════════════════════════════╝

→ Currently leading AI engineering at Glimmora International
→ Managing a team of 8 (5 developers + 3 interns)
→ Career transition: Accountant → Tech Lead in 20 months
→ Guinness World Record holder for AI platform development
→ Passionate about building enterprise AI solutions`,

  skills: `┌─────────────────────────────────────────────┐
│              TECHNICAL SKILLS                │
└─────────────────────────────────────────────┘

[Languages]
  → Python, JavaScript, TypeScript, SQL

[Frameworks]
  → Django, FastAPI, React.js, LangChain, DRF

[Databases]
  → PostgreSQL, Redis, MongoDB

[Cloud & DevOps]
  → AWS (EC2), Vercel, GCP, Docker
  → Digital Ocean, RunPod

[Tools]
  → Git, GitHub, Postman, Celery, WebSocket`,

  experience: `┌─────────────────────────────────────────────┐
│            WORK EXPERIENCE                   │
└─────────────────────────────────────────────┘

[1] Lead AI Engineer @ Glimmora International
    Apr 2025 - Present
    → Leading team of 8 engineers
    → Delivered 12 AI platforms for Guinness Record
    → Managing 2 primary projects currently

[2] AI Full-Stack Developer @ Glimmora International
    Oct 2024 - Apr 2025
    → Built AI-powered enterprise platforms
    → Promoted to Lead in just 6 months

[3] Accountant & Manager
    Aug 2021 - Dec 2023
    → Financial management with 100% accuracy
    → Successfully transitioned to tech`,

  projects: `┌─────────────────────────────────────────────┐
│            FEATURED PROJECTS                 │
└─────────────────────────────────────────────┘

[BitCode] ★ Featured
  Real-time coding battle platform
  Tech: Python, Django, React, WebSocket, Docker
  → ELO ranking system
  → Custom compiler (Go, JS, Python)
  🔗 https://bitcode.live

[BoomBlog]
  FastAPI blog application
  Tech: FastAPI, PostgreSQL, JWT
  → Modular REST APIs
  → Async processing

[Time Twist]
  E-commerce platform for watches
  Tech: Django, PostgreSQL, Razorpay
  → Payment integration
  → Google OAuth`,

  contact: `┌─────────────────────────────────────────────┐
│            CONTACT INFO                      │
└─────────────────────────────────────────────┘

  📧 Email    : yadhuu.ps@gmail.com
  📱 Phone    : +91 6238311034
  🌐 Website  : yadhuu.live
  📍 Location : India

  ──────────────────────────────────────
  Open to opportunities worldwide!`,

  social: `┌─────────────────────────────────────────────┐
│            SOCIAL LINKS                      │
└─────────────────────────────────────────────┘

  GitHub   → github.com/yadhuu06
  LinkedIn → linkedin.com/in/yadhu-krishnan-s
  Email    → yadhuu.ps@gmail.com
  Website  → yadhuu.live`,

  guinness: `╔══════════════════════════════════════════════╗
║        🏆 GUINNESS WORLD RECORD 🏆           ║
╚══════════════════════════════════════════════╝

  Event: Longest AI Platform Development Hackathon
  Date:  May 2025

  ┌────────────────────────────────────────┐
  │  My Contribution:  12 AI Platforms     │
  │  Team Size:        8 Engineers         │
  │  Total Achievement: 54 Platforms       │
  │  Duration:         24 Hours            │
  └────────────────────────────────────────┘

  → Built enterprise-grade AI solutions
  → Demonstrated rapid development capability
  → Showcased team leadership skills`,
};

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Yadhu\'s Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.\n' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const processCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase().replace('--', '');

    if (trimmed === 'clear') {
      setHistory([]);
      return null;
    }

    if (trimmed === 'help') {
      return terminalData.help;
    }

    if (terminalData[trimmed]) {
      return terminalData[trimmed];
    }

    return `Command not found: ${cmd}\nType "help" for available commands.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [
      ...history,
      { type: 'input', content: input },
    ];

    const output = processCommand(input);
    if (output) {
      newHistory.push({ type: 'output', content: output });
    }

    setHistory(newHistory);
    setCommandHistory([input, ...commandHistory]);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
          zIndex: 1000,
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="terminal"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              width="26" height="26" fill="none" stroke="#fff" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              left: '24px',
              width: '500px',
              maxWidth: 'calc(100vw - 48px)',
              height: '400px',
              maxHeight: 'calc(100vh - 150px)',
              background: 'rgba(0, 0, 0, 0.95)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 999,
              fontFamily: "'JetBrains Mono', 'SF Mono', Monaco, monospace",
            }}
          >
            {/* Title Bar */}
            <div style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.05)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
              </div>
              <span style={{ marginLeft: '12px', color: '#71717a', fontSize: '13px' }}>yadhu@portfolio:~</span>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              onClick={() => inputRef.current?.focus()}
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                fontSize: '13px',
                lineHeight: 1.6,
                cursor: 'text',
              }}
            >
              {history.map((item, i) => (
                <div key={i} style={{ marginBottom: '8px' }}>
                  {item.type === 'input' ? (
                    <div style={{ color: '#10b981' }}>
                      <span style={{ color: '#6366f1' }}>➜</span> {item.content}
                    </div>
                  ) : (
                    <pre style={{
                      color: '#e4e4e7',
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'inherit',
                    }}>
                      {item.content}
                    </pre>
                  )}
                </div>
              ))}

              {/* Input Line */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#6366f1', marginRight: '8px' }}>➜</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#10b981',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                    caretColor: '#10b981',
                  }}
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
