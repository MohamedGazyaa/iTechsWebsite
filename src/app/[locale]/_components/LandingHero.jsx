import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { HEADING_PAGE, BODY_TEXT } from "@/lib/typography";

export default async function LandingHero() {
  const t = await getTranslations("landingHero");

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Image
        src="/assets/home page/Landing.jpg"
        alt="iTechs Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-itechsBlue/60 to-itechsBlue" />

      <div className="absolute inset-0 z-10 flex flex-col lg:flex-row lg:items-stretch">
        {/* Top bar — mobile only */}
        <div className="shrink-0 h-16 overflow-hidden lg:hidden pointer-events-none">
          <Image
            src="/assets/elements/horizontalColumnBlue.png"
            alt=""
            width={1600}
            height={100}
            className="w-full h-16 object-cover object-bottom brightness-65 opacity-85"
            aria-hidden="true"
          />
        </div>

        {/* Left column — desktop only */}
        <div className="hidden lg:block shrink-0 lg:w-24 pointer-events-none">
          <Image
            src="/assets/elements/verticalColumnBlue.png"
            alt=""
            width={100}
            height={1600}
            className="h-full w-auto -ms-2 brightness-65 opacity-85"
            aria-hidden="true"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
          <h1 className={`${HEADING_PAGE} text-white leading-tight`}>
            {t("heading")}
          </h1>
          <p className={`${BODY_TEXT} mt-8 sm:mt-12 md:mt-16 lg:mt-28 text-white max-w-2xl`}>
            {t("subtitle")}
          </p>
        </div>

        {/* Right column — desktop only */}
        <div className="hidden lg:block shrink-0 lg:w-24 pointer-events-none">
          <Image
            src="/assets/elements/verticalColumnBlue.png"
            alt=""
            width={100}
            height={1600}
            className="h-full w-auto -me-3 brightness-65 opacity-85"
            aria-hidden="true"
          />
        </div>

        {/* Bottom bar — mobile only */}
        <div className="shrink-0 h-16 overflow-hidden lg:hidden pointer-events-none">
          <Image
            src="/assets/elements/horizontalColumnBlue.png"
            alt=""
            width={1600}
            height={100}
            className="w-full h-16 object-cover object-top brightness-65 opacity-85"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
