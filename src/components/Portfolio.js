import React, {Component} from "react";
import PortfolioSite from "./PortfolioSite";
import MWFifteen from "../img/MW Fifteen.png"
import MWNetrunners from '../img/MW Netrunners.png';
import MWSecrets from '../img/MW SecretsOfMountains.PNG';
import MWFandom from "../img/MW Fandom.png";


class Portfolio extends Component {

    render(){
        return(
                <div className={"portfolio d-flex flex-column container"}>
                    <h1>Portfolio</h1>
                    <div className="d-flex col-12 flex-column flex-xl-row flex-wrap">
                        <PortfolioSite title="Fifteen Puzzle" img={MWFifteen}  link={"http://fifteen-puzzle.netlify.app"} gitLink={"https://github.com/michalwarchol/fifteen-puzzle"} />
                        <PortfolioSite title={"Net Runners"} img={MWNetrunners} link={"http://netrunners.netlify.app"} gitLink={"https://github.com/michalwarchol/netrunners"} />
                        <PortfolioSite title={"Secrets of Mountains"} img={MWSecrets} link={"http://secretsofmountains.netlify.app"} gitLink={"https://github.com/michalwarchol/secretsofmountains"} />
                        <PortfolioSite title={"Breaking Bad Fandom"} img={MWFandom} link={"http://breakingbadfandom.netlify.app"} gitLink={"https://github.com/michalwarchol/breakingbadfandom"}/>
                    </div>
                </div>
        )
    }
}

export default Portfolio;