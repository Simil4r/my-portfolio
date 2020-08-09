import React, {Component} from "react";
import * as Scroll from "react-scroll"
import PortfolioSite from "./PortfolioSite";
import MWNetrunners from '../img/MW Netrunners.png';
import MWSecrets from "../img/MW SecretsOfMountains.PNG";
import MWTodolist from "../img/MW Todolist.png";
import MWFandom from "../img/MW Fandom.png";

let Element = Scroll.Element;

class Portfolio extends Component {

    render(){
        return(
            <Element name="portfolio" className="portf d-flex justify-content-center align-items-start">
                <div className={"portfolio d-flex col-9 flex-column"}>
                    <h1 className={"col-12"}>Portfolio</h1>
                    <div className="d-flex col-12 flex-column flex-xl-row flex-wrap">
                        <PortfolioSite title={"Net Runners"} img={MWNetrunners} external={true} link={"http://netrunners.netlify.app"} gitLink={"https://github.com/michalwarchol/netrunners"} />
                        <PortfolioSite title={"Secrets of Mountains"} img={MWSecrets} external={true} link={"http://secretsofmountains.netlify.app"} gitLink={"https://github.com/michalwarchol/secretsofmountains"} />
                        <PortfolioSite title={"Breaking Bad Fandom"} img={MWFandom} external={true} link={"http://breakingbadfandom.netlify.app"} gitLink={"https://github.com/michalwarchol/breakingbadfandom"}/>
                        <PortfolioSite title={"ToDoList"} img={MWTodolist} external={true} link={"http://mwtodolist.netlify.app"} gitLink={"https://github.com/michalwarchol/todolist"}/>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Portfolio;