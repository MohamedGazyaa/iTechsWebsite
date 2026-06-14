import { setRequestLocale } from 'next-intl/server';

export default async function ServicePage({ params }) {
  const { locale, service } = await params;
  setRequestLocale(locale);

  return (
    <></>
  );
}
