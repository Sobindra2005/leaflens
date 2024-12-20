import Featured from "@/components/Home/featured";
import Hero from "@/components/Home/Hero";
import WhyMedicinalPlants from "@/components/Home/WhyMedicinalPlants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyMedicinalPlants />
      <Featured />
    </div>
  );
}
