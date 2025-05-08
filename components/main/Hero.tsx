import React from "react";
import HeroContent from "../sub/HeroContent";

export default function Hero() {
  return (
    <section className="relative h-dvh flex flex-col" id="home">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none select-none rotate-180 absolute w-full
        -top-0 sm:-top-[100px] md:-top-[150px] lg:-top-[200px] xl:-top-[330px] 2xl:-top-[450px]
        left-0 z-[1] aspect-video"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
}
