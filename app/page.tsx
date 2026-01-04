import { HeroSection } from './components/home/HeroSection';
import { DemoSection } from './components/home/DemoSection';
import { FeaturesSection } from './components/home/FeaturesSection';
import { UseCasesSection } from './components/home/UseCasesSection';
import { ScreenshotsSection } from './components/home/ScreenshotsSection';
import { ReviewsSection } from './components/home/ReviewsSection';
import { CTASection } from './components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <UseCasesSection />
      <ScreenshotsSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
