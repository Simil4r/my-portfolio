import React from "react";
import Button from './Button'

const Footer = () => {
    return (
        <div className={"d-flex contact container-fluid"}>
            <div className="d-flex container align-items-center">
                <div className="d-flex footer_content col-12 flex-column justify-content-center">
                    <h1>Contact Me</h1>
                    <h2>mwarchol33@gmail.com</h2>
                    <h2>Visit my <a href="https://github.com/michalwarchol">Github</a></h2>
                    <h2>Visit my <a href="https://www.linkedin.com/in/micha%C5%82-warcho%C5%82-2033a51a0">Linkedin</a></h2>
                    <Button text="Go Back To Top" destination="home" duration={3000} />
                </div>
            </div>
        </div>
    )
}

export default Footer;