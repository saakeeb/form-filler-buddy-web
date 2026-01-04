import Image from 'next/image';
import { Section } from '../ui/Section';

export function ScreenshotsSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Screenshots
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:scale-105"
            >
              <Image
                src={`/assets/images/screenshot-${num}.png`}
                alt={`Form Filler Buddy Screenshot ${num} showing the extension interface`}
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


