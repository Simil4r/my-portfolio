import React from 'react'

const Statistic = props => {
    return (
        <div 
            className="laurels d-flex flex-column col-6 col-md-3 justify-content-center" 
            style={
                props.visible 
                    ? { opacity: 0, transform: 'rotateY(0.25turn)' } 
                    : { opacity: 1, transform: 'rotateY(0turn)', transitionDelay: props.delay }
                }>
                <h1>{props.number}</h1>
                <h4>{props.text}</h4>
        </div>
    )
}

export default Statistic