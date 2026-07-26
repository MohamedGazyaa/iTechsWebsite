import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import AboutUsSection from "./_components/aboutUs";
import VisionMission from "./_components/VisionMission";
import TeamSection from "./_components/team";

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

export default function AboutPage() {
  return (
    <main>
      <AboutUsSection />
      <VisionMission />
      <TeamSection />
    </main>
  );
}
