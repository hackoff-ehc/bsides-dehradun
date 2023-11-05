import { About, Interest, Hero } from "@/components/Home";

export const metadata = {
  title: "Rom Rom Rom",
};

export default function Home() {
  return (
    <main className="h-[500vh]">
      <Hero />
      <About />
      <Interest />
    </main>
  );
}
