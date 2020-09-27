import React from "react"
import * as Scroll from "react-scroll"
import Photo from './Photo';


let Element = Scroll.Element;

const About = () => {
    return (
        <Element name="about" className="abo d-flex justify-content-center align-items-start container">
            <div className={"about d-flex flex-column"} id={"about"}>
                <div className={"d-flex flex-column flex-sm-row"}>
                    <div className="d-flex flex-column">
                        <h1>About Me</h1>
                        <div className="info d-flex flex-column">
                            I'm Michał. <br></br>
                            I design and build websites. I get better with every new project. <br></br>
                            I am hungry for more knowledge and experience, to develop my skills.<br></br>
                            I take much pleasure from making small parts of projects and combining them together.
                            Solving problems is what I love.
                        </div>
                        <div className="character d-flex flex-row flex-wrap">
                            <span><i className="icon-star"></i>JavaScript</span>
                            <span><i className="icon-star"></i>React</span>
                            <span><i className="icon-star"></i>HTML</span>
                            <span><i className="icon-star"></i>CSS</span>
                            <span><i className="icon-star"></i>Bootstrap</span>
                            <span><i className="icon-star"></i>SASS</span>
                            <span><i className="icon-star"></i>TypeScript</span>
                            <span><i className="icon-star"></i>Git</span>
                        </div>
                        <div className="character d-flex flex-row flex-wrap">
                            <span><i className="icon-star"></i>Precise</span>
                            <span><i className="icon-star"></i>Punctual</span>
                            <span><i className="icon-star"></i>Creative</span>
                            <span><i className="icon-star"></i>Kind</span>
                            <span><i className="icon-star"></i>Honest</span>
                            <span><i className="icon-star"></i>Disciplined</span>
                            <span><i className="icon-star"></i>Communicative</span>
                            <span><i className="icon-star"></i>Hard-working</span>
                            <span><i className="icon-star"></i>Responsible</span>
                            <span><i className="icon-star"></i>Assertive</span>
                        </div>
                    </div>
                    <Photo />
                </div>
            </div>
        </Element>
    );
}

export default About;