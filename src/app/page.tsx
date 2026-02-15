import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
    </div>
  );
}
