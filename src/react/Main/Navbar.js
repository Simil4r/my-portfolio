import React, { Component } from "react";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
        this.handleClick = this.handleClick.bind(this)
        this.styleVisible = {
            left: 0
        }
        this.styleInvisible = {
            left: "-280px"
        }
        this.styleRotated = {
            transform: 'rotate(90deg)'
        }
    }

    handleClick = () => {
        this.setState(prevState=>({visible: !prevState.visible}))
    }

    render() {
        return (
            <div className={"navbar_main d-flex flex-column"} ref={div => this.ref=div} style={this.state.visible ? this.styleVisible : this.styleInvisible}>
                <div className="d-flex">
                <span className="d-flex col-10 justify-content-center">Michał Warchoł</span>
                <div className="d-flex align-items-center col-2">
                    <i className="icon-menu" onClick={this.handleClick} style={this.state.visible?null:this.styleRotated}></i>
                </div>
                </div>
                <ul className={"d-flex flex-column navbar_list"}>
                    <li className={"d-flex justify-content-center nav_item"}>
                        <Link activeClass="active" to="home" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Home</span>
                        </Link>
                    </li>
                    <li className={"d-flex justify-content-center nav_item"}>
                        <Link activeClass="active" to="about" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >About</span>
                        </Link>
                    </li>
                    <li className={"d-flex justify-content-center nav_item"}>
                        <Link activeClass="active" to="skills" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Skills</span>
                        </Link>
                    </li>
                    <li className={"d-flex justify-content-center nav_item"}>
                        <Link activeClass="active" to="portfolio" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Portfolio</span>
                        </Link>
                    </li>
                    <li className={"d-flex justify-content-center nav_item"}>
                        <Link activeClass="active" to="contact" smooth={true} duration={500}>
                            <span
                                className={"navbar_element"}
                            >Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;