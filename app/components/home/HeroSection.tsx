import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { StarRating } from '../ui/StarRating';
import { FeaturedBadge } from '../ui/FeaturedBadge';

export function HeroSection() {
  return (
    <Section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <FeaturedBadge />
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Fill Forms Faster,{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Save Time
          </span>
        </h1>
        <p className="mb-8 text-lg text-gray-600 sm:text-xl md:text-2xl">
          A smart Chrome extension that automatically fills web forms with
          your saved data or realistic test data. Never type the same
          information twice.
        </p>
        <StarRating rating={5.0} reviewCount={5} />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Extension
          </Button>
          <Button href="/manual" variant="outline">
            View Manual
          </Button>
        </div>
      </div>
    </Section>
  );
}


