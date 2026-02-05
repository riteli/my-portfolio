export default function Hero() {
  return (
    <section className="relative w-full aspect-[2.35/1] max-w-7xl bg-black flex flex-col justify-between items-center font-serif py-10 px-10 overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_120%)] z-0" />

      <div className="absolute inset-0 bg-white/5 animate-project-flicker pointer-events-none z-0 mix-blend-overlay" />

      <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center gap-2 w-full">
        <p className="tracking-widest text-xl md:text-2xl text-text-main opacity-80">
          NOW SHOWING
        </p>
        <h1 className="tracking-wider text-4xl md:text-6xl font-bold text-text-main">
          My Portfolio
        </h1>
      </div>

      <div className="relative z-10 w-full text-right">
        <p className="text-lg md:text-xl text-text-main opacity-70">
          Directed by Ritsu Ogata
        </p>
      </div>
    </section>
  );
}