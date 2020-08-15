import React from 'react'
import Portrait from "../img/portrait.jpg"

const Photo = () => {
    return(
        <div className={"d-flex about_photo col-12 col-sm-4 justify-content-center align-items-start"}>
            <img src={Portrait} alt="not found" />
        </div>
    )
}

export default Photo