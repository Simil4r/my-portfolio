import React from 'react'
import * as Scroll from 'react-scroll'

let Element = Scroll.Element

const ContentOrder = () => {
    return (
        <Element name="Order">
            <div className="e-shop_contentorder d-flex flex-column justify-content-center align-items-end mb-3">
                <div className="d-flex flex-column flex-md-row align-self-center mt-auto">
                    <div className="order_button d-flex">
                        <h1>ORDER NOW</h1>
                    </div>
                    <div className="order_button d-flex">
                        <h1>LEARN MORE</h1>
                    </div>
                </div>
                <div className="copyright d-flex col-12 justify-content-center justify-self-end mt-auto">
                    <small>Copyright &copy; {new Date().getFullYear()} Michał Warchoł</small>
                </div>
            </div>
        </Element>
    )
}

export default ContentOrder