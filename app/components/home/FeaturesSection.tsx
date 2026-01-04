import { 
  CheckCircle, 
  Settings, 
  Globe, 
  Lightbulb, 
  Lock, 
  Shield 
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const features = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    title: 'Smart Auto-Fill',
    description: 'Automatically detects and fills matching form fields across any website using intelligent matching logic.',
    bg: 'bg-green-50',
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-500" />,
    title: 'Custom Fields',
    description: 'Save any form field with custom names and values. Organize your data with drag & drop ease.',
    bg: 'bg-blue-50',
  },
  {
    icon: <Globe className="w-6 h-6 text-indigo-500" />,
    title: 'Site Scoping',
    description: 'Scope fields to specific domains. Ensure you use the right credentials for the right website.',
    bg: 'bg-indigo-50',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
    title: 'Test Data',
    description: 'Generate realistic fake data instantly. Perfect for developers and QA testers to speed up workflows.',
    bg: 'bg-amber-50',
  },
  {
    icon: <Lock className="w-6 h-6 text-rose-500" />,
    title: 'Secure Storage',
    description: 'Sensitive fields are protected. Your data is encrypted and stored locally on your device.',
    bg: 'bg-rose-50',
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    title: 'Privacy First',
    description: 'We respect your privacy. All your data stays in your browser and is never sent to external servers.',
    bg: 'bg-purple-50',
  },
];

export function FeaturesSection() {
  return (
    <Section className="py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4">
            Everything you need to speed up
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Powerful features designed to make form filling effortless and secure.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <CardTitle className="mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
