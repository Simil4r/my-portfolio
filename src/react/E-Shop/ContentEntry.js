import React from 'react'
import * as Scroll from 'react-scroll'
import Image from '../../img/pencil_01.png'

let Element = Scroll.Element

const ContentEntry = () => {
    return (
        <Element name="Home">
            <div className="e-shop_contententry container d-flex flex-column flex-md-row">
                <div className="text_left d-flex col-12 col-md-6 align-items-center">
                    <h1>The Ultimate Pencil<br></br>To Write More</h1>
                </div>
                <div className="image_side d-flex col-12 col-md-6  align-items-center justify-content-center">
                    <img src={Image} alt="not found" />
                </div>
            </div>
        </Element>
    )
}

export default ContentEntry