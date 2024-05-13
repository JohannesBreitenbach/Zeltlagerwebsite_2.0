import HeroCarousel from "./HeroCarousel";
import HeroImageSection from "./imagesection/HeroImageSection";
import SponsorSection from "./sponsorsection/SponsorSection";

function HeroSection() {
  return (
    <>
      <HeroImageSection />
      {/*<HeroCarousel />*/}
      <SponsorSection />
    </>
  );
}

export default HeroSection;
