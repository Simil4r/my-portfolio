import React, {useState} from 'react'
import TopbarButton from './TopbarButton'

const Topbar = () => {
    const [buttons] = useState(["Home", "About", "Colors", "Order"])
    return(
        <div className="e-shop_topbar d-flex flex-row justify-content-end">
            {buttons.map((element, index)=>{
                return <TopbarButton destination={element} key={index} />
            })}
        </div>
    )
}

export default Topbar