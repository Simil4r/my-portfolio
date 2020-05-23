import React, { useContext, useState, useEffect } from 'react'
import {LinkContext} from '../../LinkContext'
import {UserContext} from './UserContext'
import Axios from 'axios'
import {Spinner} from 'react-bootstrap'
import {connect} from 'react-redux'

const CartItem = props => {
    const {link} = useContext(LinkContext)
    const {user} = useContext(UserContext)
    const [product, setProduct] = useState(null)
    const [amount, setAmount] = useState(0)

    useEffect(()=>{
        Axios.post(link+'/products/findOneByID', {id: props.id})
        .then(res=>{
            setProduct(res.data)
            setAmount(props.amount)
        })
    }, [link, props.id, props.amount, props.cart])

    const handleChange = e => {
        let value = parseInt(e.target.value)
        setAmount(value)
        props.updateAmount(props.id, value)
    }
    const deleteProduct = () => {
        if(user){
            Axios.post(link+"/carts/deleteProduct", {id: props.id, username: user})
            .then(()=>{
                props.deleteProduct(props.id)
                setProduct(null)
            })
        }else{
            props.deleteProduct(props.id)
            setProduct(null)
        }
    }
    return(
        product?<div className="e-commerce_contentcart_content_products_item d-flex flex-row col-12">
            <div className="item_image d-flex col-3">
                <img src={link+"/"+product.imageLeader} alt="not found" />
            </div>
            <div className="item_info d-flex justify-content-center flex-column col-3">
                <h4>{product.name}</h4>
                <h5>${product.price}</h5>
            </div>
            <div className="item_amount d-flex align-items-center col-3">
                <label><h5>amount: </h5></label>
                <input type="number" onChange={handleChange} value={amount} min={1} />
            </div>
            <div className="item_remove d-flex align-items-center col-3">
                <i className="icon-trash" onClick={deleteProduct}></i>
            </div>
        </div>
        :<div className="container d-flex justify-content-center"><Spinner animation="border"/></div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        deleteProduct: id => {dispatch({type: 'DELETE_PRODUCT', id: id})},
        updateAmount: (id, amount) => {dispatch({type: 'UPDATE_AMOUNT', id: id, amount: amount})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)