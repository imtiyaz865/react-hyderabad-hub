import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'React 19 Deep Dive',
    date: 'Jan 15, 2025',
    time: '6:00 PM IST',
    location: 'T-Hub, Hyderabad',
    speaker: 'Priya Sharma',
    attendees: 120,
    tags: ['React 19', 'Server Components', 'Actions'],
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'State Management Wars',
    date: 'Feb 8, 2025',
    time: '5:30 PM IST',
    location: 'WeWork, Gachibowli',
    speaker: 'Rahul Deshmukh',
    attendees: 85,
    tags: ['Zustand', 'Redux', 'Jotai'],
    isUpcoming: true,
  },
  {
    id: 3,
    title: 'Building with Next.js 15',
    date: 'Feb 22, 2025',
    time: '6:00 PM IST',
    location: 'Microsoft Campus',
    speaker: 'Anjali Reddy',
    attendees: 150,
    tags: ['Next.js', 'RSC', 'App Router'],
    isUpcoming: false,
  },
  {
    id: 4,
    title: 'React Native Workshop',
    date: 'Mar 5, 2025',
    time: '10:00 AM IST',
    location: 'IIT Hyderabad',
    speaker: 'Karthik Menon',
    attendees: 60,
    tags: ['React Native', 'Expo', 'Mobile'],
    isUpcoming: false,
  },
];

export const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
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
            {'<Events />'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Upcoming <span className="gradient-text">Meetups</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for workshops, talks, and networking with fellow React developers.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } mb-8 md:mb-12`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background z-10">
                {event.isUpcoming && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                )}
              </div>

              {/* Event Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
                >
                  {/* Upcoming Badge */}
                  {event.isUpcoming && (
                    <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded-full pulse-glow">
                      Upcoming
                    </div>
                  )}

                  {/* Event Title */}
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} className="text-primary" />
                      <span>{event.date}</span>
                      <span className="text-border">•</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users size={14} className="text-primary" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  {/* Speaker */}
                  <p className="text-sm text-muted-foreground mb-4 font-mono">
                    <span className="text-success">Speaker:</span> {event.speaker}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* RSVP Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-sm font-mono text-primary hover:text-accent transition-colors"
                  >
                    RSVP Now
                    <ChevronRight size={16} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-mono font-semibold hover:glow-primary transition-all"
          >
            View All Events
            <ChevronRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
