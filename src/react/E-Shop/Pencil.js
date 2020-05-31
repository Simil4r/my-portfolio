import React from 'react'

const Pencil = props => {
    return(
        <div className="pencil d-flex col-3">
            <img src={props.img} alt="not found" />
        </div>
    )
}

export default Pencil