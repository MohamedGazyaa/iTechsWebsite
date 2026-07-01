import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { HEADING_PAGE } from "@/lib/typography";

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

      <div className="absolute inset-0 z-10 flex flex-row items-stretch">
        {/* Left column */}
        <div className="shrink-0 w-16 md:w-20 lg:w-24 pointer-events-none">
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
          <p className="mt-8 sm:mt-12 md:mt-16 lg:mt-28 text-[10px] md:text-sm lg:text-base text-white max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Right column */}
        <div className="shrink-0 w-16 md:w-20 lg:w-24 pointer-events-none">
          <Image
            src="/assets/elements/verticalColumnBlue.png"
            alt=""
            width={100}
            height={1600}
            className="h-full w-auto -me-3 brightness-65 opacity-85"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
