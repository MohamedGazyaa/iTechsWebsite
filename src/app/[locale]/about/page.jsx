import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import AboutUsSection from "./_components/aboutUs";
import VisionMission from "./_components/VisionMission";
import TeamSection from "./_components/team";
import PartnersSection from "@/components/PartnersSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutSeo" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/about",
    locale,
  });
}

export default async function AboutPage() {
  const t = await getTranslations("partnersSection");

  return (
    <main>
      <AboutUsSection />
      <VisionMission />
      <TeamSection />
      <PartnersSection variant="grid" heading={t("heading")} />
    </main>
  );
}
