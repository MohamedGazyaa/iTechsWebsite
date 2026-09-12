import Image from "next/image";
import {
  HEADING_SECTION,
  HEADING_SUB_SECTION,
  BODY_TEXT,
} from "@/lib/typography";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import CollapsibleSection from "./_components/CollapsibleSection";

export async function generateMetadata({ params }) {
  const { locale, solutionName } = await params;
  const solution = solutions.find((s) => s.path === solutionName);
  if (!solution) return {};
  const t = await getTranslations({ locale, namespace: "solutions.items" });

  return buildMetadata({
    title: t(`${solution.key}.title`),
    description: t(`${solution.key}.description`),
    path: `/solutions/${solution.path}`,
    locale,
    includeBrand: false,
  });
}

export default async function SolutionDetailPage({ params }) {
  const { locale, solutionName } = await params;
  const solution = solutions.find((s) => s.path === solutionName);

  if (!solution) {
    notFound();
  }

  const t = await getTranslations(`solutions.items.${solution.key}`);
  const tSections = await getTranslations({
    locale,
    namespace: "solutions.sections",
  });

  const detailedDescription = t.raw("detailedDescription");

  const whatWeDeliver = t.has("whatWeDeliver") ? t.raw("whatWeDeliver") : [];
  const isFlatDeliverList =
    whatWeDeliver.length > 0 && typeof whatWeDeliver[0] === "string";

  const closingParagraph = t.has("closingParagraph")
    ? t("closingParagraph")
    : null;

  const gisUsability = t.has("gisUsability") ? t.raw("gisUsability") : [];

  const whereWeDeploy = t.has("whereWeDeploy") ? t.raw("whereWeDeploy") : [];
  const outcomes = t.has("outcomes") ? t.raw("outcomes") : [];

  const gridSections = [
    {
      key: "whereWeDeploy",
      title: tSections("whereWeDeploy"),
      items: whereWeDeploy,
    },
    { key: "outcomes", title: tSections("outcomes"), items: outcomes },
  ].filter((section) => section.items.length > 0);

  return (
    <main className="w-full bg-itechsBlue border-b-2 border-itechsTeal">
      <header className="py-12 md:py-16 px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4">
          <Image
            src={solution.icon}
            alt={t("title")}
            width={64}
            height={64}
            className="shrink-0 bg-itechsSkyBlue rounded-lg"
          />
          <h1 className={`${HEADING_SECTION} text-itechsTeal`}>{t("title")}</h1>
        </div>
        <div className="mt-4 border-b-2 border-itechsTeal" />
      </header>

      <section className="px-8 md:px-12 lg:px-16 pb-12">
        {detailedDescription.map((paragraph, i) => (
          <p
            key={i}
            className={`mt-6 first:mt-0 ${BODY_TEXT} leading-relaxed text-itechsSkyBlue text-justify`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {whatWeDeliver.length > 0 && (
        <section className="px-8 md:px-12 lg:px-16 pb-12">
          <CollapsibleSection
            title={tSections("whatWeDeliver")}
            titleClassName={`${HEADING_SUB_SECTION} text-itechsTeal`}
          >
            {isFlatDeliverList ? (
              <ul className="mt-6 space-y-2">
                {whatWeDeliver.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-itechsTeal" />
                    <p className={`${BODY_TEXT} text-itechsSkyBlue`}>{item}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-6 space-y-6">
                {whatWeDeliver.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-itechsTeal" />
                    <div>
                      <h3
                        className={`${BODY_TEXT} font-semibold text-itechsSkyBlue`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-1 ${BODY_TEXT} leading-relaxed text-itechsSkyBlue`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {closingParagraph && (
              <p
                className={`mt-6 ${BODY_TEXT} leading-relaxed text-itechsSkyBlue text-justify`}
              >
                {closingParagraph}
              </p>
            )}
          </CollapsibleSection>
        </section>
      )}

      {gisUsability.length > 0 && (
        <section className="px-8 md:px-12 lg:px-16 pb-12">
          <CollapsibleSection
            title={tSections("gisUsability")}
            titleClassName={`${HEADING_SUB_SECTION} text-itechsTeal`}
          >
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {gisUsability.map((group, i) => (
                <div key={i}>
                  <h3 className={`${BODY_TEXT} font-semibold text-itechsTeal`}>
                    {group.category}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-itechsTeal" />
                        <p className={`${BODY_TEXT} text-itechsSkyBlue`}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </section>
      )}

      {gridSections.length > 0 && (
        <section className="px-8 md:px-12 lg:px-16 pb-16">
          <ul className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {gridSections.map((section) => (
              <li
                key={section.key}
                className="basis-full md:basis-[calc(50%-2rem)] lg:basis-[calc((100%-8rem)/3)]"
              >
                <CollapsibleSection
                  title={section.title}
                  titleClassName={`${HEADING_SUB_SECTION} text-itechsTeal`}
                >
                  <ul className="mt-6 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-itechsTeal" />
                        <p className={`${BODY_TEXT} text-itechsSkyBlue`}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CollapsibleSection>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
