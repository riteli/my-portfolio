"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SpotlightPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setOpacity(1);
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    const element = containerRef.current;
    if (!element) return;

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#19102E" }}
    >
      {/* スポットライトのエフェクト層 */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* コンテンツエリア */}
      <div className="z-10 max-w-2xl px-6 text-center">
        {/* フォントは一時的にsans-serifを使用 */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#E0E0E0] md:text-6xl font-serif">
          Midnight Theater
        </h1>
        <p className="text-lg text-gray-400">
          マウスを動かしてみてください。
          <br />
          暗闇の中で、あなたの意志（カーソル）だけが光を灯します。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-[#E0E0E0] mb-2">
                Project {item}
              </h3>
              <p className="text-sm text-gray-400">
                ここに作品の概要が入ります。スポットライトが当たると、カードの輪郭が微かに浮かび上がります。
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
