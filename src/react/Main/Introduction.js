import React, {Component} from "react"
import * as Scroll from "react-scroll"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"
import Banner from "../../img/banner.jpg"

let Element = Scroll.Element;
class Introduction extends Component {
    constructor(props){
        super(props);
        this.elem = React.createRef();
    }

    render(){
        return(
            <Element name="home" className="home">
                <div className={"d-flex row introduction"} id={"home"} ref={div=>this.elem=div}>
                        <h1 className={"d-flex col-12 align-self-center justify-content-center"}>Michał Warchoł</h1>
                    <div className="col-12 d-flex justify-content-center align-items-center links">
                        <div className="d-flex col-2 align-items-center justify-content-end link">
                            <a href="https://www.linkedin.com/in/micha%C5%82-warcho%C5%82-2033a51a0/">
                                <img src={Linkedin} alt="not found" />
                            </a> 
                        </div>
                        <div className="d-flex col-1 align-items-center justify-content-center link">
                            <a href="https://github.com/Simil4r">
                                <img src={Github} alt="not found" />
                            </a>
                        </div>
                        <div  className="d-flex col-2 align-items-center link">
                            <i className="icon-location">Cracow, PL</i>
                        </div>
                    </div>
                    <img src={Banner} alt="not found" />
                </div>
            </Element>
    );
    }
}

export default Introduction;