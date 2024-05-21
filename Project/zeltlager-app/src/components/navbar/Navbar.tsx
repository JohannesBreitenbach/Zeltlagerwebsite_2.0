import "./navbar.scss";
import PAGE_KEYS from "../../constants.tsx";
import { useState, useEffect } from "react";

interface NavbarProps {
  activePage: string;
  setActivePage: (activePage: string) => void;
}

function Navbar({ activePage, setActivePage }: NavbarProps) {
  // State to track if the background should be solid or transparent
  const [bgSolid, setBgSolid] = useState(false);

  // State to track if the navbar is collapsed or not
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to change navbar background based on scroll position
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgSolid(true);
    } else {
      setBgSolid(false);
    }
  };

  // Add scroll event listener to handle navbar background change
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handle click event for navbar items
  const handleNavItemClick = (pageKey: string) => {
    setActivePage(pageKey);
    setIsCollapsed(true);
  };

  return (
    <div id="navbarComponent">
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-scroll ${
          bgSolid ? "navbar-scrolled" : "navbar-unscrolled"
        }`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            onClick={() => handleNavItemClick(PAGE_KEYS.HOME)}
          >
            <span>Zeltlager ULF</span>
          </a>
          <button
            className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`}
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isCollapsed ? "false" : "true"}
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
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
                  onClick={() => handleNavItemClick(PAGE_KEYS.HOME)}
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
                  onClick={() => handleNavItemClick(PAGE_KEYS.ABOUT)}
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
                  onClick={() => handleNavItemClick(PAGE_KEYS.GALLERY)}
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
                  onClick={() => handleNavItemClick(PAGE_KEYS.APPLICATION)}
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
                  onClick={() => handleNavItemClick(PAGE_KEYS.CONTACT)}
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
  );
}

export default Navbar;
