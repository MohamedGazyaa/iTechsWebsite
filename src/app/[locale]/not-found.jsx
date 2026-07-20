import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HEADING_PAGE, BODY_TEXT } from '@/lib/typography';

// Localized 404 rendered for notFound() calls inside a matched locale. It sits
// under [locale], so it renders inside layout.jsx (Header/Footer + provider),
// reads the request locale, and stays translated + RTL-aware.
export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <main className="flex flex-col items-center justify-center text-center gap-6 min-h-[60vh] bg-itechsSkyBlue px-8 py-24">
      <p className="text-6xl md:text-8xl font-bold text-itechsTeal">404</p>
      <h1 className={`${HEADING_PAGE} text-itechsBlue`}>{t('title')}</h1>
      <p className={`${BODY_TEXT} text-itechsBlue/70 max-w-xl`}>
        {t('description')}
      </p>
      <Link
        href="/"
        className="rounded-full bg-itechsBlue px-8 py-3 text-sm font-semibold text-white hover:bg-itechsTeal transition-colors focus:outline-none focus:ring-2 focus:ring-itechsTeal"
      >
        {t('backHome')}
      </Link>
    </main>
  );
}
