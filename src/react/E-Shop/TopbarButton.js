import React from 'react'
import * as Scroll from 'react-scroll'

let Link = Scroll.Link

const TopbarButton = props => {
    return (
        <div>
            <Link to={props.destination} smooth={true} activeClass="active">
                <div className="topbar_button d-flex justify-content-center">
                    <span>{props.destination}</span>
                </div>
            </Link>
        </div>
    )
}

export default TopbarButton