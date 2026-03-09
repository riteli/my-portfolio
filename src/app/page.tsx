import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import WorksSection from "@/components/sections/WorksSection";
import { getWorks } from "@/utils/microcms";

/**
 * サイトのトップページ
 * 全てのセクションを上から順に配置したシングルページ構成です。
 */
export default async function SpotlightPage() {
  const worksData = await getWorks(); // microCMSから制作物データを取得

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection works={worksData.contents} />
      <ContactSection />
    </>
  );
}
