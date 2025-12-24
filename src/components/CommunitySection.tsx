import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Calendar, Mic, Code2 } from 'lucide-react';

const stats = [
  { icon: Users, value: 2500, suffix: '+', label: 'Developers' },
  { icon: Calendar, value: 48, suffix: '', label: 'Events Hosted' },
  { icon: Mic, value: 120, suffix: '+', label: 'Speakers' },
  { icon: Code2, value: 15, suffix: 'K+', label: 'Lines of Code' },
];

const AnimatedCounter = ({ 
  value, 
  suffix, 
  isInView 
}: { 
  value: number; 
  suffix: string; 
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span className="font-mono">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Network visualization node positions
const networkNodes = [
  { x: 50, y: 30 },
  { x: 20, y: 50 },
  { x: 80, y: 50 },
  { x: 35, y: 70 },
  { x: 65, y: 70 },
  { x: 50, y: 85 },
  { x: 15, y: 25 },
  { x: 85, y: 25 },
];

export const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="community" className="section-padding relative overflow-hidden">
      {/* Network Background Visualization */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Connection Lines */}
          {networkNodes.map((node, i) =>
            networkNodes.slice(i + 1).map((target, j) => {
              const distance = Math.sqrt(
                Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
              );
              if (distance < 40) {
                return (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={target.x}
                    y2={target.y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.2"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: i * 0.1 }}
                    className="network-line"
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Nodes */}
          {networkNodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono mb-6">
            {'<Community />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stronger <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learning, collaborating, and growing as a community of passionate React developers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl border border-border bg-card/50 text-center hover:bg-card hover:border-primary/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>
                <p className="text-muted-foreground font-mono text-sm">{stat.label}</p>
                
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal-style Community Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-success/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">community-benefits.sh</span>
            </div>
            <div className="terminal-body space-y-4">
              <div>
                <span className="text-success">❯ </span>
                <span className="text-muted-foreground">npx react-hyderabad join</span>
              </div>
              <div className="pl-4 space-y-2 text-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Weekly knowledge sharing sessions</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Networking with industry experts</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Hands-on workshops & hackathons</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Job referrals & career growth</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Open source collaboration</span>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
              >
                <span className="text-success">❯ </span>
                <span className="text-accent">Installation complete!</span>
                <span className="w-2.5 h-5 bg-primary ml-2 inline-block cursor-blink" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-mono font-semibold hover:glow-primary transition-all"
          >
            <span>Join Discord Server</span>
            <span className="px-2 py-0.5 bg-primary-foreground/20 rounded text-sm">Free</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
