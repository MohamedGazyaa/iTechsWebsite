'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HEADING_PAGE, BODY_TEXT } from '@/lib/typography';

// Segment error boundary for every page under [locale]. It renders below
// layout.jsx (inside NextIntlClientProvider), so the Header/Footer stay mounted
// and translations are available.
export default function Error({ reset }) {
  const t = useTranslations('error');

  return (
    <main
      role="alert"
      className="flex-1 flex flex-col items-center justify-center text-center gap-6 bg-itechsSkyBlue px-8 py-24"
    >
      <h1 className={`${HEADING_PAGE} text-itechsBlue`}>{t('title')}</h1>
      <p className={`${BODY_TEXT} text-itechsBlue/70 max-w-xl`}>
        {t('description')}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-itechsBlue px-8 py-3 text-sm font-semibold text-white hover:bg-itechsTeal transition-colors focus:outline-none focus:ring-2 focus:ring-itechsTeal cursor-pointer"
        >
          {t('retry')}
        </button>
        <Link
          href="/"
          className="rounded-full border-2 border-itechsBlue px-8 py-3 text-sm font-semibold text-itechsBlue hover:bg-itechsBlue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-itechsTeal"
        >
          {t('home')}
        </Link>
      </div>
    </main>
  );
}
