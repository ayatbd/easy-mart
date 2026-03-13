import BestSellingProducts from "@/components/main/home/BestSellingProducts";
import BrowseCategories from "@/components/main/home/BrowseCategories";
import ExploreProducts from "@/components/main/home/ExploreProducts";
import FlashSales from "@/components/main/home/FlashSales";
import HeroSection from "@/components/main/home/HeroSection";
import NewArrival from "@/components/main/home/NewArrival";
import PromoBanner from "@/components/main/home/PromoBanner";
import ServicesSection from "@/components/main/home/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <BrowseCategories />
      <BestSellingProducts />
      <PromoBanner />
      <ExploreProducts />
      <NewArrival />
      <ServicesSection />
    </div>
  );
}
