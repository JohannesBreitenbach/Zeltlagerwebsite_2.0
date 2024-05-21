import Spacer from "../spacer/Spacer";
import HeroCarousel from "./HeroCarousel";
import DownloadSection from "./download_section/DownloadSection";
import ImageDivider from "./image_divider/ImageDivider";
import HeroImageSection from "./imagesection/HeroImageSection";
import InfoSection from "./info_section/InfoSection";
import MailListSection from "./mail_list_section/MailListSection";
import SponsorSection from "./sponsorsection/SponsorSection";

interface HomePageProps {
  setActivePage: (activePage: string) => void;
}

function HomePage({ setActivePage }: HomePageProps) {
  /*
  Allgemein: Bänder, auch komplett IMageband
  */
  return (
    <>
      <HeroImageSection />
      <InfoSection />
      <Spacer />
      <ImageDivider />
      <Spacer />
      <InfoSection />
      <Spacer />
      <DownloadSection />
      {/*<HeroCarousel />*/}
      <Spacer />
      {/*<SponsorSection />
      <Spacer />*/}
      <MailListSection setActivePage={setActivePage} />
    </>
  );
}

export default HomePage;
