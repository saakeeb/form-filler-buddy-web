import { Section } from '../ui/Section';

export function DemoSection() {
  return (
    <Section className="py-24 bg-[var(--accent)]">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold mb-4">
                Watch Demo
            </span>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
            See It In Action
            </h2>
        </div>
        
        <div className="relative overflow-hidden rounded-[2rem] border-[4px] border-white shadow-2xl bg-black aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
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
