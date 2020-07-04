import React, { Component } from 'react'
import * as Scroll from "react-scroll"

class Skills extends Component {
    constructor(props){
        super(props)
        this.elem=React.createRef();
    }
    render(){
        return (
            <Scroll.Element name="skills" className="skl d-flex justify-content-center align-items-start">
                <div className="skills d-flex col-9 flex-column" ref={div=>this.elem=div}>
                    <h1>Skills</h1>
                    <div className="d-flex col-12 flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start">
                        <div className="d-flex col-6 flex-column align-items-lg-center">
                            <h2>Excellent:</h2>
                            <ul>
                                <li>JavaScript</li>
                                <li>React/Redux</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="d-flex col-6 flex-column align-items-lg-center">
                            <h2>Familiar:</h2>
                            <ul>
                                <li>Sass</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Scroll.Element>
        )
    }
}

export default Skills