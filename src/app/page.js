import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

// import Navbar from "@/app/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-black overflow-x-hidden">
      <Navbar />
      {/* heroSection */}
      <HeroSection />
      {/* footer */}
      <Footer />
    </main>
  );
}
