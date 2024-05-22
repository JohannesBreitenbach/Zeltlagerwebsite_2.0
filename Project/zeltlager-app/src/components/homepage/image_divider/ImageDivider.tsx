import PAGE_KEYS from "../../../constants";
import "./imagedivider.scss";

interface ImageDividerProps {
  setActivePage: (activePage: string) => void;
}

function ImageDivider({ setActivePage }: ImageDividerProps) {
  //Carousel?
  return (
    <div id="image-divider" className="p-3">
      <div id="image-container" className="row w-100">
        <img
          className="col-12 col-sm-6 col-lg-4"
          src="src\assets\img\Quidditch.jpeg"
        />
        <img
          className="d-none d-sm-block col-sm-6 col-lg-4"
          src="src\assets\img\Gruppenbild_cropped.jpg"
        />
        <img
          className="d-none d-lg-block col-4"
          src="src\assets\img\Quellenspiel.jpeg"
        />
      </div>
      <div className="w-100">
        <p className="text-end pt-2 pb-0 mb-0">
          <a onClick={() => setActivePage(PAGE_KEYS.GALLERY)}>
            Mehr Bilder ansehen ➔
          </a>
        </p>
      </div>
    </div>
  );
}

export default ImageDivider;
