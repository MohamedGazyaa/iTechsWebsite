import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import LandingHero from "./_components/LandingHero";
import MottoHero from "./_components/MottoHero";
import SolutionsHero from "./_components/SolutionsHero";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomeSeo" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "",
    locale,
  });
}

export default function HomePage() {
  return (
    <main>
      <LandingHero />
      <MottoHero />
      <SolutionsHero />
    </main>
  );
}
