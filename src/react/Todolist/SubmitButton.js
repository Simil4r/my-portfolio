import React from 'react'

const SubmitButton = ({text, click}) => {
    return(
        <div className='todolist_submitbutton d-flex justify-content-center align-items-center' onClick={click}>
            <span>{text}</span>
        </div>
    )
}

export default SubmitButton