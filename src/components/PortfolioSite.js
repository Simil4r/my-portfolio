import React from "react";

const PortfolioSite = props => {
    return (
        <div className="portfolio_site col-12 col-xl-6">
            <h2>{props.title}</h2>
            <div className={"portfolio_site_image"}>
                <img src={props.img} alt={"not found"} />
                <div className="inner_hover d-flex justify-content-center align-items-center">
                    <a href={props.link}><i className="icon-search"></i></a>
                    <a href={props.gitLink}><i className="icon-github-circled"></i></a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSite;