import { Section } from '../ui/Section';
import { ReviewCard } from '../ui/ReviewCard';

const reviews = [
  {
    name: 'Amjad Hossain',
    date: 'December 18, 2025',
    review: 'i was looking for this kind of extension for a long time.',
  },
  {
    name: 'MD.RAKIBUL ISLAM',
    date: 'December 15, 2025',
    review:
      'This extension has been incredibly helpful for me as an SQA engineer, as I frequently work with forms and it saves a significant amount of time by automating the entire process.',
    helpful: 1,
  },
  {
    name: 'Tousif Iqbal Anik',
    date: 'December 14, 2025',
    review:
      'This is just the tool I needed! Simple UI with necessary functionalities for filling form.',
    helpful: 1,
  },
  {
    name: 'Md. Sarafat Ayon',
    date: 'December 10, 2025',
    review:
      'This is a great extension to generate fake data to fill out a form, also we can also auto-fill out the form with saved data.',
    helpful: 1,
  },
];

export function ReviewsSection() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            What People Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from Chrome Web Store users
          </p>
        </div>
        <div className="mb-8 flex items-center justify-center">
          <a
            href="https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-blue-300"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            View All Reviews
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </Section>
  );
}


