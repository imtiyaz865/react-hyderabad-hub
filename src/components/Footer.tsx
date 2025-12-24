import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { name: 'Events', href: '#events' },
  { name: 'Community', href: '#community' },
  { name: 'Team', href: '#team' },
  { name: 'Sponsors', href: '#sponsors' },
];

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill="hsl(var(--primary))"
                    className="drop-shadow-[0_0_10px_hsl(var(--primary))]"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="35"
                    ry="14"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="opacity-60"
                    transform="rotate(-30 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="35"
                    ry="14"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="opacity-60"
                    transform="rotate(30 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="35"
                    ry="14"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="opacity-60"
                    transform="rotate(90 50 50)"
                  />
                </svg>
              </div>
              <span className="font-mono text-lg font-semibold text-foreground">
                React<span className="text-primary">HYD</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground max-w-md mb-6">
              Building the future with React, one meetup at a time. Join our vibrant community of developers in Hyderabad.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">{'// Quick Links'}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">{'// Stay Updated'}</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get notified about upcoming events and community updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-mono text-sm font-medium"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>

        {/* Terminal-style Footer */}
        <div className="border-t border-border pt-8">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-success/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">footer.sh</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-success">❯</span>
                <span className="text-foreground">Built with</span>
                <Heart size={14} className="text-destructive fill-destructive" />
                <span className="text-foreground">by React Hyderabad Community</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-success">❯</span>
                <span>npm install react-hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">❯</span>
                <span className="text-accent">© {new Date().getFullYear()} All rights reserved</span>
                <span className="w-2 h-4 bg-primary cursor-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
