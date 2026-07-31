import { getTranslations } from "next-intl/server";
import PartnersBanner from "./_components/PartnersBanner";
import LandingHero from "./_components/LandingHero";
import MottoHero from "./_components/MottoHero";
import SolutionsHero from "./_components/SolutionsHero";
import PartnersSection from "@/components/PartnersSection";

export default async function HomePage() {
  const t = await getTranslations("partnersSection");

  return (
    <main>
      <PartnersBanner />
      <LandingHero />
      <MottoHero />
      <SolutionsHero />
      <PartnersSection variant="strip" heading={t("stripHeading")} />
    </main>
  );
}
