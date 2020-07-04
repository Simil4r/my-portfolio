import React, {useState} from 'react'
import TopbarButton from './TopbarButton'

const Topbar = () => {
    const [buttons] = useState(["Home", "About", "Colors", "Order"])
    return(
        <div className="e-shop_topbar d-flex flex-row justify-content-center">
            <div className="container d-flex flex-row justify-content-center">
                {buttons.map((element, index)=>{
                    return <TopbarButton destination={element} key={index} />
                })}
            </div>
        </div>
    )
}

export default Topbar