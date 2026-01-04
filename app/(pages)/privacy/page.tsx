import { generateSEOMetadata } from '@/app/components/seo/SEO';
import { Section } from '@/app/components/ui/Section';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Form Filler Buddy Chrome extension. Learn how we handle your data and protect your privacy.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Section className="py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mb-4 text-sm text-gray-600">Last updated: December 2024</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Introduction
            </h2>
            <p className="text-gray-700">
              Form Filler Buddy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a Chrome
              extension designed to help users automatically fill web forms with saved
              data or realistic test data. This Privacy Policy explains how we handle
              your data and protect your privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Data Collection and Storage
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Local Storage Only:</strong> Form Filler Buddy stores all your
                saved form data locally in your browser using Chrome&apos;s secure
                storage API (chrome.storage). We do not collect, transmit, or store
                any of your data on external servers.
              </p>
              <p>
                <strong>What We Store:</strong> The extension stores:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Field names and values you choose to save</li>
                <li>Website-specific field associations (if you choose to scope fields
                  to specific domains)</li>
                <li>Field ordering preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Data Transmission
            </h2>
            <p className="text-gray-700">
              <strong>No External Transmission:</strong> Form Filler Buddy does not
              send any of your data to external servers. All operations are performed
              locally on your device. The extension only accesses web pages when you
              explicitly trigger the auto-fill or test data fill actions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Permissions
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>The extension requires the following permissions:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>storage:</strong> To save and retrieve your form field data
                  locally
                </li>
                <li>
                  <strong>activeTab:</strong> To access the current tab when you click
                  the extension icon
                </li>
                <li>
                  <strong>scripting:</strong> To inject scripts that fill form fields
                  on web pages
                </li>
                <li>
                  <strong>&lt;all_urls&gt;:</strong> To work on any website where you
                  want to fill forms
                </li>
              </ul>
              <p>
                These permissions are only used for the core functionality of the
                extension and are not used to collect or transmit data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Security
            </h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Password fields are masked in the extension UI for security
                </li>
                <li>
                  Passwords cannot be copied to clipboard - they can only be used for
                  autofill
                </li>
                <li>
                  All data is encrypted by Chrome&apos;s storage API
                </li>
                <li>
                  The extension follows Chrome&apos;s Content Security Policy
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Data Sync
            </h2>
            <p className="text-gray-700">
              If you have Chrome sync enabled, your extension data (including saved
              form fields) may sync across your devices. This sync is handled entirely
              by Chrome&apos;s built-in sync service and is subject to Chrome&apos;s privacy
              policy. We do not have access to or control over this sync process.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Third-Party Services
            </h2>
            <p className="text-gray-700">
              Form Filler Buddy does not use any third-party analytics, tracking, or
              data collection services. The extension operates entirely locally on your
              device.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Your Rights
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>You have complete control over your data:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>You can view all saved fields in the extension popup</li>
                <li>You can edit or delete any saved field at any time</li>
                <li>You can uninstall the extension, which will remove all stored data</li>
                <li>You can disable Chrome sync if you don&apos;t want data synced across devices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new Privacy Policy in the extension or on
              our website. You are advised to review this Privacy Policy periodically
              for any changes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>
                <strong>Author:</strong> Nazmus Sakib
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:sakib14april@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  sakib14april@gmail.com
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/saakeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @saakeeb
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Section>
  );
}

