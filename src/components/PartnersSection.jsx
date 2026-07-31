import Image from "next/image";
import { partners } from "@/data/partners";
import {HEADING_SECTION } from "@/lib/typography";

const VARIANT_LOGO = {
  strip: { boxClass: "h-16 w-full md:h-14 md:w-32", sizes: "(max-width: 768px) 30vw, 128px" },
  grid: { boxClass: "h-32 w-full md:h-40", sizes: "(max-width: 768px) 45vw, 30vw" },
};

function Logo({ partner, variant, grayscale, decorative = false }) {
  const { boxClass, sizes } = VARIANT_LOGO[variant];
  const image = (
    <div className={`relative ${boxClass}`}>
      <Image
        src={partner.logo}
        alt={decorative ? "" : partner.name}
        fill
        sizes={sizes}
        className={`object-contain ${
          grayscale ? "grayscale transition duration-300 hover:grayscale-0" : ""
        }`}
      />
    </div>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={decorative ? undefined : partner.name}
        aria-hidden={decorative || undefined}
        tabIndex={decorative ? -1 : undefined}
      >
        {image}
      </a>
    );
  }
  return image;
}

export default function PartnersSection({
  variant,
  grayscale = false,
  heading,
  className = "",
}) {
  if (variant === "grid") {
    return (
      <section
        aria-label={heading || "Partners"}
        className={`w-full bg-itechsSkyBlue overflow-hidden flex flex-col lg:flex-row ${className}`}
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
          {heading && (
            <h2 className={`${HEADING_SECTION} text-itechsBlue mb-12`}>{heading}</h2>
          )}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="flex items-center justify-center basis-[calc(50%-1rem)] md:basis-[calc((100%-4rem)/3)]"
              >
                <Logo partner={partner} variant="grid" grayscale={grayscale} />
              </li>
            ))}
          </ul>
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
  return (
    <section
      aria-label={heading || "Partners"}
      className={`bg-itechsSkyBlue py-12 ${className}`}
    >
      {heading && (
        <h2 className={`${HEADING_SECTION} text-itechsBlue text-start ms-4 mb-12`}>
          {heading}
        </h2>
      )}
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 px-6 md:flex-nowrap md:justify-start md:gap-0 md:px-12">
        {partners.map((partner, i) => (
          <li
            key={partner.name}
            className={`flex shrink-0 items-center justify-center py-2 basis-[calc(33.333%_-_1rem)] md:flex-1 md:basis-auto ${
              i > 0 ? "md:border-s md:border-itechsBlue/15" : ""
            }`}
          >
            <Logo partner={partner} variant="strip" grayscale={grayscale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
