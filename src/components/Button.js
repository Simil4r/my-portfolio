import React from 'react'
import * as Scroll from "react-scroll"

let Link = Scroll.Link;

const Button = ({destination, text, duration}) => {
    return (
        <Link className="button d-flex justify-content-center" activeClass="active" to={destination} smooth={true} duration={duration}>
            <span>{text}</span>
        </Link>
    )
}

export default Button