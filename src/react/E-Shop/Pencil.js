import React from 'react'

const Pencil = props => {
    return(
        <div className="pencil d-flex justify-content-center col-xl-3">
            <img src={props.img} alt="not found" />
        </div>
    )
}

export default Pencil