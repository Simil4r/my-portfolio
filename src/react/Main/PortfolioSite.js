import React from "react";
import { Link } from "react-router-dom"

const PortfolioSite = props => {
    return (
        <div className="col-12 col-xl-6">
            <h2>{props.title}</h2>
            <Link to={props.link}>
                <div className={"portfolio_site_image"}>
                    <img src={props.img} alt={"not found"} />
                </div>
            </Link>
            <h4><a href={props.gitLink}>Git repository</a></h4>
        </div>
    )
}

export default PortfolioSite;