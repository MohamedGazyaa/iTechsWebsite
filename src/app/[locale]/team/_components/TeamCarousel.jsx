'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { teamMembers } from '@/data/team';

// Retained for future use.
const FRAME_STRIP_H = '10rem';

export default function TeamCarousel() {
  const t = useTranslations('team');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const n = teamMembers.length;

  const navigate = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const goPrev = () => navigate((activeIndex - 1 + n) % n);
  const goNext = () => navigate((activeIndex + 1) % n);

  // RTL icon mirroring only — never affects onClick handlers.
  const startIcon = isRtl ? faChevronRight : faChevronLeft;
  const endIcon   = isRtl ? faChevronLeft  : faChevronRight;

  const active = teamMembers[activeIndex];
  const prev = n >= 3 ? teamMembers[(activeIndex - 1 + n) % n] : null;
  const next = n >= 3 ? teamMembers[(activeIndex + 1) % n]     : null;

  return (
    <div role="group" aria-label={t('carouselLabel')} className="relative w-full mt-32">

      {/* line-anchor: half of neighbor frame h-28 = 3.5rem — update together */}
      <div
        className="absolute inset-x-20 h-px bg-itechsTeal pointer-events-none hidden md:block z-0"
        style={{ top: '3.5rem' }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between px-4 md:px-8">

        {/* Left chevron — shifts list left: right neighbor → center (goNext) */}
        <button
          onClick={goNext}
          aria-label={t('nextMember')}
          className="shrink-0 h-28 flex items-center p-2 text-itechsBlue hover:text-itechsTeal transition-colors"
        >
          <FontAwesomeIcon icon={startIcon} className="text-xl" />
        </button>

        {/* Prev neighbor — desktop only */}
        {prev && (
          <div className="hidden md:flex flex-col items-center gap-4 shrink-0 z-10">
            {/* bg-itechsSkyBlue masks the absolute line behind this frame */}
            <div className="relative w-28 h-28 bg-itechsSkyBlue">
              <Image
                src="/assets/elements/frame.png"
                fill
                className="object-contain"
                alt=""
                aria-hidden="true"
              />
            </div>
            <p className="text-xs font-bold text-itechsBlue uppercase tracking-[0.15em] text-center whitespace-nowrap">
              {t(`members.${prev.id}.name`)}
            </p>
          </div>
        )}

        {/* Active member */}
        <div
          aria-live="polite"
          className={`flex flex-col items-center gap-4 shrink-0 z-10 -mt-8 transition-all duration-150 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Frame wrapper — bg-itechsSkyBlue masks the absolute line; layer a per-member photo here in the future */}
          <div className="relative w-44 h-44 bg-itechsSkyBlue">
            <Image
              src="/assets/elements/frame.png"
              fill
              className="object-contain"
              alt=""
              aria-hidden="true"
            />
          </div>
          <p className="text-base font-bold text-itechsBlue uppercase tracking-[0.15em] text-center">
            {t(`members.${active.id}.name`)}
          </p>
          <p className="text-sm font-semibold text-itechsTeal text-center mt-2">
            {t(`members.${active.id}.title`)}
          </p>
          <p className="text-sm text-itechsBlue/70 text-center leading-relaxed max-w-60">
            {t(`members.${active.id}.description`)}
          </p>
        </div>

        {/* Next neighbor — desktop only */}
        {next && (
          <div className="hidden md:flex flex-col items-center gap-4 shrink-0 z-10">
            {/* bg-itechsSkyBlue masks the absolute line behind this frame */}
            <div className="relative w-28 h-28 bg-itechsSkyBlue">
              <Image
                src="/assets/elements/frame.png"
                fill
                className="object-contain"
                alt=""
                aria-hidden="true"
              />
            </div>
            <p className="text-xs font-bold text-itechsBlue uppercase tracking-[0.15em] text-center whitespace-nowrap">
              {t(`members.${next.id}.name`)}
            </p>
          </div>
        )}

        {/* Right chevron — shifts list right: left neighbor → center (goPrev) */}
        <button
          onClick={goPrev}
          aria-label={t('prevMember')}
          className="shrink-0 h-28 flex items-center p-2 text-itechsBlue hover:text-itechsTeal transition-colors"
        >
          <FontAwesomeIcon icon={endIcon} className="text-xl" />
        </button>

      </div>

    </div>
  );
}
