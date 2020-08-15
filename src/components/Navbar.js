import React, { Component } from "react";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.styleDefault = {
            borderBottom: "none"
        }
        this.styleUnderlined = {
            borderBottom: "0.1vw solid #3b3a3a"
        }
    }

    handleClick = () => {
        this.setState(prevState=>({visible: !prevState.visible}))
    }

    render() {
        return (
            <div className={"navbar_main d-flex justify-content-center"} ref={div => this.ref=div}>
                <ul className={"navbar_list d-flex flex-row flex-wrap justify-content-center container"}>
                    <li className={"d-flex col-6 col-md-3 justify-content-center nav_item"}>
                        <Link activeClass="active" to="home" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Home</span>
                        </Link>
                    </li>
                    <li className={"d-flex col-6 col-md-3 justify-content-center nav_item"}>
                        <Link activeClass="active" to="about" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >About</span>
                        </Link>
                    </li>
                    <li className={"d-flex col-6 col-md-3 justify-content-center nav_item"}>
                        <Link activeClass="active" to="skills" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Skills</span>
                        </Link>
                    </li>
                    <li className={"d-flex col-6 col-md-3 justify-content-center nav_item"}>
                        <Link activeClass="active" to="portfolio" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Portfolio</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;