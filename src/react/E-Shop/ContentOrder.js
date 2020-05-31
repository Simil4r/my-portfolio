import React from 'react'
import * as Scroll from 'react-scroll'

let Element = Scroll.Element

const ContentOrder = () => {
    return (
        <Element name="Order">
            <div className="e-shop_contentorder d-flex justify-content-center align-items-center">
                <div className="order_button">
                    <h1>ORDER NOW</h1>
                </div>
                <div className="order_button">
                    <h1>LEARN MORE</h1>
                </div>
            </div>
        </Element>
    )
}

export default ContentOrder