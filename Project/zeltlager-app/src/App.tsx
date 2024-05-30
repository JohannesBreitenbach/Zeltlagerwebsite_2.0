import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import ContactForm from "./components/contactform/ContactPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import PAGE_KEYS from "./constants";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import GalleryPage from "./components/gallery_page/GalleryPage";
import HomePage from "./components/homepage/HomePage";
import AboutPage from "./components/about_page/AboutPage";
import RegistrationPage from "./components/registration_page/RegistrationPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./components/contactform/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/" + PAGE_KEYS.ABOUT,
    element: <AboutPage />,
  },
  {
    path: "/" + PAGE_KEYS.GALLERY,
    element: <GalleryPage />,
  },
  {
    path: "/" + PAGE_KEYS.APPLICATION,
    element: <RegistrationPage />,
  },
  {
    path: "/" + PAGE_KEYS.CONTACT,
    element: <ContactPage />,
  },
]);

function App() {
  const [activePage, setActivePage] = useState(PAGE_KEYS.HOME);

  return (
    <div id="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
