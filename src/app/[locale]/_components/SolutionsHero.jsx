import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/i18n/navigation";

const solutions = ["geospatial", "defense", "vrar"];

export default async function SolutionsHero() {
  const t = await getTranslations("solutionsHero");
  const locale = await getLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full h-screen overflow-hidden">

      <Image
        src="/assets/home page/Solutions.jpg"
        alt="iTechs Solutions"
        fill
        className="object-cover"
        priority
      />

      {/* itechsBlue gradient */}
      <div className="absolute inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-transparent via-itechsBlue/60 to-itechsBlue" />
      {/* Darkening overlay on the opaque end */}
      <div className="absolute inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-transparent to-black/50" />

      {/* Top border strip — z-20 so it overlays the teal lines */}
      <div className="absolute inset-x-0 top-0 z-20 pointer-events-none overflow-hidden h-16 ltr:[mask-image:linear-gradient(to_right,rgba(0,0,0,0.05),rgba(0,0,0,0.80))] rtl:[mask-image:linear-gradient(to_left,rgba(0,0,0,0.05),rgba(0,0,0,0.80))]">
        <Image src="/assets/elements/horizontalColumnBlue.png" alt="" width={1600} height={100} className="w-full h-16 object-cover object-bottom brightness-65" aria-hidden="true" />
      </div>

      {/* Bottom border strip — z-20 */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none overflow-hidden h-16 ltr:[mask-image:linear-gradient(to_right,rgba(0,0,0,0.05),rgba(0,0,0,0.80))] rtl:[mask-image:linear-gradient(to_left,rgba(0,0,0,0.05),rgba(0,0,0,0.80))]">
        <Image src="/assets/elements/horizontalColumnBlue.png" alt="" width={1600} height={100} className="w-full h-16 object-cover object-top brightness-65" aria-hidden="true" />
      </div>

      {/* Main content row — sits between the two border strips */}
      <div className="absolute top-16 bottom-16 inset-x-0 z-10 flex flex-row items-stretch overflow-hidden">

        {/* Heading anchored to bottom-left */}
        <div className="flex-1 flex flex-col justify-end pb-6 ps-12 lg:ps-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
            {t("heading1")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/80 mt-1">
            {t("heading2")}
          </p>
        </div>

        {/*
          Solutions column — absolute-positioned frames and line segments.
          3 frames at vertical centers: 15%, 50%, 85%.
          Outer lines are short; inner lines are long.
          Frame h-12 = 3rem, half = 1.5rem. Gap at each line end = 8px.
          L1: top 0,               height calc(15% - 1.5rem - 8px)
          L2: top calc(15%+1.5rem+8px), height calc(35% - 3rem - 16px)
          L3: top calc(50%+1.5rem+8px), height calc(35% - 3rem - 16px)
          L4: top calc(85%+1.5rem+8px), height calc(15% - 1.5rem - 8px)
        */}
        <div className="relative h-full w-72 lg:w-96 me-2">

          {/* Line 1 */}
          <div className="absolute start-[22px] top-0 w-0.5 h-[calc(15%-1.5rem-8px)] bg-itechsTeal" />
          {/* Line 2 */}
          <div className="absolute start-[22px] top-[calc(15%+1.5rem+8px)] w-0.5 h-[calc(35%-3rem-16px)] bg-itechsTeal" />
          {/* Line 3 */}
          <div className="absolute start-[22px] top-[calc(50%+1.5rem+8px)] w-0.5 h-[calc(35%-3rem-16px)] bg-itechsTeal" />
          {/* Line 4 */}
          <div className="absolute start-[22px] top-[calc(85%+1.5rem+8px)] w-0.5 h-[calc(15%-1.5rem-8px)] bg-itechsTeal" />

          {solutions.map((key, i) => {
            const pct = 15 + i * 35;
            const top = `calc(${pct}% - 1.5rem)`;
            const maxHeight = i < solutions.length - 1 ? '35%' : 'calc(15% + 1.5rem)';
            return (
              <div key={key}>
                {/* Frame */}
                <div className="absolute start-0 w-12 h-12 z-10" style={{ top }}>
                  <Image
                    src="/assets/elements/frame.png"
                    fill
                    className="object-contain"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                {/* Text — clipped to available space before next frame */}
                <div className="absolute start-16 end-4 overflow-hidden" style={{ top, maxHeight }}>
                  <h3 className="text-white font-bold text-base lg:text-lg leading-snug">
                    {t(`${key}Title`)}
                  </h3>
                  <p className="text-white/70 text-xs lg:text-sm mt-1 leading-tight">
                    {t(`${key}Desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chevron */}
        <div className="flex items-center px-4">
          <Link href="/services" className="text-itechsBlue/40 hover:text-itechsBlue transition-colors">
            <FontAwesomeIcon
              icon={isRtl ? faChevronLeft : faChevronRight}
              className="text-2xl"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}