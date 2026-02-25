"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";

/**
 * サイトのトップページ
 * 全てのセクションを上から順に配置したシングルページ構成です。
 */
export default function SpotlightPage() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  );
}
