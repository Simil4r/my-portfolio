import React from 'react'
import * as Scroll from 'react-scroll'
import Image from '../../img/image_00.jpg'

let Element = Scroll.Element

const ContentAbout = () => {
    return (
        <Element name="About">
            <div className="e-shop_contentabout d-flex flex-column flex-md-row">
                <div className="image_side d-flex col-12 col-md-6 align-items-center justify-content-center">
                    <div className="imagediv">
                        <img src={Image} alt="not found" />
                    </div>
                </div>
                <div className="text_right d-flex col-12 col-md-6 flex-column justify-content-center">
                    <h1>Why Ultimate</h1>
                    <p>
                        Our team developed The Ultimate Pencil to provide a long term solution for your writing and drawing needs.<br></br>
                        It is our priority to serve a <span>sharp, thin and stable</span> line of graphite.<br></br>
                        That's exactly what The Ultimate Pencil does!
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default ContentAbout