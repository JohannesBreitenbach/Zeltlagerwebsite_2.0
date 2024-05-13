import Navbar from "./components/navbar/Navbar";
import ContactForm from "./components/contactform/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import PAGE_KEYS from "./constants";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import GalleryPage from "./components/gallery_page/GalleryPage";
import HomePage from "./components/homepage/HomePage";

function App() {
  const [activePage, setActivePage] = useState(PAGE_KEYS.HOME);

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === PAGE_KEYS.HOME && <HomePage />}
      {activePage === PAGE_KEYS.CONTACT && <ContactForm />}
      {activePage === PAGE_KEYS.GALLERY && <GalleryPage />}
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
