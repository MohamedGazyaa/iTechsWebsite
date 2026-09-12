import { solutions } from "@/data/solutions";
import { useTranslations } from "next-intl";
import SolutionCard from "./SolutionCard";

export default function SolutionsList() {
  const t = useTranslations("solutions.items");

  return (
    <ul className="pb-20 flex flex-wrap justify-center gap-4 md:gap-6">
      {solutions.map((solution) => (
        <li
          key={solution.path}
          className="h-full basis-[calc(50%-0.5rem)] md:basis-[calc(50%-0.75rem)] lg:basis-[calc((100%-3rem)/3)]"
        >
          <SolutionCard
            title={t(`${solution.key}.title`)}
            description={t(`${solution.key}.description`)}
            icon={solution.icon}
            href={`/solutions/${solution.path}`}
          />
        </li>
      ))}
    </ul>
  );
}
