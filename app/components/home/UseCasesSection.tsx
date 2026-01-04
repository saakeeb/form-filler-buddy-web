import { Section } from '../ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Briefcase, Code, GraduationCap, User } from 'lucide-react';

const useCases = [
  {
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    title: 'Job Applicants',
    description:
      'Fill multiple job applications quickly. Save time on repetitive form fields and reduce typos in your contact information.',
    color: 'bg-blue-50 border-blue-100',
  },
  {
    icon: <Code className="w-5 h-5 text-purple-600" />,
    title: 'Developers & QA',
    description:
      'Generate realistic test data instantly. Test forms without manual data entry and speed up your development workflows.',
    color: 'bg-purple-50 border-purple-100',
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-green-600" />,
    title: 'Students',
    description:
      'Apply to multiple programs efficiently. Fill scholarship and application forms faster with your saved details.',
    color: 'bg-green-50 border-green-100',
  },
  {
    icon: <User className="w-5 h-5 text-orange-600" />,
    title: 'Professionals',
    description:
      'Fill CRM and ATS forms in seconds. Manage multiple accounts with different credentials and streamline data entry.',
    color: 'bg-orange-50 border-orange-100',
  },
];

export function UseCasesSection() {
  return (
    <Section className="py-24 bg-white/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 border border-indigo-100">
            Use Cases
          </span>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Perfect for everyone
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Whether you're hunting for jobs, testing code, or just browsing, we've got you covered.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Card key={index} className={`border ${useCase.color} hover:shadow-md transition-all duration-300 relative overflow-hidden bg-white`}>
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full translate-x-1/3 -translate-y-1/3 opacity-20 ${useCase.color.split(' ')[0]}`} />
              
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`p-2 rounded-lg ${useCase.color.split(' ')[0]}`}>
                    {useCase.icon}
                </div>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
