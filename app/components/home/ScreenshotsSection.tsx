import Image from 'next/image';
import { Section } from '../ui/Section';

export function ScreenshotsSection() {
  return (
    <Section className="py-24 bg-white/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Clean & Intuitive Interface
            </h2>
            <p className="text-[var(--muted-foreground)]">
                Designed to be simple, fast, and easy to use.
            </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] relative">
                  <Image
                    src={`/assets/images/screenshot-${num}.png`}
                    alt={`Form Filler Buddy Screenshot ${num}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
