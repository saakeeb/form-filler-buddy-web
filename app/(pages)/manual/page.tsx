import { generateSEOMetadata } from '@/app/components/seo/SEO';
import { Section } from '@/app/components/ui/Section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = generateSEOMetadata({
  title: 'User Manual',
  description:
    'Complete user manual for Form Filler Buddy Chrome extension. Learn how to save fields, auto-fill forms, and use test data generator.',
  path: '/manual',
});

export default function ManualPage() {
  return (
    <Section className="py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          User Manual
        </h1>
        <p className="mb-12 text-lg text-gray-600">
          Learn how to use Form Filler Buddy to save time and fill forms
          effortlessly.
        </p>

        <div className="space-y-12">
          {/* Quick Start */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Quick Start
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Form Filler Buddy saves your form data and fills it automatically. Here&apos;s how to get started:
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Click the extension icon to open the popup</li>
                  <li>Add your first field (like email or phone number)</li>
                  <li>Go to any website with a form</li>
                  <li>
                    Click &quot;Auto Fill&quot; or press{' '}
                    <kbd className="rounded bg-white px-2 py-1 text-sm font-mono">
                      Ctrl+Shift+F
                    </kbd>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Saving Fields */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Saving Your Data
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Add fields at the bottom of the popup. Give each field a name and value.
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="mb-2 text-sm font-medium">Example:</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Field Name:</span>{' '}
                    <code className="rounded bg-white px-2 py-1">email</code>
                  </div>
                  <div>
                    <span className="font-medium">Value:</span>{' '}
                    <code className="rounded bg-white px-2 py-1">
                      john.doe@example.com
                    </code>
                  </div>
                </div>
              </div>
              <p>
                You can also scope fields to specific websites. For example, use different emails for different sites:
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="mb-2 text-sm font-medium">Example:</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Field Name:</span>{' '}
                    <code className="rounded bg-white px-2 py-1">email</code>
                  </div>
                  <div>
                    <span className="font-medium">Value:</span>{' '}
                    <code className="rounded bg-white px-2 py-1">
                      work@company.com
                    </code>
                  </div>
                  <div>
                    <span className="font-medium">Website:</span>{' '}
                    <code className="rounded bg-white px-2 py-1">
                      company.com
                    </code>
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    This email will only fill on company.com, not on other sites.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-3 font-medium">Common Field Examples:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { name: 'full_name', value: 'John Doe' },
                    { name: 'email', value: 'john.doe@example.com' },
                    { name: 'phone', value: '+1 (555) 123-4567' },
                    { name: 'github', value: 'https://github.com/johndoe' },
                    { name: 'birth_date', value: '1990-05-15' },
                    {
                      name: 'address',
                      value: '123 Main St, City, State 12345',
                    },
                    {
                      name: 'linkedin',
                      value: 'https://linkedin.com/in/johndoe',
                    },
                    { name: 'website', value: 'https://johndoe.com' },
                    { name: 'company', value: 'Tech Corp Inc' },
                    { name: 'job_title', value: 'Software Engineer' },
                    { name: 'city', value: 'New York' },
                    { name: 'zip', value: '10001' },
                  ].map((field) => (
                    <div
                      key={field.name}
                      className="rounded-lg border border-gray-200 bg-white p-3"
                    >
                      <div className="text-sm">
                        <span className="font-medium">{field.name}:</span>{' '}
                        <code className="rounded bg-gray-50 px-1.5 py-0.5 text-xs">
                          {field.value}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-4 overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src="/assets/images/screenshot-1.png"
                  alt="Add Field Interface"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </section>

          {/* Auto Filling */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Auto Filling Forms
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Once you&apos;ve saved your data, filling forms is super easy:
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Navigate to any website with a form</li>
                  <li>Click the &quot;Auto Fill&quot; button in the extension popup</li>
                  <li>
                    Or use the keyboard shortcut:{' '}
                    <kbd className="rounded bg-white px-2 py-1 text-sm font-mono">
                      Ctrl+Shift+F
                    </kbd>{' '}
                    (Mac:{' '}
                    <kbd className="rounded bg-white px-2 py-1 text-sm font-mono">
                      Cmd+Shift+F
                    </kbd>
                    )
                  </li>
                </ol>
              </div>
              <p>
                The extension automatically matches your saved fields with form inputs. It looks at field names, IDs, labels, and placeholders to find the right match.
              </p>
            </div>
          </section>

          {/* Fill Test Data */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Fill Test Data
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Need to test a form quickly? Use the test data feature to fill everything with realistic fake data.
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Go to any form page</li>
                  <li>Click &quot;Fill Test Data&quot; in the popup</li>
                  <li>
                    Or press{' '}
                    <kbd className="rounded bg-white px-2 py-1 text-sm font-mono">
                      Ctrl+Shift+G
                    </kbd>{' '}
                    (Mac:{' '}
                    <kbd className="rounded bg-white px-2 py-1 text-sm font-mono">
                      Cmd+Shift+G
                    </kbd>
                    )
                  </li>
                </ol>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="mb-2 text-sm font-medium text-green-900">
                  What gets filled:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-green-800">
                  <li>Name fields → Random names like &quot;John Smith&quot;</li>
                  <li>
                    Email fields → Realistic emails like
                    &quot;john.smith@gmail.com&quot;
                  </li>
                  <li>
                    Phone fields → Phone numbers like &quot;+1 (555) 123-4567&quot;
                  </li>
                  <li>Radio buttons → First option selected</li>
                  <li>Checkboxes → Checked</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Managing Fields */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Managing Your Fields
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-2 font-semibold">Search</h3>
                <p className="text-sm">
                  Use the search box to quickly find fields when you have many saved. It searches by name, value, and website.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-2 font-semibold">Reorder</h3>
                <p className="text-sm">
                  Drag fields up or down to organize them. Your order is saved automatically.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-2 font-semibold">Edit</h3>
                <p className="text-sm">
                  Click the edit icon on any field to update its name, value, or website. You can even rename fields.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-2 font-semibold">Delete</h3>
                <p className="text-sm">
                  Click the delete icon to remove a field you no longer need.
                </p>
              </div>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Keyboard Shortcuts
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Auto Fill</span>
                    <kbd className="rounded bg-white px-3 py-1 text-sm font-mono shadow-sm">
                      Ctrl+Shift+F
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fill Test Data</span>
                    <kbd className="rounded bg-white px-3 py-1 text-sm font-mono shadow-sm">
                      Ctrl+Shift+G
                    </kbd>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Note:</strong> On Mac, use{' '}
                  <kbd className="rounded bg-white px-2 py-1 text-xs font-mono">
                    Cmd
                  </kbd>{' '}
                  instead of{' '}
                  <kbd className="rounded bg-white px-2 py-1 text-xs font-mono">
                    Ctrl
                  </kbd>
                </p>
              </div>
            </div>
          </section>

          {/* Tips & Tricks */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Tips & Tricks
            </h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Field names are case-insensitive. &quot;Email&quot; and
                  &quot;email&quot; work the same.
                </li>
                <li>
                  Use common field names like &quot;email&quot;, &quot;phone&quot;,
                  &quot;name&quot; for better matching.
                </li>
                <li>
                  Website scoping is smart - a field for &quot;example.com&quot; also
                  works on &quot;www.example.com&quot;.
                </li>
                <li>Test data works great for QA testing and demos.</li>
                <li>
                  All your data is encrypted using SHA-256 key derivation and XOR
                  cipher, then stored locally in your browser - it never leaves your
                  device and remains secure even if Chrome storage is compromised.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Section>
  );
}
