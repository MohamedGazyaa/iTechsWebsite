import Image from "next/image";
import { getTranslations } from "next-intl/server";

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

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-[12vh] lg:px-36">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
          {t("heading")}
        </h1>
        <p className="mt-28 text-xs md:text-sm lg:text-base text-white max-w-2xl">
          {t("subtitle")}
        </p>
      </div>

      {/* Left column */}
      <div className="absolute inset-y-0 inset-s-0 z-10 pointer-events-none">
        <Image
          src="/assets/elements/verticalColumnBlue.png"
          alt=""
          width={100}
          height={1600}
          className="h-full w-auto -ms-2 brightness-65 opacity-85"
          aria-hidden="true"
        />
      </div>

      {/* Right column */}
      <div className="absolute inset-y-0 inset-e-0 z-10 pointer-events-none">
        <Image
          src="/assets/elements/verticalColumnBlue.png"
          alt=""
          width={100}
          height={1600}
          className="h-full w-auto -me-3 brightness-65 opacity-85"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}