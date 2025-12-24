import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { EventsSection } from '@/components/EventsSection';
import { CommunitySection } from '@/components/CommunitySection';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <EventsSection />
      <CommunitySection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;
