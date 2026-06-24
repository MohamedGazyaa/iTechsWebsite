import Image from "next/image";
import { getTranslations } from "next-intl/server";

const layers = [
  {
    label: "Frontend Layer",
    key: "frontendLayer",
    techs: [
      { name: "React",        src: "/icons/react.webp" },
      { name: "React Native", src: "/icons/react-native.png" },
    ],
  },
  {
    label: "Backend Layer",
    key: "backendLayer",
    techs: [
      { name: "ClickHouse",    src: "/icons/clickHouse.png" },
      { name: "Kafka",         src: "/icons/kafka.svg" },
      { name: "Elasticsearch", src: "/icons/elasticSearch.png" },
      { name: "Django",        src: "/icons/django.png" },
      { name: ".NET Core",     src: "/icons/netcore.png" },
    ],
  },
  {
    label: "Data Warehouse",
    key: "dataWarehouse",
    techs: [
      { name: "Hadoop",               src: "/icons/hadoop.png" },
      { name: "PostgreSQL",           src: "/icons/PostgreSQL.png" },
      { name: "Microsoft SQL Server", src: "/icons/sqlServer.png" },
      { name: "Esri",                 src: "/icons/esri.png" },
    ],
  },
];

/*
  Pyramid: single triangle clip-path on a subgrid container spanning all rows.
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%) applied once to the whole shape.
  Three colored children fill their subgrid rows automatically.
*/
const pyramidSections = [
  { color: "#8bbbd8" },
  { color: "#4a7abf" },
  { color: "#2d3f98" },
];

/*
  Separator inset-e per row boundary — ends at the visible pyramid left edge.
  Pyramid widths: w-36 (9rem) | md:w-48 (12rem) | lg:w-64 (16rem)
  After row 1 (y=⅓): visible left = 33.3% of P → inset-e = P × 0.667
  After row 2 (y=⅔): visible left = 16.7% of P → inset-e = P × 0.833
*/
const separatorEndClass = [
  "inset-e-24 md:inset-e-32 lg:inset-e-[10.67rem]",
  "inset-e-30 md:inset-e-40 lg:inset-e-[13.33rem]",
];


export default async function Technologies() {
  const t = await getTranslations("technologies");

  return (
    <section
      aria-label={t("title")}
      className="w-full bg-itechsSkyBlue overflow-hidden flex flex-col"
    >

      {/* Top structural column */}
      <div className="shrink-0 h-16 overflow-hidden">
        <Image
          src="/assets/elements/horizontalColumnWhite.png"
          alt=""
          width={1600}
          height={100}
          className="w-full h-16 object-cover object-bottom mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex-1 py-8 px-6 md:py-14 md:px-8 lg:px-20">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-itechsTeal mb-2">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-itechsBlue mb-6 md:mb-10">
          {t("subtitle")}
        </p>

        {/* Layers + pyramid — explicit CSS grid: 6 rows (auto 1px auto 1px auto 1px), 2 cols */}
        <div className="grid grid-rows-[auto_1px_auto_1px_auto_1px] grid-cols-[1fr_9rem] md:grid-cols-[1fr_12rem] lg:grid-cols-[1fr_16rem]">

          {/* Content cell 1 — Frontend */}
          <div className="col-start-1 row-start-1 flex items-end gap-4 py-3 md:py-7">
            <ul className="flex flex-wrap items-center gap-2 md:gap-5 flex-1">
              {layers[0].techs.map((tech) => (
                <li key={tech.name} className="w-20 h-8 md:w-32 md:h-16 flex items-center justify-center shrink-0">
                  <Image src={tech.src} alt={tech.name} width={112} height={40} className="object-contain w-full h-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Separator 1 */}
          <div className="col-start-1 col-end-3 row-start-2 relative h-px">
            <div className={`absolute inset-y-0 inset-s-0 bg-itechsBlue/20 ${separatorEndClass[0]}`} />
          </div>

          {/* Content cell 2 — Backend */}
          <div className="col-start-1 row-start-3 flex items-end gap-4 py-3 md:py-7">
            <ul className="flex flex-wrap items-center gap-2 md:gap-5 flex-1">
              {layers[1].techs.map((tech) => (
                <li key={tech.name} className="w-20 h-8 md:w-32 md:h-16 flex items-center justify-center shrink-0">
                  <Image src={tech.src} alt={tech.name} width={112} height={40} className="object-contain w-full h-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Separator 2 */}
          <div className="col-start-1 col-end-3 row-start-4 relative h-px">
            <div className={`absolute inset-y-0 inset-s-0 bg-itechsBlue/20 ${separatorEndClass[1]}`} />
          </div>

          {/* Content cell 3 — Data Warehouse */}
          <div className="col-start-1 row-start-5 flex items-end gap-4 py-3 md:py-7">
            <ul className="flex flex-wrap items-center gap-2 md:gap-5 flex-1">
              {layers[2].techs.map((tech) => (
                <li key={tech.name} className="w-20 h-8 md:w-32 md:h-16 flex items-center justify-center shrink-0">
                  <Image src={tech.src} alt={tech.name} width={112} height={40} className="object-contain w-full h-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Separator 3 — full width, marks pyramid base */}
          <div className="col-start-1 col-end-3 row-start-6 h-px bg-itechsBlue/20" />

          {/* Pyramid — single triangle clip-path, subgrid inherits all 6 row heights */}
          <div
            aria-hidden="true"
            className="col-start-2 row-start-1 row-end-7 grid grid-rows-subgrid"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          >
            <div style={{ backgroundColor: pyramidSections[0].color }} />
            <div style={{ backgroundColor: pyramidSections[1].color }} />
            <div style={{ backgroundColor: pyramidSections[1].color }} />
            <div style={{ backgroundColor: pyramidSections[2].color }} />
            <div style={{ backgroundColor: pyramidSections[2].color }} />
            <div style={{ backgroundColor: pyramidSections[2].color }} />
          </div>

          {/* Labels overlay — full width, pe- aligns each label to its pyramid section's left edge */}
          <div className="col-start-1 col-end-3 row-start-1 row-end-7 grid grid-rows-subgrid pointer-events-none z-10">
            <div className="flex items-end justify-end pe-24 md:pe-32 lg:pe-[10.67rem]">
              <span className="text-xs md:text-sm lg:text-base font-semibold text-itechsTeal">{layers[0].label}</span>
            </div>
            <div /> {/* separator row — empty */}
            <div className="flex items-end justify-end pe-30 md:pe-40 lg:pe-[13.33rem]">
              <span className="text-xs md:text-sm lg:text-base font-semibold text-itechsTeal">{layers[1].label}</span>
            </div>
            <div /> {/* separator row — empty */}
            <div className="flex items-end justify-end pe-36 md:pe-48 lg:pe-64">
              <span className="text-xs md:text-sm lg:text-base font-semibold text-itechsTeal">{layers[2].label}</span>
            </div>
            <div /> {/* bottom separator row — empty */}
          </div>

        </div>
      </div>

      {/* Bottom structural column */}
      <div className="shrink-0 h-16 overflow-hidden">
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
