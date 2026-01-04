import { Section } from '../ui/Section';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

const reviews = [
  {
    name: 'Amjad Hossain',
    date: 'December 18, 2025',
    review: 'i was looking for this kind of extension for a long time.',
    initial: 'A',
    bg: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'MD.RAKIBUL ISLAM',
    date: 'December 15, 2025',
    review:
      'This extension has been incredibly helpful for me as an SQA engineer, as I frequently work with forms and it saves a significant amount of time by automating the entire process.',
    initial: 'M',
    bg: 'bg-green-100 text-green-700'
  },
  {
    name: 'Tousif Iqbal Anik',
    date: 'December 14, 2025',
    review:
      'This is just the tool I needed! Simple UI with necessary functionalities for filling form.',
    initial: 'T',
    bg: 'bg-purple-100 text-purple-700'
  },
  {
    name: 'Md. Sarafat Ayon',
    date: 'December 10, 2025',
    review:
      'This is a great extension to generate fake data to fill out a form, also we can also auto-fill out the form with saved data.',
    initial: 'M',
    bg: 'bg-orange-100 text-orange-700'
  },
];

export function ReviewsSection() {
  return (
    <Section className="py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)]">
            Trusted by developers & users
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            See what people are saying on the Chrome Web Store
          </p>
          
          <div className="mt-8 flex justify-center">
             <Button 
                href="https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic/reviews"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="gap-2"
             >
                View all reviews <ExternalLink className="w-4 h-4" />
             </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.bg}`}>
                    {review.initial}
                 </div>
                 <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{review.name}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{review.date}</p>
                 </div>
                 <div className="ml-auto flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                 </div>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--foreground)] leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
