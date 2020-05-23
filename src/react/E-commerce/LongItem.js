import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {LinkContext} from '../../LinkContext'

const LongItem = props => {
    const {link} = useContext(LinkContext)
    return (
        <Link to={"/e-commerce/" + props.product.category +"/"+ props.product._id}>
            <div className='e-commerce_contentparticular_longitem d-flex col-12 flex-row'>
                <div className='e-commerce_contentparticular_longitem_image d-flex justify-content-center'>
                    <img src={link+"/" + props.product.imageLeader} alt="not found" />
                </div>
                <div className='e-commerce_contentparticular_longitem_text'>
                    <h1>{props.product.name}</h1>
                    <h3>${props.product.price}</h3>
                    <h6>{props.product.description}</h6>
                </div>
            </div>
        </Link>
    )
}

export default LongItem