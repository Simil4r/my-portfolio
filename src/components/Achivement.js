import React from 'react'

const Achivement = ({header, title, description, icon}) => {
    return (
        <div className="achivement d-flex flex-row col-12">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <div className="achivement_info">
                <h3>{header}</h3>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Achivement;