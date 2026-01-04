import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Chrome, Flame } from 'lucide-react';

export function CTASection() {
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--primary)] px-6 py-16 sm:px-16 sm:py-24 text-center shadow-xl shadow-indigo-500/20">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-white opacity-[0.05] blur-3xl" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-indigo-900 opacity-[0.1] blur-3xl" />
            </div>

            <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl max-w-2xl mx-auto leading-tight">
                Ready to automate your workflow?
                </h2>
                <p className="mb-10 text-xl text-indigo-100 max-w-xl mx-auto">
                Join thousands of users who save hours every week with Form Filler Buddy.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                    <Button
                    href="https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="h-14 px-8 text-lg bg-white text-[var(--primary)] hover:bg-indigo-50 border-0 shadow-lg"
                    >
                    <Chrome className="w-5 h-5 mr-2" />
                    Add Extension
                    </Button>
                    <Button
                    href="https://addons.mozilla.org/en-US/firefox/addon/form-filler-buddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="h-14 px-8 text-lg bg-white text-[#ff7139] hover:bg-orange-50 border-0 shadow-lg"
                    >
                    <Flame className="w-5 h-5 mr-2" />
                    Add Addon
                    </Button>
                </div>
                <p className="mt-8 text-sm text-indigo-200">
                    Free forever • No account needed
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
}
