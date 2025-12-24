import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sai Krishna',
    role: 'Community Lead',
    avatar: 'SK',
    color: 'from-primary to-accent',
    bio: 'Senior Frontend Engineer @ Microsoft',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Events Coordinator',
    avatar: 'PS',
    color: 'from-accent to-success',
    bio: 'React Core Contributor',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Rahul Deshmukh',
    role: 'Tech Lead',
    avatar: 'RD',
    color: 'from-success to-primary',
    bio: 'Staff Engineer @ Atlassian',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Anjali Reddy',
    role: 'Speaker Coordinator',
    avatar: 'AR',
    color: 'from-primary to-success',
    bio: 'DevRel @ Vercel',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Karthik Menon',
    role: 'Content Lead',
    avatar: 'KM',
    color: 'from-accent to-primary',
    bio: 'Mobile Lead @ Swiggy',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Deepika Rao',
    role: 'Community Manager',
    avatar: 'DR',
    color: 'from-success to-accent',
    bio: 'Engineering Manager @ Razorpay',
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] gradient-radial-primary opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono mb-6">
            {'<Team />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Meet the <span className="gradient-text">Organizers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developers volunteering to build and grow this amazing community.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${member.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-xl font-bold font-mono text-foreground">
                        {member.avatar}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground">
                      <span className="text-success">{'<'}</span>
                      {member.role}
                      <span className="text-success">{' />'}</span>
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={member.github}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    <Twitter size={16} />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                </div>

                {/* Gradient sweep effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-5`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
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
            Become a Volunteer
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
