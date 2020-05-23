import React, { Component } from 'react'

class NoElements extends Component {
    render() {
        return (
            <div>
                <h1 className='d-flex justify-content-center'>
                    You have nothing to do today!
            </h1>
                <h3 className='d-flex justify-content-center'>
                    Click the plus button on the top bar to add new objectives.
            </h3>
            </div>
        )
    }
}

export default NoElements