import { Logo } from "@/components";
import { IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#" },
  { label: "Code of Conduct", href: "#" },
  { label: "Contact US", href: "#" },
];

const socialLinks = [
  { name: "Instagram", link: "#", Icon: Instagram },
  { name: "YouTube", link: "#", Icon: YouTube },
  { name: "Facebook", link: "#", Icon: Facebook },
  { name: "X", link: "#", Icon: Twitter },
  { name: "LinkedIn", link: "#", Icon: LinkedIn },
];

export const Footer = () => {
  return (
    <footer className="p-[48px] bg-[#1f1d1e] flex flex-col relative w-full laptop:items-center">
      <div className="mb-10 w-[clamp(188px,16.534vw,250px)]">
        <Logo />
      </div>
      <div
        className="mb-8 gap-4 font-semibold text-para uppercase flex flex-col laptop:text-center laptop:grid laptop:items-center laptop:gap-10"
        style={{
          gridTemplateColumns: `repeat(${navLinks.length}, 1fr)`,
        }}
      >
        {navLinks.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </div>
      <div className="mb-10 flex items-center gap-[16px] flex-wrap tablet:gap-[28px]">
        {socialLinks.map(({ name, link, Icon }) => (
          <IconButton
            key={name}
            aria-label={name}
            title={name}
            size="medium"
            sx={{ border: "1.5px solid #fff", padding: "10px" }}
          >
            <Icon fontSize="inherit" style={{ color: "#fff" }} />
          </IconButton>
        ))}
      </div>
      <div className="text-para text-[rgba(255,255,255,0.40)] font-semibold text-center">
        Designed and Developed by BSides Dehradun Team
      </div>
      <img
        src="/assets/footer-vector-arrow.svg"
        alt=""
        className="absolute top-[48px] right-[5%] pointer-events-none tablet:top-1/2 tablet:-translate-y-1/2"
      />
    </footer>
  );
};
