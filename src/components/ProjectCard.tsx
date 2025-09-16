import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  features,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{description}</p>
          </div>
          <Code2 className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs bg-muted/50 text-foreground/70 rounded border border-border"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="neon" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}