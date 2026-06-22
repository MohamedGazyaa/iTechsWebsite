import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";

export default async function MottoHero() {
  const [t, locale] = await Promise.all([
    getTranslations("mottoHero"),
    getLocale(),
  ]);

  const imageSrc =
    locale === "ar"
      ? "/assets/home page/mottoRTL.png"
      : "/assets/home page/mottoLTR.png";

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src={imageSrc}
        alt="iTechs Motto"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-center ps-6 md:ps-12 lg:ps-16">
        <div className="w-[45%]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-itechsBlue">
            {t("heading")}
          </h2>
          <p className="mt-6 text-sm md:text-base lg:text-lg leading-tight text-itechsBlue text-justify">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
