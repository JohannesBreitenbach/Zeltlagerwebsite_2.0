import "./gallery.scss";

interface GalleryGridProps {
  activeYear: string;
  images: { [year: string]: { src: string; alt: string }[] };
}

function GalleryGrid({ activeYear, images }: GalleryGridProps) {
  const currImages = images[activeYear] || [];
  return (
    <>
      <div id="gallery-grid">
        <div className="d-flex align-items-center justify-content-around flex-wrap">
          {currImages.map((image) => {
            return getImageCard(image.src, image.alt);
          })}
        </div>
      </div>
    </>
  );
}

function getImageCard(src: string, alt: string) {
  return (
    <div className="grid-img-container m-2">
      <img src={src} alt={alt} className="img-fluid" />
    </div>
  );
}

export default GalleryGrid;
