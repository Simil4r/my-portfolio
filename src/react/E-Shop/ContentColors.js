import React, { useState } from 'react'
import * as Scroll from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'
import Pencil from './Pencil'

import Pencil1 from '../../img/pencil_02.png'
import Pencil2 from '../../img/pencil_03.png'
import Pencil3 from '../../img/pencil_04.png'
import Pencil4 from '../../img/pencil_05.png'

let Element = Scroll.Element

const ContentColors = () => {
    const [enter, setEnter] = useState(true)
    const handleProgress = (e) => {
        if (e.progress > 0.3 && e.progress < 1) {
            if (enter) {
                setEnter(false)
            }
        }
    }
    return (
        <Element name="Colors">
            <ScrollTrigger onProgress={handleProgress}>
                <div className="e-shop_contentcolors d-flex flex-column flex-xl-row">
                    <div className="container d-flex flex-column flex-md-row">
                        <div className="text_left d-flex col-12 col-md-6 align-items-center">
                            <h1>Many Colors Available</h1>
                        </div>
                        <div className="image_side d-flex col-12 col-md-6 justify-content-center align-items-center">
                            <div className="pencils d-flex flex-row col-12 justify-content-center">
                                <Pencil img={Pencil1} enter={enter} delay={"0s"} />
                                <Pencil img={Pencil2} enter={enter} delay={"0.3s"} />
                                <Pencil img={Pencil3} enter={enter} delay={"0.6s"} />
                                <Pencil img={Pencil4} enter={enter} delay={"0.9s"} />
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </Element>
    )
}

export default ContentColors