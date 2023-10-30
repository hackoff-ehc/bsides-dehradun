import HeaderLogo from "./Logo";
import { Box, Button, Typography } from "@mui/material";

const navLinks = [
  { label: "CFP", href: "#" },
  { label: "Sponsorship", href: "#" },
  { label: "Registration", href: "#" },
  { label: "Buy Tickets", href: "#" },
];

export function Header() {
  return (
    <header className="py-[clamp(12px,1vw,20px)] px-[clamp(24px,2.6vw,48px)] bg-[rgba(255,255,255,0.50)] w-3/4 flex justify-between items-center m-auto rounded-bl rounded-br gap-3">
      <Box minWidth={100}>
        <HeaderLogo />
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
                stroke-width="3"
              />
              <line
                id="Line 35"
                x1="10"
                y1="21.5"
                x2="40"
                y2="21.5"
                stroke="black"
                stroke-width="3"
              />
              <line
                id="Line 34"
                y1="11.5"
                x2="40"
                y2="11.5"
                stroke="black"
                stroke-width="3"
              />
            </g>
          </svg>
        </Button>
      </nav>
    </header>
  );
}
