import Hero from "@/Components/Homepage/Hero";
import PopularApp from "@/Components/Homepage/PopularApp";
import Trusted from "@/Components/Homepage/Trusted";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <Trusted></Trusted>
    <PopularApp></PopularApp>
   </div>
  );
}
