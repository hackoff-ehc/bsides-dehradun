import { Hero } from "@/components/Home";

export const metadata = {
  title: "Rom Rom Rom",
};

import About from "@/components/AboutUs/About";

export default function Home() {
  return (
    <main className="h-[500vh]">
      <Hero />
      <About />
    </main>
  );
}
