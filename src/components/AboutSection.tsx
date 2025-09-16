import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const strengths = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "Proficient in Python, Django, React, and modern web technologies"
  },
  {
    icon: Brain,
    title: "Problem Solver",
    description: "Strong analytical thinking from accounting background combined with tech innovation"
  },
  {
    icon: Rocket,
    title: "Real-time Systems",
    description: "Specialized in WebSocket, Redis, and async processing for scalable applications"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Experience in leading teams and improving workflow efficiency"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-glow mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-foreground/80 mb-6">
                I'm a passionate Full-Stack Developer who successfully transitioned from accounting to tech through 
                self-learning and intensive bootcamp training at Brototype. This unique journey has given me a 
                distinctive perspective on problem-solving and business logic.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Currently, I specialize in building scalable web applications using Python, Django, and React. 
                My flagship project, <span className="text-primary font-semibold">BitCode</span>, is a real-time 
                coding battle platform that showcases my expertise in WebSocket communications, Redis pub/sub 
                architecture, and async processing.
              </p>
              <p className="text-lg text-foreground/80">
                With experience in cloud deployments (AWS, Vercel, GCP), Docker containerization, and modern 
                development practices, I bring both technical excellence and business acumen to every project I tackle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300"
                  >
                    <strength.icon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{strength.title}</h3>
                    <p className="text-xs text-muted-foreground">{strength.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}