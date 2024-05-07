import "./navbar.css";
import PAGE_KEYS from "../../constants.tsx";

interface NavbarProps {
  activePage: String;
  setActivePage: (activePage: string) => void;
}

function Navbar({ activePage, setActivePage }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll mask-custom">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            onClick={() => setActivePage(PAGE_KEYS.HOME)}
          >
            <span>Zeltlager ULF</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  id="nav-home"
                  className={`nav-link ${
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
                  className={`nav-link ${
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
                  className={`nav-link ${
                    activePage === PAGE_KEYS.GALLERY ? "active" : ""
                  }`}
                  onClick={() => setActivePage(PAGE_KEYS.GALLERY)}
                >
                  Galerie
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
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
                  className={`nav-link ${
                    activePage === PAGE_KEYS.CONTACT ? "active" : ""
                  }`}
                  onClick={() => setActivePage(PAGE_KEYS.CONTACT)}
                >
                  Kontakt
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
