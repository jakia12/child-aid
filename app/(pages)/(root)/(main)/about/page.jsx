import PageBanner from "@/components/shared/PageBanner";
import AboutSection from "../components/AboutSection";
import CtaSection from "./components/CtaSection";

const AboutPage = () => {
  return (
    <div>
      <PageBanner title="About Us" />
      <AboutSection />
      <CtaSection />
      {/* <TeamSection /> */}
    </div>
  );
};

export default AboutPage;
