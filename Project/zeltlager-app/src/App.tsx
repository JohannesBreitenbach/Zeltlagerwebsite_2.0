import Navbar from "./components/navbar/Navbar";
import ContactForm from "./components/contactform/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import PAGE_KEYS from "./constants";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import GalleryPage from "./components/gallery_page/GalleryPage";
import HomePage from "./components/homepage/HomePage";
import AboutPage from "./components/about_page/AboutPage";

function App() {
  const [activePage, setActivePage] = useState(PAGE_KEYS.HOME);

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === PAGE_KEYS.HOME && (
        <HomePage setActivePage={setActivePage} />
      )}
      {activePage === PAGE_KEYS.CONTACT && <ContactForm />}
      {activePage === PAGE_KEYS.GALLERY && <GalleryPage />}
      {activePage === PAGE_KEYS.ABOUT && <AboutPage />}
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
