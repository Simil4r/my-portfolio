import React from "react";

const PortfolioSite = props => {
    const visitSubPage = () => {
        window.open(props.link, '_blank');
    };
    return (
        <div className="col-12 col-xl-6">
            <h2>{props.title}</h2>
            <div className={"portfolio_site_image"} onClick={visitSubPage}>
                <img src={props.img} alt={"not found"} />
            </div>
            <h4><a href={props.gitLink}>Git repository</a></h4>
        </div>
    )
}

export default PortfolioSite;