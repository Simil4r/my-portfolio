import React from 'react';
import Introduction from "./Introduction"
import About from "./About"
import Portfolio from "./Portfolio"
import Footer from "./Footer"
import Achivement from './Achivement'

function Main() {

  return (
    <div className="main d-flex flex-column container-fluid content">
      <Introduction />
      <About />
      <Portfolio />
      <div className="container">
        <h1>My Story</h1>
        <div className="d-flex flex-column">
          <Achivement
            header="College"
            title="October 2020 - present : Politechnika Krakowska"
            description="I have started my IT studies at Politechnika Krakowska."
            icon="icon-graduation-cap"
          />
          <Achivement
            header="Upper Secondary School"
            title="August 2016 - May 2020 : Zespół Szkół Łączności w Krakowie"
            description="I have finished upper secodary school at Zespół Szkół Łączności in Cracow. My expanded subjects were math and IT."
            icon="icon-desktop" />
          <Achivement
            header="Technican"
            title="August 2016 - May 2020 : Graduaded IT Specialist qualification"
            description="During upper secondary school I passed E12, E13 and E14 exams."
            icon="icon-file-code"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main;