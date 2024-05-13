import HeroCarousel from "./HeroCarousel";
import HeroImageSection from "./imagesection/HeroImageSection";
import SponsorSection from "./sponsorsection/SponsorSection";

function HomePage() {
  return (
    <>
      <HeroImageSection />
      {/*<HeroCarousel />*/}
      <SponsorSection />
    </>
  );
}

export default HomePage;
