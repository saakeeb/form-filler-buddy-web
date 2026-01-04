import { FeatureCard } from '../ui/FeatureCard';
import { Section } from '../ui/Section';
import {
  CheckCircleIcon,
  SettingsIcon,
  GlobeIcon,
  LightbulbIcon,
  LockIcon,
  ShieldIcon,
} from '../ui/Icons';

const features = [
  {
    icon: <CheckCircleIcon />,
    title: 'Smart Auto-Fill',
    description: 'Automatically detects and fills matching form fields across any website.',
  },
  {
    icon: <SettingsIcon />,
    title: 'Custom Field Management',
    description: 'Save any form field with custom names and values. Organize with drag & drop.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Website-Specific Fields',
    description: 'Scope fields to specific domains. Different credentials for different sites.',
  },
  {
    icon: <LightbulbIcon />,
    title: 'Test Data Generator',
    description: 'Fill forms with realistic fake data for testing and demos.',
  },
  {
    icon: <LockIcon />,
    title: 'Password Protection',
    description: 'Password fields are masked in the UI. Secure local storage only.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Privacy First',
    description: 'All data stored locally. Never sent to external servers.',
  },
];

export function FeaturesSection() {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Powerful Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}


