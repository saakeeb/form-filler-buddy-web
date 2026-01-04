import { Section } from '../ui/Section';

export function DemoSection() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          See It In Action
        </h2>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
            poster="/assets/images/screenshot-1.png"
            aria-label="Form Filler Buddy demo video"
          >
            <source src="/assets/videos/form-filler-buddy.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </Section>
  );
}


