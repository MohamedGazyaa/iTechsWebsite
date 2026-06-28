import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesList({ locale }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      {services.map((service) => (
        <li key={service.path} className="h-full">
          <ServiceCard
            title={service.title[locale]}
            description={service.description[locale]}
            icon={service.icon}
            href={`/services/${service.path}`}
          />
        </li>
      ))}
    </ul>
  );
}
