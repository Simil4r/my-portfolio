import React from 'react'
import ContentEntry from './ContentEntry'
import ContentAbout from './ContentAbout'
import ContentColors from './ContentColors'
import ContentOrder from './ContentOrder'
import Topbar from './Topbar'
import "../../css/E-shop.css"


const Main = () => {
    return(
        <div className="e-shop container-fluid">
            <Topbar />
            <ContentEntry />
            <ContentAbout />
            <ContentColors />
            <ContentOrder />
        </div>
    )
}

export default Main