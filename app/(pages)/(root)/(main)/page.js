import PartnersSlider from "@/components/shared/PartnersSlider";
import DonateSection from "./components/DonateSection";
import EventsSection from "./components/EventsSection";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Mission /> */}

      <Gallery />
      <DonateSection />
      <Testimonials />
      <EventsSection />
      <PartnersSlider />
      {/* <Newsletter /> */}
    </>
  );
}
