import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Events', href: '#events' },
  { name: 'Community', href: '#community' },
  { name: 'Team', href: '#team' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group"
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
          <span className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            React<span className="text-primary">HYD</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
            >
              <span
                className={`${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </span>
              {activeSection === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full glow-primary"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#community"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#community');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-5 py-2 bg-primary text-primary-foreground rounded-lg font-mono text-sm font-medium hover:glow-primary transition-all"
        >
          Join Us
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#community"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#community');
                }}
                className="mt-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg font-mono text-center font-medium"
              >
                Join Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
