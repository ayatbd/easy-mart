import FlashSales from "@/main/home/FlashSales";
import Header from "@/main/home/Header";
import HeroSection from "@/main/home/HeroSection";
import TopHeader from "@/main/home/TopHeader";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <HeroSection />
      <FlashSales />
    </div>
  );
}
