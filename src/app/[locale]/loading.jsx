import { getTranslations } from 'next-intl/server';

// Suspense fallback shown during route transitions under [locale]
// (and while the dynamic services/[service] route resolves).
export default async function Loading() {
  const t = await getTranslations('loading');

  return (
    <div
      role="status"
      className="flex-1 flex items-center justify-center bg-itechsSkyBlue py-24"
    >
      <span
        aria-hidden="true"
        className="h-12 w-12 rounded-full border-4 border-itechsBlue/20 border-t-itechsBlue animate-spin"
      />
      <span className="sr-only">{t('label')}</span>
    </div>
  );
}
