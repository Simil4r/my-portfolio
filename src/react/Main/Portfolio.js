import React, {Component} from "react";
import * as Scroll from "react-scroll"
import PortfolioSite from "./PortfolioSite";
import MWTodolist from "../../img/MW Todolist.png";
import MWeshop from "../../img/MW e-shop.png";

let Element = Scroll.Element;

class Portfolio extends Component {
    constructor(props){
        super(props)
        this.elem=React.createRef();
    }
    componentDidMount(){
        document.addEventListener("scroll", ()=>{
            var element = this.elem.getBoundingClientRect();
            if(element.top>0 && element.top<element.height/3){
                this.props.underline();
            } 
        })
    }
    render(){
        return(
            <Element name="portfolio" className="portf d-flex justify-content-center align-items-start">
                <div className={"portfolio d-flex col-9 flex-column"} ref={div=>this.elem=div}>
                    <h1 className={"col-12"}>Portfolio</h1>
                    <div className="d-flex col-12 flex-column flex-xl-row">
                        <PortfolioSite title={"E-commerce Store"} img={MWeshop} link={"/e-shop"} gitLink={"#"}/>
                        <PortfolioSite title={"ToDoList"} img={MWTodolist} link={"/todolist"} gitLink={"https://github.com/Simil4r/portfolio/tree/master/src/react/Todolist"}/>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Portfolio;