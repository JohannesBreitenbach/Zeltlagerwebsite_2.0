import "./navbar.scss";
import PAGE_KEYS from "../../constants.tsx";
import { useState } from "react";

interface NavbarProps {
  activePage: string;
  setActivePage: (activePage: string) => void;
}

function Navbar({ activePage, setActivePage }: NavbarProps) {
  //false: transparent, true: solid color (when scrolled)
  const [bgSolid, setBgSolid] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgSolid(true);
    } else {
      setBgSolid(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div id="navbarComponent">
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-scroll ${
            bgSolid ? "navbar-scrolled" : "mask-custom"
          }`}
        >
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
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    id="nav-home"
                    className={`nav-link ${
                      activePage === PAGE_KEYS.HOME ? "active" : ""
                    }`}
                    aria-current="page"
                    role="button"
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
                    role="button"
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
                    role="button"
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
                    role="button"
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
                    role="button"
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
      </div>
    </>
  );
}

export default Navbar;
