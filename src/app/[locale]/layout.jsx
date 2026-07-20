import '../globals.css'
import { Alexandria } from 'next/font/google';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-ar',
  display: 'swap',
});

const gillSans = localFont({
  src: [
    { path: '../../../public/fonts/GillSans.woff2', weight: '400', style: 'normal' },
    { path: '../../../public/fonts/GillSansBold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-en',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "iTechs Arabia",
  description: "iTechs company website",
  icons: { icon: '/assets/logo/favicon.jpg' },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`h-full antialiased ${alexandria.variable} ${gillSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div id="page-content">
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
