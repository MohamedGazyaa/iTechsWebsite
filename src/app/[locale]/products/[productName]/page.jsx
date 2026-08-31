import Image from "next/image";
import {
  HEADING_SECTION,
  HEADING_SUB_SECTION,
  BODY_TEXT,
} from "@/lib/typography";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { products } from "@/data/products";
import CollapsibleSection from "./_components/CollapsibleSection";

export async function generateMetadata({ params }) {
  const { locale, productName } = await params;
  const product = products.find((p) => p.path === productName);
  if (!product) return {};
  const t = await getTranslations({ locale, namespace: "products.items" });

  return buildMetadata({
    title: t(`${product.key}.title`),
    description: t(`${product.key}.description`),
    path: `/products/${product.path}`,
    locale,
    includeBrand: false,
  });
}

export default async function ProductDetailPage({ params }) {
  const { locale, productName } = await params;
  const product = products.find((p) => p.path === productName);

  if (!product) {
    notFound();
  }

  const t = await getTranslations(`products.items.${product.key}`);
  const tSections = await getTranslations({
    locale,
    namespace: "products.sections",
  });

  const detailedDescription = t.raw("detailedDescription");
  const whatWeDeliver = t.raw("whatWeDeliver");
  const whereWeDeploy = t.raw("whereWeDeploy");
  const outcomes = t.raw("outcomes");

  const integrationCapabilities = t.has("integrationCapabilities")
    ? t.raw("integrationCapabilities")
    : [];
  const systemComponents = t.has("systemComponents")
    ? t.raw("systemComponents")
    : [];

  const gridSections = [
    {
      key: "whereWeDeploy",
      title: tSections("whereWeDeploy"),
      items: whereWeDeploy,
    },
    { key: "outcomes", title: tSections("outcomes"), items: outcomes },
    {
      key: "systemComponents",
      title: tSections("systemComponents"),
      items: systemComponents,
    },
    {
      key: "integrationCapabilities",
      title: tSections("integrationCapabilities"),
      items: integrationCapabilities,
    },
  ].filter((section) => section.items.length > 0);

  const descriptionParagraphs = detailedDescription.map((paragraph, i) => (
    <p
      key={i}
      className={`mt-6 first:mt-0 ${BODY_TEXT} leading-relaxed text-itechsBlue text-justify`}
    >
      {paragraph}
    </p>
  ));

  const hasImages = product.images?.length > 0;

  return (
    <main className="w-full">
      <header className="py-12 md:py-16 px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4">
          <Image
            src={product.icon}
            alt={t("title")}
            width={64}
            height={64}
            className="shrink-0"
          />
          <h1 className={`${HEADING_SECTION} text-itechsBlue`}>{t("title")}</h1>
        </div>
        <div className="mt-4 border-b-2 border-itechsBlue" />
      </header>

      {/* Mobile (below sm): description + stacked images side by side in one row */}
      <section className="px-8 pb-12 md:hidden">
        {hasImages && (
          <div className="float-end ms-4 mb-3 w-28">
            {product.images.map((src, i) => (
              <div key={i} className="relative w-full aspect-square mb-3">
                <Image
                  src={src}
                  alt={`${t("title")} ${i + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        )}
        <div className="min-w-0 text-justify">{descriptionParagraphs}</div>
        <div className="clear-both"></div>
      </section>

      {/* sm and up: description full-width */}
      <section className="hidden md:block px-8 md:px-12 lg:px-16 pb-12">
        {descriptionParagraphs}
      </section>

      {/* sm and up: images centered below the description */}
      {hasImages && (
        <section className="hidden sm:block px-8 md:px-12 lg:px-16 pb-12">
          <ul className="flex flex-wrap justify-center gap-6">
            {product.images.map((src, i) => (
              <li
                key={i}
                className="relative h-80 w-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc((100%-3rem)/3)]"
              >
                <Image
                  src={src}
                  alt={`${t("title")} ${i + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="px-8 md:px-12 lg:px-16 pb-12">
        <CollapsibleSection
          title={tSections("whatWeDeliver")}
          titleClassName={`${HEADING_SUB_SECTION} text-itechsBlue`}
        >
          <ul className="mt-6 space-y-6">
            {whatWeDeliver.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-itechsBlue" />
                <div>
                  <h3 className={`${BODY_TEXT} font-semibold text-itechsBlue`}>
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 ${BODY_TEXT} leading-relaxed text-itechsBlue`}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      </section>

      <section className="px-8 md:px-12 lg:px-16 pb-16">
        <ul className="flex flex-wrap justify-center gap-x-16 gap-y-12">
          {gridSections.map((section) => (
            <li
              key={section.key}
              className="basis-full md:basis-[calc(50%-2rem)] lg:basis-[calc((100%-8rem)/3)]"
            >
              <CollapsibleSection
                title={section.title}
                titleClassName={`${HEADING_SUB_SECTION} text-itechsBlue`}
              >
                <ul className="mt-6 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-itechsBlue" />
                      <p className={`${BODY_TEXT} text-itechsBlue`}>{item}</p>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
