/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [logoTop, setLogoTop] = useState<number>(0);
  const windowHeightRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      windowHeightRef.current = window.innerHeight;
      const handleScroll = () => {
        setLogoTop(Math.min(window.scrollY, windowHeightRef.current));
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden z-10 relative pointer-events-none">
      <img
        src="/assets/home_hero_layer_1.svg"
        alt=""
        className="absolute left-0 right-0 w-full h-full object-cover"
      />
      <motion.img
        src="/assets/home_hero_layer_2.svg"
        alt=""
        className="absolute left-1/2  z-10 transition-transform top-[39%] max-w-[80%] sm:top-[35%] sm:max-w-[75%] md:max-w-[60%] md:top-[30%] lg:max-w-[55%] xl:top-[25%] xl:max-w-[50%]"
        // style={{
        //   translate: `-50% ${logoTop}px`,
        // }}
        initial={{ translateY: windowHeightRef.current, translateX: "-50%" }}
        animate={{ translateY: logoTop, translateX: "-50%" }}
      />
      <img
        src="/assets/home_hero_layer_3.svg"
        alt=""
        className="absolute left-0 right-0 w-full h-full object-cover z-20"
      />
    </section>
  );
}
