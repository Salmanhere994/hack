import Image from "next/image";
import Card from "./components/Card";
import { HeroSection } from "./components/heroSection";
import CarGrid from "./components/CarGrid.jsx";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Card />
      <div className="flex w-full justify-center">
        <Button className="bg-blue-600 text-white text-base font-light my-6">
          Show More
        </Button>
      </div>
    </div>
  );
}
