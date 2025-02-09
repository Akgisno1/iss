import Hero from "@/components/main/hero";
import About from "@/components/main/about";
import Events from "@/components/main/events";
import Gallery from "@/components/main/gallery";
import Newsletter from "@/components/main/newsletter";

export default function Home() {
  return (
    <main className="min-h-screen text-[#402B1A] overflow-x-hidden bg-[#F3E8D8]">
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Newsletter />
    </main>
  );
}
