import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Yadhu Krishnan PS. Built with 
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
}