import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import GalleryHeader from "./GalleryHeader";
import YEAR_KEYS from "./galleryConstants";

function GalleryPage() {
  const [activeYear, setActiveYear] = useState(YEAR_KEYS[2023]);
  return (
    <>
      <GalleryHeader activeYear={activeYear} setActiveYear={setActiveYear} />
      <GalleryGrid activeYear={activeYear} />
    </>
  );
}

export default GalleryPage;
