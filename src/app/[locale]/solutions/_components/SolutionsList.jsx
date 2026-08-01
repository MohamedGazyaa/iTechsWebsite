import { solutions } from "@/data/solutions";
import SolutionCard from "./SolutionCard";

export default function SolutionsList({ locale }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      {solutions.map((solution) => (
        <li key={solution.path} className="h-full">
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
