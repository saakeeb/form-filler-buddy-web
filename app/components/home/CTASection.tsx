import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Ready to Save Time?
        </h2>
        <p className="mb-8 text-lg text-blue-100 sm:text-xl">
          Install Form Filler Buddy today and never type the same information
          twice.
        </p>
        <Button
          href="https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
        >
          Get Started Now
        </Button>
      </div>
    </Section>
  );
}


