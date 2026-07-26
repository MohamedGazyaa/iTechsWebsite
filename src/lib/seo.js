const LOCALES = ['en', 'ar'];

const BRAND_NAME = {
  en: 'iTechs Arabia',
  ar: 'آيتكس أرابيا',
};

const OG_IMAGE = {
  en: '/assets/logo/englishOgImage.jpg',
  ar: '/assets/logo/arabicOgImage.jpg',
};

export function buildAlternates(path, currentLocale) {
  return {
    canonical: `/${currentLocale}${path}`,
    languages: Object.fromEntries(
      LOCALES.map((locale) => [locale, `/${locale}${path}`])
    ),
  };
}

export function buildOpenGraph({ title, description, path, locale }) {
  const brand = BRAND_NAME[locale] ?? BRAND_NAME.en;
  const ogLocale = locale === 'ar' ? 'ar_EG' : 'en_US';

  return {
    type: 'website',
    siteName: brand,
    title,
    description,
    url: `/${locale}${path}`,
    locale: ogLocale,
    images: [OG_IMAGE[locale] ?? OG_IMAGE.en],
  };
}

export function buildMetadata({ title, description, path, locale }) {
  const brand = BRAND_NAME[locale] ?? BRAND_NAME.en;
  const fullTitle = `${title} | ${brand}`;

  return {
    title: fullTitle,
    description,
    alternates: buildAlternates(path, locale),
    openGraph: buildOpenGraph({ title: fullTitle, description, path, locale }),
  };
}