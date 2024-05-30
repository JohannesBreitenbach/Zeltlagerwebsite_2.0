import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/homepage/HomePage";
import AboutPage from "./components/about_page/AboutPage";
import GalleryPage from "./components/gallery_page/GalleryPage";
import RegistrationPage from "./components/registration_page/RegistrationPage";
import ContactPage from "./components/contactform/ContactPage";
import PAGE_KEYS from "./constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: PAGE_KEYS.ABOUT,
        element: <AboutPage />,
      },
      {
        path: PAGE_KEYS.GALLERY,
        element: <GalleryPage />,
      },
      {
        path: PAGE_KEYS.APPLICATION,
        element: <RegistrationPage />,
      },
      {
        path: PAGE_KEYS.CONTACT,
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
