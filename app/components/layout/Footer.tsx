import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Form Filler Buddy
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A smart Chrome extension that automatically fills web forms with
              your saved data or realistic test data.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/manual"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  User Manual
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:sakib14april@gmail.com"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Form Filler Buddy. All rights reserved. Created by{' '}
            <a
              href="https://github.com/saakeeb"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 hover:underline"
            >
              Nazmus Sakib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

