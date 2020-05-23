import React, { useContext } from 'react'
import {LinkContext} from '../../LinkContext'

const ItemShort = props => {
    const {link} = useContext(LinkContext)
    return(
        <div className='e-commerce_content_bar_itemshort d-flex flex-column'>
            <div className='e-commerce_content_bar_itemshort_image d-flex justify-content-center align-items-center'>
                <img src={link+"/"+props.product.imageLeader} alt='not found'/>
            </div>
            <div className='e-commerce_content_bar_itemshort_info d-flex flex-column align-items-center'>
                <span>{props.product.name}</span>
                <span>${props.product.price}</span>
            </div>
        </div>
    )
}

export default ItemShort