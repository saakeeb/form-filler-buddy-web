import { Section } from '../ui/Section';
import { UseCaseCard } from '../ui/UseCaseCard';

const useCases = [
  {
    title: 'Job Applicants',
    description:
      'Fill multiple job applications quickly. Save time on repetitive form fields and reduce typos in contact information.',
  },
  {
    title: 'Developers & QA Testers',
    description:
      'Generate realistic test data instantly. Test forms without manual data entry and speed up development workflows.',
  },
  {
    title: 'Students',
    description:
      'Apply to multiple programs efficiently. Fill scholarship and application forms faster with saved credentials.',
  },
  {
    title: 'Professionals',
    description:
      'Fill CRM and ATS forms quickly. Manage multiple accounts with different credentials and streamline data entry.',
  },
];

export function UseCasesSection() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Perfect For
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}


