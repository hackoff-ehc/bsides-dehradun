import { Hero } from "@/components/Home";

export const metadata = {
  title: "Rom Rom Rom",
};

import About from "@/components/AboutUs/About";
import Interest from "@/components/Interest/Interest";

export default function Home() {
  return (
    <main className="h-[500vh]">
      <Hero />
      <About />
      <Interest />
    </main>
  );
}
