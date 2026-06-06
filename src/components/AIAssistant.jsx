import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const systemPrompt = `You are Yadhu's AI Portfolio Assistant. You represent Yadhu Krishnan PS professionally and helpfully.

ABOUT YADHU:
- Name: Yadhu Krishnan PS
- Current Role: Lead AI Engineer at Glimmora International (since April 2025)
- Previous: AI Full-Stack Developer at Glimmora (Oct 2024 - Apr 2025)
- Team: Leading a team of 8 (5 developers + 3 interns)
- Location: India
- Email: yadhuu.ps@gmail.com
- LinkedIn: linkedin.com/in/yadhu-krishnan-s
- GitHub: github.com/yadhuu06

CAREER JOURNEY:
- Started career as Accountant & Manager (2021-2023) handling financial records
- Made a bold career transition to tech through self-learning and Brototype bootcamp (2024)
- Joined Glimmora as AI Full-Stack Developer and got promoted to Lead AI Engineer in just 6 months
- This unique journey from commerce to tech leadership shows adaptability and determination

GUINNESS WORLD RECORD:
- Contributed to Guinness World Record for "Longest AI Platform Development Hackathon"
- Personally built 12 AI platforms with his team in 24 hours
- Total team achievement: 54 enterprise AI platforms
- Date: May 2025

TECHNICAL SKILLS:
- Languages: Python, JavaScript, TypeScript, SQL
- Frameworks: Django, FastAPI, React.js, LangChain, Django REST Framework
- Databases: PostgreSQL, Redis, MongoDB
- Cloud & DevOps: AWS (EC2), Vercel, GCP, Docker, Digital Ocean, RunPod
- Tools: Git, GitHub, Postman, Celery, WebSocket

PROJECTS:
1. BitCode - Real-time coding battle platform with ELO ranking, WebSocket, custom compiler (Go, JS, Python)
2. BoomBlog - FastAPI blog with JWT auth and async processing
3. Time Twist - E-commerce platform with Razorpay, Google OAuth

WHY LOOKING FOR NEW OPPORTUNITIES:
Yadhu is open to new opportunities because:
- He wants to upskill and grow by working on larger-scale AI systems
- He's eager to explore cutting-edge AI technologies and contribute to innovative projects
- He believes in continuous learning and wants to work with diverse teams globally
- He's looking to make a bigger impact in the AI/ML space
- He wants to contribute his expertise while learning from industry leaders
This is NOT about dissatisfaction - it's about growth, learning, and making greater contributions.

RESPONSE GUIDELINES:
1. Always respond professionally and positively about Yadhu
2. Be helpful, concise, and friendly
3. If asked about weaknesses, frame them as growth areas
4. Highlight the impressive career transition story when relevant
5. Emphasize leadership, quick learning ability, and technical depth
6. If you don't know something specific, say you'd recommend contacting Yadhu directly
7. Keep responses concise (2-4 sentences unless more detail is asked)
8. Never make up information not provided above
9. If asked inappropriate questions, politely redirect to professional topics`;

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Yadhu's AI Assistant. Ask me anything about his experience, skills, projects, or career journey!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const suggestedQuestions = [
    "What's Yadhu's experience?",
    "Tell me about the Guinness Record",
    "What are his skills?",
    "Why is he open to new roles?",
  ];

  const sendMessage = async (messageText) => {
    const userMessage = messageText || input.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;

      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(1).map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Groq API Error:', errorData);
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not process that request.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please feel free to reach out to Yadhu directly at yadhuu.ps@gmail.com"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
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
              key="ai"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              width="28" height="28" fill="none" viewBox="0 0 24 24"
            >
              <path fill="#fff" d="M12 2a2 2 0 012 2v1a7 7 0 017 7 2 2 0 110 4 7 7 0 01-7 7v1a2 2 0 11-4 0v-1a7 7 0 01-7-7 2 2 0 110-4 7 7 0 017-7V4a2 2 0 012-2z"/>
              <circle cx="9" cy="10" r="1.5" fill="#6366f1"/>
              <circle cx="15" cy="10" r="1.5" fill="#6366f1"/>
              <path stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" d="M9 14.5c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification dot */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: 'fixed',
            bottom: '76px',
            right: '24px',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#22c55e',
            border: '3px solid #09090b',
            zIndex: 1001,
          }}
        />
      )}

      {/* Chat Window */}
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
              right: '24px',
              width: '380px',
              maxWidth: 'calc(100vw - 48px)',
              height: '500px',
              maxHeight: 'calc(100vh - 150px)',
              background: 'rgba(15, 15, 20, 0.98)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 999,
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '20px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="22" height="22" fill="none" stroke="#fff" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, marginBottom: '2px' }}>AI Assistant</h3>
                <p style={{ color: '#22c55e', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                  }}
                >
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <div style={{
                    padding: '16px 20px',
                    borderRadius: '18px 18px 18px 4px',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    gap: '6px',
                  }}>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#6366f1',
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {suggestedQuestions.map((q, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => sendMessage(q)}
                    style={{
                      padding: '8px 14px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '50px',
                      color: '#a5b4fc',
                      fontSize: '12px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{
              padding: '16px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              gap: '12px',
            }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Yadhu..."
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: input.trim() ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : 'rgba(255,255,255,0.1)',
                  border: 'none',
                  cursor: input.trim() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isLoading ? 0.5 : 1,
                  boxShadow: input.trim() ? '0 4px 15px rgba(99, 102, 241, 0.4)' : 'none',
                }}
              >
                <svg width="20" height="20" fill="none" stroke="#fff" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
