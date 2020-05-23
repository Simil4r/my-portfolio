import React from 'react'

const Button = props => {
    return (
        <div className='e-commerce_button' onClick={props.handleClick} style={props.styles}>
            <span>{props.text}</span>
        </div>
    )
}

export default Button