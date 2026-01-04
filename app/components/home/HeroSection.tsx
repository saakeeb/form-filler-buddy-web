import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { StarRating } from '../ui/StarRating';
import { FeaturedBadge } from '../ui/FeaturedBadge';
import { Chrome, Flame } from 'lucide-react';

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--blue-soft)] blur-[80px] opacity-60 -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[var(--purple-soft)] blur-[80px] opacity-60 -z-10" />
      
      <div className="mx-auto max-w-4xl text-center px-4">
        <div className="flex justify-center mb-8">
            <FeaturedBadge />
        </div>
        
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl leading-[1.1]">
          Fill Forms Faster, <br />
          <span className="text-[var(--primary)] relative">
            Save Time
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--blue-soft)] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
            </svg>
          </span>
        </h1>
        
        <p className="mb-10 text-xl text-[var(--muted-foreground)] sm:text-2xl max-w-2xl mx-auto text-balance">
          A smart Chrome extension that automatically fills web forms with
          your saved data. Never type the same information twice.
        </p>
        
        <div className="flex flex-col items-center gap-4 mb-10">
             <StarRating rating={5.0} reviewCount={5} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Button
            href="https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 text-base bg-[var(--primary)] hover:bg-indigo-600 text-white shadow-lg shadow-indigo-200"
          >
            <Chrome className="w-5 h-5 mr-2" />
            Add Extension
          </Button>
          <Button
            href="https://addons.mozilla.org/en-US/firefox/addon/form-filler-buddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 text-base bg-[#ff7139] hover:bg-[#e05a2b] text-white shadow-lg shadow-orange-200"
          >
            <Flame className="w-5 h-5 mr-2" />
            Add Addon
          </Button>
          <Button href="/manual" variant="outline" className="h-12 px-8 text-base bg-white border-[var(--border)] hover:bg-[var(--secondary)] text-[var(--foreground)]">
            View User Manual
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            No credit card required • Privacy-first design
        </p>
      </div>
    </Section>
  );
}
