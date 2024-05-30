import { Link } from "react-router-dom";
import PAGE_KEYS from "../../constants.tsx";
import "./footer.scss";

interface FooterProps {
  activePage: String;
  setActivePage: (activePage: string) => void;
}

function Footer({ activePage, setActivePage }: FooterProps) {
  return (
    <div id="footer-custom">
      <footer className="d-flex justify-content-between align-items-center footer navbar-fixed-bottom px-3 py-3 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          © 2024 EyJB Media | info.ulferzeltlager@web.de
        </p>
        <ul className="nav col-md-8 justify-content-end">
          <li className="nav-item">
            <Link
              to={"/"}
              id="nav-home"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.HOME ? "active" : ""
              }`}
              aria-current="page"
              onClick={() => setActivePage(PAGE_KEYS.HOME)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/" + PAGE_KEYS.ABOUT}
              id="nav-about"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.ABOUT ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.ABOUT)}
            >
              Über uns
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/" + PAGE_KEYS.GALLERY}
              id="nav-gallery"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.GALLERY ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.GALLERY)}
            >
              Galerie
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/" + PAGE_KEYS.APPLICATION}
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.APPLICATION ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.APPLICATION)}
            >
              Anmeldung
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/" + PAGE_KEYS.CONTACT}
              id="nav-contact"
              className={`nav-link px-2 text-body-secondary ${
                activePage === PAGE_KEYS.CONTACT ? "active" : ""
              }`}
              onClick={() => setActivePage(PAGE_KEYS.CONTACT)}
            >
              Kontakt
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.instagram.com/ulferzeltlager/"
              target="_blank"
            >
              <i className="fab fa-instagram" style={{ color: "black" }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
