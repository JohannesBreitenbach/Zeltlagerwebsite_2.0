import YEAR_KEYS from "./galleryConstants";

interface GalleryGridProps {
  activeYear: string;
  images: { [year: string]: { src: string; alt: string }[] };
}

function GalleryGrid({ activeYear, images }: GalleryGridProps) {
  const currImages = images[activeYear] || [];
  console.log(currImages);
  return (
    <>
      <div className="container">
        <div className="row g-4">{getImages(currImages)}</div>
      </div>
    </>
  );
}

const getImages = (currImages: { src: string; alt: string }[]) => {
  return (
    <>
      {currImages.map((image) => {
        return getImageCard(image.src, image.alt);
      })}
    </>
  );
};

const getImageCard = (src: string, alt: string) => {
  console.log("Current image:" + src);
  return (
    <div className="card col-4 m-1">
      <img src={src} className="card-img" alt={alt} />
    </div>
  );
};

export default GalleryGrid;
