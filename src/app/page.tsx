"use client";

import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import WorksSection from "@/components/sections/WorksSection";

/**
 * サイトのトップページ
 * 全てのセクションを上から順に配置したシングルページ構成です。
 */
export default function SpotlightPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </>
  );
}
