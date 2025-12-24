import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const sponsors = [
  { name: 'Vercel', logo: '▲' },
  { name: 'GitHub', logo: '⬡' },
  { name: 'Netlify', logo: '◈' },
  { name: 'AWS', logo: '☁' },
  { name: 'Microsoft', logo: '⊞' },
  { name: 'Google', logo: '◉' },
];

export const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sponsors" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial-accent opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono mb-6">
            {'<Sponsors />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Powered by <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Companies that believe in open source & community-driven development.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
              }}
              className="group relative"
            >
              <div className="aspect-square rounded-2xl border border-border bg-card/50 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                <span className="text-4xl md:text-5xl mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {sponsor.logo}
                </span>
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {sponsor.name}
                </span>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
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
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-mono text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          >
            <span className="text-primary">+</span>
            Become a Sponsor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
