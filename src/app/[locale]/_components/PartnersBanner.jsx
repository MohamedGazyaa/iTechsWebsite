import Image from "next/image";
import { getTranslations } from "next-intl/server";

// One item spans the full viewport on mobile (one per screen, less dense) and half
// the viewport from md up (two per screen). The cluster (esri logo + label) is
// centered; a large blue bullet sits on the item's leading boundary, acting as the
// separator between clusters.
function Item({ label }) {
  return (
    <div className="relative flex w-screen md:w-[50vw] shrink-0 items-center justify-center gap-3 rtl:flex-row-reverse">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 start-0 hidden items-center md:flex ltr:-translate-x-1/2 rtl:translate-x-1/2"
      >
        <span className="block size-2.5 rounded-full bg-itechsBlue" />
      </span>
      <Image
        src="/assets/partners/esri.png"
        alt="esri"
        width={70}
        height={26}
        className="h-5 w-auto shrink-0 md:h-6"
      />
      <span className="text-sm md:text-base font-bold text-itechsBlue whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

// A group of items wide enough to overflow the viewport; two identical groups
// tile the track so translateX(-50%) loops seamlessly.
function Group({ label, ...props }) {
  return (
    <div className="flex shrink-0 items-center" {...props}>
      {Array.from({ length: 4 }).map((_, i) => (
        <Item key={i} label={label} />
      ))}
    </div>
  );
}

export default async function PartnersBanner() {
  const t = await getTranslations("partnersBanner");
  const label = t("heading");

  return (
    <section
      aria-label={label}
      className="relative h-8 w-full overflow-hidden bg-white md:h-10"
    >
      {/* Absolute left-0 anchor keeps the track physically left-aligned in both
          directions, so translateX(-50%) always fills the viewport (otherwise RTL
          anchors at the right edge and the track scrolls fully off-screen). */}
      <div className="absolute inset-y-0 left-0 flex w-max items-center animate-partners-marquee rtl:[animation-direction:reverse]">
        <Group label={label} />
        <Group label={label} aria-hidden="true" />
      </div>
    </section>
  );
}
