import Image from "next/image";
import { getTranslations } from "next-intl/server";
import TeamCarousel from "./TeamCarousel";
import { HEADING_PAGE } from "@/lib/typography";

export default async function TeamSection() {
  const t = await getTranslations("team");

  return (
    <section
      aria-label={t("title")}
      className="w-full min-h-screen bg-itechsSkyBlue overflow-hidden flex flex-col lg:flex-row"
    >

      {/* Top bar — mobile only */}
      <div className="shrink-0 h-16 overflow-hidden lg:hidden">
        <Image
          src="/assets/elements/horizontalColumnWhite.png"
          alt=""
          width={1600}
          height={100}
          className="w-full h-16 object-cover object-bottom mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Left column — desktop only */}
      <div className="hidden lg:block shrink-0 lg:w-24">
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
      <div className="flex-1 min-w-0 py-16 px-8 lg:px-16">
        <h2 className={`${HEADING_PAGE} text-itechsBlue mb-12`}>
          {t("title")}
        </h2>
        <TeamCarousel />
      </div>

      {/* Right column — desktop only */}
      <div className="hidden lg:block shrink-0 lg:w-24">
        <Image
          src="/assets/elements/verticalColumnWhite.png"
          alt=""
          width={100}
          height={1600}
          className="h-full w-auto -me-3 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Bottom bar — mobile only */}
      <div className="shrink-0 h-16 overflow-hidden lg:hidden">
        <Image
          src="/assets/elements/horizontalColumnWhite.png"
          alt=""
          width={1600}
          height={100}
          className="w-full h-16 object-cover object-top mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

    </section>
  );
}
