'use client';

import { usePathname } from 'next/navigation';
import './globals.css';

// Catches errors thrown by the root layout itself (src/app/[locale]/layout.jsx)
// and the message-loading path (src/i18n/request.js). It replaces the entire
// tree, so it must render its own <html>/<body> and stay dependency-free — no
// Header/Footer and no next-intl provider (which is why text is inlined here,
// with the locale picked from the pathname).
const messages = {
  en: {
    title: 'Something went wrong',
    description: 'An unexpected error occurred. Please try again.',
    retry: 'Try again',
  },
  ar: {
    title: 'حدث خطأ ما',
    description: 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.',
    retry: 'حاول مرة أخرى',
  },
};

export default function GlobalError({ reset }) {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const t = messages[locale];

  return (
    <html lang={locale} dir={dir} className="h-full antialiased">
      <body className="min-h-full flex items-center justify-center bg-itechsSkyBlue p-8">
        <main
          role="alert"
          className="flex flex-col items-center text-center gap-4 max-w-md"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-itechsBlue">
            {t.title}
          </h1>
          <p className="text-sm md:text-base text-itechsBlue/70">
            {t.description}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-itechsBlue px-8 py-3 text-sm font-semibold text-white hover:bg-itechsTeal transition-colors focus:outline-none focus:ring-2 focus:ring-itechsTeal cursor-pointer"
          >
            {t.retry}
          </button>
        </main>
      </body>
    </html>
  );
}
