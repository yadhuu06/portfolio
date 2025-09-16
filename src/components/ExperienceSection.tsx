import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Full-Stack Development Bootcamp',
    company: 'Brototype',
    location: 'Kerala',
    period: 'Apr 2024 – Present',
    description: [
      'Intensive hands-on bootcamp focused on Python, Django, React.js, REST APIs',
      'Built multiple real-world projects including e-commerce platforms and real-time systems',
      'Strengthened skills in software architecture, version control, and cloud deployments'
    ],
    icon: GraduationCap
  },
  {
    type: 'work',
    title: 'Accountant cum Manager',
    company: 'Capital Petroleum and Spiceway Enterprises Pvt Ltd',
    location: 'Kerala',
    period: 'Aug 2021 – Dec 2023',
    description: [
      'Managed financial records and budgeting with 100% accuracy',
      'Supervised daily operations and led a team',
      'Improved workflow efficiency through process optimization'
    ],
    icon: Briefcase
  },
  {
    type: 'education',
    title: 'Bachelor of Commerce (B.Com)',
    company: 'Mahatma Gandhi University',
    location: 'Kerala',
    period: '2018 – 2021',
    description: [
      'Specialized in accounting and financial analysis',
      'Developed strong analytical and problem-solving skills',
      'Transitioned into software development via self-learning'
    ],
    icon: GraduationCap
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-glow mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6 mb-8"
              >
                {/* Icon */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      exp.type === 'work' 
                        ? 'bg-gradient-to-br from-primary/20 to-neon-green/20 border-2 border-primary' 
                        : 'bg-gradient-to-br from-secondary/20 to-neon-violet/20 border-2 border-secondary'
                    }`}
                  >
                    <exp.icon className={`w-6 h-6 ${
                      exp.type === 'work' ? 'text-primary' : 'text-secondary'
                    }`} />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                  
                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}