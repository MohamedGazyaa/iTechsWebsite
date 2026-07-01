import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ServicesList from "./_components/ServicesList";
import { HEADING_PAGE, BODY_TEXT } from "@/lib/typography";

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
        <div className="shrink-0 w-12 md:w-16 lg:w-24">
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
          <h1 className={`${HEADING_PAGE} text-itechsBlue mb-4`}>
            {t("title")}
          </h1>
          <p className={`${BODY_TEXT} text-itechsBlue mb-12`}>
            {t("subtitle")}
          </p>
          <ServicesList locale={locale} />
        </div>

        {/* Right structural column */}
        <div className="shrink-0 w-12 md:w-16 lg:w-24">
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
