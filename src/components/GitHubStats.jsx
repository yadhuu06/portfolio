import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = 'yadhuu06';

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposRes.json();

        // Calculate stats
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
        const languages = {};
        reposData.forEach(repo => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });
        const topLanguages = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name]) => name);

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          stars: totalStars,
          forks: totalForks,
          topLanguages,
          avatar: userData.avatar_url,
          bio: userData.bio,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const statItems = stats ? [
    { label: 'Repositories', value: stats.repos, icon: '📁' },
    { label: 'Stars Earned', value: stats.stars, icon: '⭐' },
    { label: 'Followers', value: stats.followers, icon: '👥' },
    { label: 'Forks', value: stats.forks, icon: '🔱' },
  ] : [];

  return (
    <section style={{ padding: '80px 0', background: '#0c0c0f' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ color: '#818cf8', fontSize: '14px', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.1em' }}>GITHUB</p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Open Source Activity</h2>
        </motion.div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '40px',
                height: '40px',
                border: '3px solid rgba(99,102,241,0.2)',
                borderTopColor: '#6366f1',
                borderRadius: '50%',
              }}
            />
          </div>
        ) : stats ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
            }}>
              {statItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: '24px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{item.icon}</span>
                  <p style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{item.value}</p>
                  <p style={{ fontSize: '13px', color: '#71717a' }}>{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contribution Graph */}
            <div style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px',
              marginBottom: '24px',
            }}>
              <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '16px' }}>Contribution Graph</p>
              <img
                src={`https://ghchart.rshah.org/6366f1/${username}`}
                alt="GitHub Contribution Graph"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  filter: 'brightness(0.9)',
                }}
              />
            </div>

            {/* Top Languages */}
            <div style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px',
            }}>
              <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '16px' }}>Top Languages</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {stats.topLanguages.map((lang, i) => (
                  <span
                    key={lang}
                    style={{
                      padding: '8px 16px',
                      background: i === 0 ? 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 100%)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${i === 0 ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '50px',
                      color: i === 0 ? '#a5b4fc' : '#a1a1aa',
                      fontSize: '14px',
                      fontWeight: i === 0 ? 600 : 400,
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Profile Link */}
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  color: '#a1a1aa',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View Full Profile
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ) : (
          <p style={{ textAlign: 'center', color: '#71717a' }}>Failed to load GitHub stats</p>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;
