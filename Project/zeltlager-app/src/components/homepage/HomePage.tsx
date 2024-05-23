import Spacer from "../spacer/Spacer";
import HeroCarousel from "./HeroCarousel";
import DownloadSection from "./download_section/DownloadSection";
import EnrolSection from "./enrol_section/EnrolSection";
import ImageDivider from "./image_divider/ImageDivider";
import HeroImageSection from "./imagesection/HeroImageSection";
import InfoSection from "./info_section/InfoSection";
import MailListSection from "./mail_list_section/MailListSection";
import NewsSection from "./news_section/NewsSection";
import QuestionSection from "./question_section/QuestionSection";
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
      <InfoSection setActivePage={setActivePage} />
      <Spacer />
      <ImageDivider setActivePage={setActivePage} />
      <Spacer />
      <NewsSection setActivePage={setActivePage} />
      <Spacer />
      <DownloadSection />
      {/*<HeroCarousel />*/}
      <Spacer />
      {/*<SponsorSection />
      <Spacer />*/}
      <QuestionSection setActivePage={setActivePage} />
      <Spacer />
      <EnrolSection />
      <Spacer />
      <MailListSection setActivePage={setActivePage} />
    </>
  );
}

export default HomePage;
