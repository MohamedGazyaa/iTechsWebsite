import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '../i18n/navigation';
import SubscribeForm from './SubscribeForm';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer>
      {/* Section 1 — Blue */}
      <div className="bg-itechsBlue">
        <div className="max-w-8xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 px-6 py-8 lg:px-8">
          <Link href="/" aria-label="iTechs — go to home page" className="inline-flex items-center shrink-0">
            <Image
              src="/assets/logo/logoWhiteText.png"
              alt="iTechs Arabia"
              width={200}
              height={80}
              className="w-auto h-20"
            />
          </Link>

          <SubscribeForm
            emailLabel={t('emailLabel')}
            emailPlaceholder={t('emailPlaceholder')}
            subscribeButton={t('subscribeButton')}
          />
        </div>
      </div>

      {/* Section 2 — Teal */}
      <div className="bg-itechsTeal">
        <div className="max-w-8xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 lg:px-8">
          {/* Contact info */}
          <div className="flex gap-10 text-white text-sm">
            <div className="flex flex-col gap-1">
              <span>{t('phone')}</span>
              <span>{t('companyEmail')}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>{t('addressLine1')}</span>
              <span>{t('addressLine2')}</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white text-xs tracking-wide text-center sm:text-end">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
