import React from 'react';
import Navbar from "./Navbar"
import Introduction from "./Introduction"
import About from "./About"
import Portfolio from "./Portfolio"
import Skills from './Skills'
import Footer from "./Footer"

function Main() {

  return (
    <div className={"main container-fluid d-flex flex-column"}>
      <Introduction  />
      <Navbar />
      <div className="container-fluid content">
        <div className="container">
          <About />
          <Skills />
          <Portfolio />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main;