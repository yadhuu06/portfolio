import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    color: "from-primary to-neon-green"
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    color: "from-neon-violet to-secondary"
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST", "FastAPI", "Django ORM", "PostgreSQL", "Redis","MongoDB"],
    color: "from-accent to-neon-yellow"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "Vercel", "GCP", "Docker", "Git/GitHub"],
    color: "from-secondary to-primary"
  },
  {
    title: "Tools & Practices",
    skills: ["RESTful APIs", "JWT Auth", "WebSocket", "Celery", "Postman"],
    color: "from-primary to-accent"
  },
  {
    title: "Integrations",
    skills: ["Razorpay", "Google OAuth", "Redis Pub/Sub", "Async Processing"],
    color: "from-neon-violet to-neon-green"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-glow mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className={`text-xl font-display font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-muted/50 text-foreground/80 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}