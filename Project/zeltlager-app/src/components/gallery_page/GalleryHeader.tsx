import YEAR_KEYS from "./galleryConstants";

interface GalleryHeaderProps {
  activeYear: String;
  setActiveYear: (activePage: string) => void;
}

function GalleryHeader({ activeYear, setActiveYear }: GalleryHeaderProps) {
  return (
    <>
      <div id="galleryHeaderComponent" className="p-2">
        <h1>Gallery Header</h1>
        <span
          id="pill-container"
          className="d-flex justify-content-center align-items-center w-100 gap-3 mt-3 mb-3"
        >
          <button
            type="button"
            className={`btn btn-outline-primary rounded-pill ${
              activeYear === YEAR_KEYS[2023] ? "active" : ""
            }`}
            onClick={() => setActiveYear(YEAR_KEYS[2023])}
          >
            2023
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary rounded-pill ${
              activeYear === YEAR_KEYS[2022] ? "active" : ""
            }`}
            onClick={() => setActiveYear(YEAR_KEYS[2022])}
          >
            2022
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary rounded-pill ${
              activeYear === YEAR_KEYS[2021] ? "active" : ""
            }`}
            onClick={() => setActiveYear(YEAR_KEYS[2021])}
          >
            2021
          </button>
        </span>
      </div>
    </>
  );
}

export default GalleryHeader;
