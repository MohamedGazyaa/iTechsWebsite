import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {BODY_TEXT, HEADING_PAGE } from "@/lib/typography";

export default async function AboutUsSection() {
  const t = await getTranslations("aboutUs");

  return (
    <section className="w-full bg-itechsSkyBlue">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Text — 2 parts */}
        <div className="lg:col-span-2 py-12 md:py-16 px-8 md:px-12 lg:px-16">
          <h2 className={`${HEADING_PAGE} text-itechsBlue`}>
            {t("title")}
          </h2>
          <div className="mt-12">
            {["p1", "p2", "p3", "p4"].map((key) => (
              <p key={key} className={`mt-6 ${BODY_TEXT} leading-none text-itechsBlue`}>
                {t(key)}
              </p>
            ))}
          </div>
        </div>

        {/* Image — 1 part, flush to edge */}
        <div className="relative h-64 md:h-auto md:min-h-72 lg:min-h-120 order-first lg:order-0">
          <Image
            src="/assets/about us/aboutUs.jpg"
            alt="About iTechs Arabia"
            fill
            className="object-cover brightness-70"
          />
        </div>
      </div>
    </section>
  );
}
