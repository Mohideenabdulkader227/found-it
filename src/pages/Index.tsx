import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { RecentItemsSection } from '@/components/home/RecentItemsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <RecentItemsSection />
      <HowItWorksSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
