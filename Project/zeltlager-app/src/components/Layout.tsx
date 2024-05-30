import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import PAGE_KEYS from "../constants";
import { useState } from "react";

function Layout() {
  const [activePage, setActivePage] = useState(PAGE_KEYS.HOME);

  return (
    <div id="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div id="main-content">
        <ScrollRestoration />
        <Outlet />
        {/* Renders Pages as children of this layout. 
        By doing this, navbar and footer do not have to be rerendered every time. */}
      </div>
      <Footer activePage={activePage} setActivePage={setActivePage} />
      <ScrollRestoration />
    </div>
  );
}

export default Layout;
