import React, { Component } from "react";
import * as Scroll from "react-scroll"

let Element = Scroll.Element;

class Footer extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }
    render() {
        return (
            <Element name="contact" className="cont">
                <div className={"d-flex contact"} id={"contact"} ref={div => this.ref = div}>
                    <div className="d-flex container justify-content-center flex-column justify-content-md-around flex-md-row">
                        <div className="d-flex col-3">
                            <div className={"d-flex flex-column justify-content-center contacts"}>
                                <h3>Michał Warchoł</h3>
                                <h4>tel.: 785 333 253</h4>
                                <h4>email: mwarchol33@gmail.com</h4>
                            </div>
                        </div>
                        <div className="d-flex col-6 visits flex-column align-self-center align-items-center">
                            <span>Visit my <a href="https://github.com/Simil4r">Github</a></span>
                            <span>Visit my <a href="https://www.linkedin.com/in/micha%C5%82-warcho%C5%82-2033a51a0">Linkedin</a></span>
                        </div>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Footer;