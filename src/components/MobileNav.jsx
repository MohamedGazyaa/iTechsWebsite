'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '../i18n/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { useLocale, useTranslations } from 'next-intl';
import { navItems } from '@/data/navigation';
import { INERT_TARGET_IDS } from '@/lib/inert-target-ids';

const languages = [
  { locale: 'en', label: 'English' },
  { locale: 'ar', label: 'العربية' },
];

export default function MobileNav() {
  const t = useTranslations('nav');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const localeLabel = { en: "EN", ar: "ع" }[locale];

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(next) {
    router.replace(pathname, { locale: next });
    setLangOpen(false);
    setSidebarOpen(false);
  }

  // These elements are made inert imperatively via DOM APIs, not a JSX
  // `inert` prop — do not also add inert={...} directly on page-content or
  // mobile-logo in their own files, the two mechanisms would conflict.
  useEffect(() => {
    const elements = INERT_TARGET_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => {
      if (sidebarOpen) el.setAttribute('inert', '');
      else el.removeAttribute('inert');
    });
    return () => elements.forEach((el) => el.removeAttribute('inert'));
  }, [sidebarOpen]);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
        className="w-10 h-10 flex items-center justify-center text-itechsBlue"
      >
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        inert={!sidebarOpen}
        className={`fixed top-0 inset-s-0 h-full w-60 bg-itechsSkyBlue z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'
        }`}
      >

        {/* Close button */}
        <div className="flex items-center justify-end px-4 py-4">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center text-itechsBlue"
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-6 py-4">
          <ul className="flex flex-col gap-6">
            {navItems.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
              return (
                <li key={href} className="flex items-center gap-2">
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
                    onClick={() => setSidebarOpen(false)}
                    className="text-xl leading-none font-medium text-itechsBlue hover:text-itechsTeal transition-colors"
                  >
                    {t(label)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Language selector */}
        <div ref={langRef} className="flex justify-end px-6 py-6">
          <div className="relative">
            <button
              onClick={() => setLangOpen(prev => !prev)}
              aria-label="Select language"
              aria-expanded={langOpen}
              className="flex items-center gap-2 text-itechsBlue hover:text-itechsTeal transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faEarthAmericas} className="w-5 h-5" />
              <span className={`text-sm ${locale === "ar" ? "-mt-1" : ""}`}>{localeLabel}</span>
            </button>

            {langOpen && (
              <ul className="absolute bottom-full mb-1 inset-e-0 bg-white rounded-lg shadow-md overflow-hidden min-w-32 z-50">
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
          </div>
        </div>

      </div>
    </>
  );
}