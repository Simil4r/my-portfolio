import React from 'react';
import Introduction from "./Introduction"
import About from "./About"
import Portfolio from "./Portfolio"
import Footer from "./Footer"

function Main() {

  return (
      <div className="main d-flex flex-column container-fluid content">
        <Introduction />
        <About />
        <Portfolio />
        <Footer />
      </div>
  )
}

export default Main;