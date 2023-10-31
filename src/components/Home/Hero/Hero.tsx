/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [logoTop, setLogoTop] = useState<number>(0);

  useEffect(() => {
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      setLogoTop(Math.min(window.scrollY, windowHeight));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden z-10 relative">
      <img
        src="/assets/home_hero_layer_1.svg"
        alt=""
        className="absolute left-0 right-0 w-full h-full object-cover"
      />
      <img
        src="/assets/home_hero_layer_2.svg"
        alt=""
        className="absolute left-1/2 top-[35%] max-w-[min(80%,512px)] z-10 transition-transform"
        style={{
          translate: `-50% ${logoTop}px`,
        }}
      />
      <img
        src="/assets/home_hero_layer_3.svg"
        alt=""
        className="absolute left-0 right-0 w-full h-full object-cover z-20"
      />
    </section>
  );
}
