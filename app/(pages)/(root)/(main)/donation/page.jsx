import PageBanner from "@/components/shared/PageBanner";
import DonateCards from "./components/DonateCards";

const DonatePage = () => {
  return (
    <div>
      <PageBanner title="Donations" />
      <DonateCards />
    </div>
  );
};

export default DonatePage;
