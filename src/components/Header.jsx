import Image from 'next/image';
import { Link } from '../i18n/navigation';
import { useTranslations } from 'next-intl';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

export default function Header() {
  const t = useTranslations('nav');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/team', label: t('team') },
    { href: '/contact', label: t('contact') },
  ];

  const logo = (
    <>
      <Image
        src="/assets/logo/logoIcon.png"
        alt=""
        width={80}
        height={80}
        className="h-20 w-auto"
      />
      <Image
        src="/assets/logo/logoBlueText.png"
        alt=""
        width={200}
        height={80}
        className="h-20 w-auto"
      />
    </>
  );

  return (
    <header className="bg-itechsSkyBlue">

      {/* Mobile */}
      <div className="flex lg:hidden items-center px-4 py-3">
        <MobileNav items={navItems} />
        <div className="flex-1 flex justify-center">
          <Link href="/" aria-label="iTechs — go to home page" className="inline-flex items-center">
            {logo}
          </Link>
        </div>
        <div className="w-10" />
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex max-w-8xl mx-auto w-full items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" aria-label="iTechs — go to home page" className="inline-flex items-center">
          {logo}
        </Link>
        <nav>
          <NavLinks items={navItems} />
        </nav>
      </div>

    </header>
  );
}
