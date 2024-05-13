import GalleryHeader from "./GalleryHeader";
import YEAR_KEYS from "./galleryConstants";

interface GalleryGridProps {
  activeYear: String;
}

function GalleryGrid({ activeYear }: GalleryGridProps) {
  return <>{getImageForYear(activeYear)}</>;
}

const getImageForYear = (year: String) => {
  switch (year) {
    case YEAR_KEYS[2021]:
      return (
        <img src="/src/assets/img/Vogelperspektive.jpeg" alt="Image for 2022" />
      );
    case YEAR_KEYS[2021]:
      return (
        <img src="/src/assets/img/Quellenspiel.jpeg" alt="Image for 2023" />
      );
    case YEAR_KEYS[2021]:
      return <img src="/src/assets/img/Lagerfeuer.jpeg" alt="Image for 2024" />;
    default:
      return (
        <img src="/src/assets/img/Vogelperspektive.jpeg" alt="Image for 2022" />
      );
  }
};

export default GalleryGrid;
