import BestSellingProducts from "@/main/home/BestSellingProducts";
import BrowseCategories from "@/main/home/BrowseCategories";
import ExploreProducts from "@/main/home/ExploreProducts";
import FlashSales from "@/main/home/FlashSales";
import Header from "@/main/home/Header";
import HeroSection from "@/main/home/HeroSection";
import PromoBanner from "@/main/home/PromoBanner";
import TopHeader from "@/main/home/TopHeader";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <HeroSection />
      <FlashSales />
      <BrowseCategories />
      <BestSellingProducts />
      <PromoBanner />
      <ExploreProducts />
    </div>
  );
}
