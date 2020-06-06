import React from 'react'
import * as Scroll from 'react-scroll'
import Pencil from './Pencil'

import Pencil1 from '../../img/pencil_02.png'
import Pencil2 from '../../img/pencil_03.png'
import Pencil3 from '../../img/pencil_04.png'
import Pencil4 from '../../img/pencil_05.png'

let Element = Scroll.Element

const ContentColors = () => {
    return (
        <Element name="Colors">
            <div className="e-shop_contentcolors d-flex flex-column flex-xl-row">
                <div className="text_left d-flex col-12 col-xl-5 align-items-center justify-content-center">
                    <h1>Many Colors Available</h1>
                </div>
                <div className="image_side d-flex col-12 col-xl-7 justify-content-center align-items-center">
                    <div className="pencils d-flex flex-column flex-xl-row col-12">
                        <Pencil img={Pencil1} />
                        <Pencil img={Pencil2} />
                        <Pencil img={Pencil3} />
                        <Pencil img={Pencil4} />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default ContentColors