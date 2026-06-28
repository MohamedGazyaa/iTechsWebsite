import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ServicesList from "./_components/ServicesList";

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations("servicesPage");

  return (
    <main>
      <section
        aria-label={t("title")}
        className="w-full min-h-screen bg-itechsSkyBlue overflow-hidden flex flex-row"
      >

        {/* Left structural column */}
        <div className="shrink-0 max-w-24">
          <Image
            src="/assets/elements/verticalColumnWhite.png"
            alt=""
            width={100}
            height={1600}
            className="h-full w-auto -ms-2 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="flex-1 py-16 px-8 lg:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-itechsBlue mb-4">
            {t("title")}
          </h1>
          <p className="text-sm md:text-base text-itechsBlue mb-12">
            {t("subtitle")}
          </p>
          <ServicesList locale={locale} />
        </div>

        {/* Right structural column */}
        <div className="shrink-0 max-w-24">
          <Image
            src="/assets/elements/verticalColumnWhite.png"
            alt=""
            width={100}
            height={1600}
            className="h-full w-auto -me-3 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>

      </section>
    </main>
  );
}
