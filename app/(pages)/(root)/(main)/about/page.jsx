import PageBanner from "@/components/shared/PageBanner";
import PartnersSlider from "@/components/shared/PartnersSlider";
import AboutSection from "../components/AboutSection";
import CtaSection from "./components/CtaSection";

const AboutPage = () => {
  return (
    <div>
      <PageBanner title="About Us" />
      <AboutSection />
      <CtaSection />
      <PartnersSlider />
      {/* <TeamSection /> */}
    </div>
  );
};

export default AboutPage;
