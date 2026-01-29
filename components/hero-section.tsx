import { AnimatedButton } from "components/animated-button";

export function HeroSection() {
  return (
    <section className="hero relative min-h-80 overflow-hidden bg-black sm:min-h-96 md:min-h-[500px]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/Fake_Watch_Ad_Commercial_720P.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="hero-content relative z-10 justify-start">
        <div className="max-w-lg sm:max-w-2xl text-white animate-slideInLeft">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
            Premium Watch Collection
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-200">
            Discover elegant timepieces for every occasion
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            {/* ✨ SKAISTĀ ANIMĒTĀ POGA */}
            <AnimatedButton href="/search">Shop Now</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
