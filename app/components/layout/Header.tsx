import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/icon128.png"
            alt="Form Filler Buddy"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-semibold text-gray-900">
            Form Filler Buddy
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/manual"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            User Manual
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
}

