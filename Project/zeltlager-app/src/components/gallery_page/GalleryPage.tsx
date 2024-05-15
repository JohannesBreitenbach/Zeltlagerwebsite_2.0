import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import GalleryHeader from "./GalleryHeader";
import YEAR_KEYS from "./galleryConstants";

/*
AUtomatisch alle bilder im folder in ein array packen?
const images = require.context('../../images', true);
const imageList = images.keys().map(image:  => images(image));*/

const images = {
  2021: [
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Essen.jpeg", alt: "Kinder beim Essen" },
  ],
  2022: [
    { src: "src/assets/img/Zeltlager2023-41.jpg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Zeltlager2023-41.jpg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Zeltlager2023-41.jpg", alt: "Kinder beim Essen" },
  ],
  2023: [
    { src: "src/assets/img/Quidditch.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Quidditch.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Quidditch.jpeg", alt: "Kinder beim Essen" },
  ],
};

function GalleryPage() {
  const [activeYear, setActiveYear] = useState(YEAR_KEYS[2023]);
  return (
    <>
      <GalleryHeader activeYear={activeYear} setActiveYear={setActiveYear} />
      <GalleryGrid activeYear={activeYear} images={images} />
    </>
  );
}

export default GalleryPage;
