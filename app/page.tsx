import HeroSection from "./components/landing/hero-section/HeroSection";
import Slider from "./components/landing/slider/Slider";
import Discover from "./components/landing/discover/Discover";
import AccordionComponent from "./components/landing/accordion/AccordionComponent";

import Footer from "./components/layout/footer/Footer";

export default function Home() {

  return (
    <>
      <HeroSection />
      <section className="mx-[2%]">
        <Slider />
        <Discover />
        <AccordionComponent />
      </section>
      <Footer />
    </>
  );
}
