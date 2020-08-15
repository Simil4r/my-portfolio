import React from "react"
import * as Scroll from "react-scroll"

import Button from "./Button";

let Element = Scroll.Element;
const Introduction = () => {
    return (
        <Element className={"introduction container-fluid d-flex align-items-center"} id={"home"} name="home">
            <div className="container d-flex flex-column flex-md-row">
                <div className="name col-12 d-flex justify-content-center flex-column">
                    <h3>Hi, my name is</h3>
                    <h1>Michał</h1>
                    <h1>Warchoł</h1>
                    <h5>A Creative Front End Developer</h5>
                    <Button destination="about" text="Read more" duration={1000} />
                </div>
            </div>
        </Element>
    );
}

export default Introduction;