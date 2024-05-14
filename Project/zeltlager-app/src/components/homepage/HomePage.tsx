import HeroCarousel from "./HeroCarousel";
import HeroImageSection from "./imagesection/HeroImageSection";
import InfoSection from "./info_section/InfoSection";
import MailListSection from "./mail_list_section/MailListSection";
import SponsorSection from "./sponsorsection/SponsorSection";

interface HomePageProps {
  setActivePage: (activePage: string) => void;
}

function HomePage({ setActivePage }: HomePageProps) {
  return (
    <>
      <HeroImageSection />
      <InfoSection />
      {/*<HeroCarousel />*/}
      <SponsorSection />
      <MailListSection setActivePage={setActivePage} />
    </>
  );
}

export default HomePage;
