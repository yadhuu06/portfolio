import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yadhuu.ps@gmail.com',
    href: 'mailto:yadhuu.ps@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6238311034',
    href: 'tel:+916238311034'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kerala, India',
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yadhuu06'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yadhu-krishnan-s'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-glow mx-auto mb-8"></div>
          
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                Contact Information
              </h3>
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                Connect With Me
              </h3>
              
              <div className="flex gap-4 mb-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-card border-2 border-border hover:border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5 text-foreground hover:text-primary" />
                  </motion.a>
                ))}
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                <h4 className="font-semibold mb-2">Ready to collaborate?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Download my CV to learn more about my experience and skills.
                </p>
                <Button variant="glow" size="lg" className="w-full" asChild>
                  <a href="/Yadhu_Krishnan_PS_CV.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}