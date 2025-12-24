import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Home, Terminal } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-radial-primary" />
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="terminal-window mb-8"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-success/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono flex items-center gap-2">
                <Terminal size={12} />
                error.sh
              </span>
            </div>
            <div className="terminal-body space-y-3">
              <div>
                <span className="text-destructive">Error: </span>
                <span className="text-foreground">Page not found</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-success">❯ </span>
                <span>Route "{location.pathname}" does not exist</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-success">❯ </span>
                <span>Status: </span>
                <span className="text-primary">404</span>
                <span className="w-2 h-4 bg-primary ml-2 inline-block cursor-blink" />
              </div>
            </div>
          </motion.div>

          {/* 404 Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl md:text-9xl font-display font-bold mb-4"
          >
            <span className="gradient-text">404</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Oops! This page got lost in the virtual DOM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-mono font-semibold hover:glow-primary transition-all"
              >
                <Home size={18} />
                Return to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
