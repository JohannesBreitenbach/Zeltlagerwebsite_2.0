import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ContactForm from "./components/contactform/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import PAGE_KEYS from "./constants";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [activePage, setActivePage] = useState(PAGE_KEYS.HOME);

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === PAGE_KEYS.HOME && <HeroSection />}
      {activePage === PAGE_KEYS.CONTACT && <ContactForm />}
      <h1>Content</h1>
      <h1>Content</h1>

      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
