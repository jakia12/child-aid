import DonateSection from "./components/DonateSection";
import EventsSection from "./components/EventsSection";
import Gallery from "./components/Gallery";
import HeroSlider from "./components/HeroSlider";
import Mission from "./components/Mission";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Mission />

      <Gallery />
      <DonateSection />
      <Testimonials />
      <EventsSection />
      {/* <Newsletter /> */}
    </>
  );
}
