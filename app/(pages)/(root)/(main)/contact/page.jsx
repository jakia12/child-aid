import PageBanner from "@/components/shared/PageBanner";
import ContactFormSection from "./components/ContactFormSection";
import LocationMap from "./components/LocationMap";
import TopContactBar from "./components/TopContactBar";

const ContactPage = () => {
  return (
    <div>
      <PageBanner title="Contact Us" />
      <ContactFormSection />
      <TopContactBar />
      <LocationMap />
    </div>
  );
};

export default ContactPage;
