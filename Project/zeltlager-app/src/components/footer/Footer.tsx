import PAGE_KEYS from "../../constants.tsx";
import "./footer.scss";

interface FooterProps {
  activePage: String;
  setActivePage: (activePage: string) => void;
}

function Footer({ activePage, setActivePage }: FooterProps) {
  return (
    <div className="container footer-bg">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 EyJB Media</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              id="nav-home"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.HOME ? "active" : ""
              }`}
              aria-current="page"
              onClick={() => setActivePage(PAGE_KEYS.HOME)}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              id="nav-about"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.ABOUT ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.ABOUT)}
            >
              Über uns
            </a>
          </li>
          <li className="nav-item">
            <a
              id="nav-gallery"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.GALLERY ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.GALLERY)}
            >
              Galerie
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.APPLICATION ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.APPLICATION)}
            >
              Anmeldung
            </a>
          </li>
          <li className="nav-item">
            <a
              id="nav-contact"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.CONTACT ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.CONTACT)}
            >
              Kontakt
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-instagram" style={{ color: "black" }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
