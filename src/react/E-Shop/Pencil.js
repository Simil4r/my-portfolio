import React from 'react'

const Pencil = props => {
    return(
        <div className="pencil d-flex justify-content-center" style={props.enter?{opacity: 0}:{transform: "translateX(0)", opacity: 1, transitionDelay: props.delay}}>
            <img src={props.img} alt="not found" />
        </div>
    )
}

export default Pencil