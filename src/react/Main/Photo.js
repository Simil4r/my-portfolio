import React from 'react'
import Portrait from "../../img/portrait.jpg"

const Photo = () => {
    return(
        <div className={"d-flex about_photo col-12 col-sm-12 col-md-12 col-lg-4 col-lx-4 justify-content-center"}>
            <img src={Portrait} alt="not found" />
        </div>
    )
}

export default Photo