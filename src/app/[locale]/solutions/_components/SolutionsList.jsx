import { solutions } from "@/data/solutions";
import SolutionCard from "./SolutionCard";

export default function SolutionsList({ locale }) {
  return (
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
      {solutions.map((solution) => (
        <li
          key={solution.path}
          className="h-full basis-[calc(50%-0.5rem)] md:basis-[calc(50%-0.75rem)] lg:basis-[calc((100%-3rem)/3)]"
        >
          <SolutionCard
            title={solution.title[locale]}
            description={solution.description[locale]}
            icon={solution.icon}
            href={`/solutions/${solution.path}`}
          />
        </li>
      ))}
    </ul>
  );
}