'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '../i18n/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { useLocale, useTranslations } from 'next-intl';
import { navItems } from '@/data/navigation';

const languages = [
  { locale: 'en', label: 'English' },
  { locale: 'ar', label: 'العربية' },
];

export default function NavLinks() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const localeLabel = { en: "EN", ar: "ع" }[locale];
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(next) {
    router.replace(pathname, { locale: next });
    setOpen(false);
  }

  return (
    <ul className="flex items-center gap-8 sm:gap-12">
      {navItems.map(({ href, label }) => {
        const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
        return (
          <li key={href} className="flex items-center gap-1">
            {isActive && (
              <Image
                src="/assets/elements/frame.png"
                alt=""
                width={48}
                height={48}
                className="w-5 h-5 object-contain"
              />
            )}
            <Link
              href={href}
              className="text-lg sm:text-xl leading-none text-itechsBlue font-medium hover:text-itechsTeal transition-colors"
            >
              {t(label)}
            </Link>
          </li>
        );
      })}

      <li ref={ref} className="relative">
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label="Select language"
          aria-expanded={open}
          className="flex items-center gap-2 text-base sm:text-lg text-itechsBlue font-medium hover:text-itechsTeal transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faEarthAmericas} className="w-5 h-5" />
          <span className={`text-sm ${locale === "ar" ? "-mt-1" : ""}`}>{localeLabel}</span>
        </button>

        {open && (
          <ul className="absolute top-full mt-2 inset-e-0 bg-white rounded-lg shadow-md overflow-hidden min-w-32 z-50">
            {languages.map(({ locale: l, label }) => (
              <li key={l}>
                <button
                  onClick={() => switchLocale(l)}
                  className="w-full px-4 py-2 text-start text-sm font-medium transition-colors cursor-pointer text-itechsBlue hover:bg-itechsSkyBlue"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}