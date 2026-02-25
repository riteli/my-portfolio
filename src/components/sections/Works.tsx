"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WorkCard from "../ui/WorkCard";
import { WORKS_DATA } from "@/data/works";

/**
 * 制作物一覧を表示するWorksセクション
 * embla-carousel-reactを使用してスライダー形式でカードを配置します。
 */
export default function Works() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <section id="works" className="w-full max-w-4xl mx-auto px-6">
      <div className="text-center">
        <h2 className="font-serif font-bold text-3xl text-text-main inline-block pb-2 border-b border-accent">
          Works
        </h2>
      </div>

      <div className="relative mt-6 md:mt-12">
        {/* スライダー本体の表示領域 */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-4 md:-ml-12 items-stretch">
            {WORKS_DATA.map((work, index) => (
              <div
                key={work.id}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] md:pl-12"
              >
                <WorkCard work={work} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* スライダーの操作ボタン */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-border-white-10 hover:bg-white/10 hover:border-accent transition-all text-text-main group"
            aria-label="前の作品へ"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-border-white-10 hover:bg-white/10 hover:border-accent transition-all text-text-main group"
            aria-label="次の作品へ"
          >
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 装飾用の下部ライン */}
        <div className="w-full h-4 border-t-4 border-border-white-10 bg-linear-to-b from-white/5 to-transparent transform translate-y-4 rounded-full opacity-50" />
      </div>
    </section>
  );
}
