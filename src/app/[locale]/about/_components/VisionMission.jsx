import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { HEADING_SECTION, BODY_TEXT } from "@/lib/typography";

export default async function VisionMission() {
  const t = await getTranslations("visionMission");

  return (
    <section className="w-full bg-itechsBlue overflow-hidden flex flex-row">

      {/* Left column — structural left border */}
      <div className="shrink-0 w-12 md:w-16 lg:w-24">
        <Image
          src="/assets/elements/verticalColumnBlue.png"
          alt=""
          width={100}
          height={1600}
          className="h-full w-auto -ms-2 brightness-65 opacity-85"
          aria-hidden="true"
        />
      </div>

      {/* Content — sits structurally between the two columns */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-112.5 lg:min-h-130">

        {/* Text column */}
        <div className="flex-1 flex flex-col gap-10 py-16 px-8 lg:px-12">
          <div>
            <h2 className={`${HEADING_SECTION} text-itechsTeal mb-3`}>
              {t("visionTitle")}
            </h2>
            <p className={`${BODY_TEXT} leading-relaxed text-white`}>
              {t("visionText")}
            </p>
          </div>

          <div>
            <h2 className={`${HEADING_SECTION} text-itechsTeal mb-3`}>
              {t("missionTitle")}
            </h2>
            <p className={`${BODY_TEXT} leading-relaxed text-white`}>
              {t("missionText")}
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="flex-1 py-6">
          <div className="relative h-full min-h-60">
            <Image
              src="/assets/about us/VisionMission.jpg"
              alt="Vision and Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* Right column — structural right border */}
      <div className="shrink-0 w-12 md:w-16 lg:w-24">
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
