import React, { useState } from 'react'
import Topbar from './Topbar'
import Bar from './Bar'
import Footer from './Footer'
import Banner from '../../img/e-commerce-banner.jpg'

const Content = () => {
    const [bars] = useState(["Recommended", "Gym", "Table", "Desk"])
    return (
        <div className='container-fluid e-commerce_content'>
            <Topbar />
            <div className="container e-commerce_content_banner">
                <img src={Banner} alt="not found" />
            </div>
            <div className='container e-commerce_content_bars'>
                {bars.map((bar, id) => {
                    return <Bar name={bar} key={id} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Content