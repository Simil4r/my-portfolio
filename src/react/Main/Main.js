import React, { useState } from 'react';
import Navbar from "./Navbar"
import Introduction from "./Introduction"
import About from "./About"
import Portfolio from "./Portfolio"
import Skills from './Skills'
import Footer from "./Footer"

function Main() {
  const [navbarButton, setNavbarButton] = useState(0);

  return (
    <div className={"main container-fluid d-flex flex-column"}>
      <Introduction underline={() => setNavbarButton(0)} />
      <Navbar navbarButtonScrolled={navbarButton} />
      <div className="container-fluid content">
        <div className="container">
          <About underline={() => setNavbarButton(1)} />
          <Skills underline={() => setNavbarButton(2)} />
          <Portfolio underline={() => setNavbarButton(3)} />
        </div>
      </div>
      <Footer underline={() => setNavbarButton(4)} />
    </div>
  )
}

export default Main;