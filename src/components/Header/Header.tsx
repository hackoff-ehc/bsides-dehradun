"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Logo } from "@/components";

const navLinks = [
  { label: "CFP", href: "#" },
  { label: "Sponsorship", href: "#" },
  { label: "Buy Tickets", href: "#" },
];

export function Header() {
  const [headerTop, setHeaderTop] = useState<number>(0);
  const headerRef = useRef<null | HTMLHeadElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let previousScroll = 0;

      const scrollHandler = () => {
        const headerHeight = headerRef.current?.clientHeight || 100;
        const currentScroll = window.scrollY;
        if (currentScroll > previousScroll) {
          if (currentScroll > window.innerHeight / 2) {
            setHeaderTop((prev) =>
              currentScroll > window.innerHeight
                ? headerHeight * -1
                : Math.max(headerHeight * -1, prev - 1)
            );
          }
        } else {
          setHeaderTop((prev) =>
            currentScroll < window.innerHeight ? 0 : Math.min(prev + 10, 0)
          );
        }
        previousScroll = currentScroll;
      };

      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className="py-[clamp(12px,1vw,20px)] px-[clamp(24px,2.6vw,48px)] bg-navbar w-3/4 flex justify-between items-center m-auto rounded-bl rounded-br gap-3 fixed left-1/2 -translate-x-1/2 z-50"
      initial={{ top: 0 }}
      animate={{ top: headerTop }}
    >
      <Box width="clamp(100px,9.5vw,200px)">
        <Logo />
      </Box>
      <nav className="flex items-center">
        <ul className="flex items-center gap-[clamp(20px,2.75vw,75px)]">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Typography fontSize="clamp(14px,1.45vw,18px)" fontWeight={600}>
                {item.label}
              </Typography>
            </li>
          ))}
        </ul>
        <Button
          sx={{
            marginLeft: "clamp(20px,2.75vw,75px)",
            minWidth: "unset",
            width: "max(3vw, 48px)",
          }}
        >
          <svg
            width="40"
            height="23"
            viewBox="0 0 40 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1000003696">
              <line
                id="Line 33"
                x1="10"
                y1="1.5"
                x2="40"
                y2="1.5"
                stroke="black"
                strokeWidth="3"
              />
              <line
                id="Line 35"
                x1="10"
                y1="21.5"
                x2="40"
                y2="21.5"
                stroke="black"
                strokeWidth="3"
              />
              <line
                id="Line 34"
                y1="11.5"
                x2="40"
                y2="11.5"
                stroke="black"
                strokeWidth="3"
              />
            </g>
          </svg>
        </Button>
      </nav>
    </motion.header>
  );
}
