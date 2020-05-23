import React, {useEffect, useState, useContext} from 'react'
import Axios from 'axios'
import {Spinner} from 'react-bootstrap'
import {UserContext} from './UserContext'
import {LinkContext} from '../../LinkContext'
import { connect } from 'react-redux'

const ShortItem = props => {
    const [product, setProduct] = useState(null)
    const {user} = useContext(UserContext)
    const {link} = useContext(LinkContext)
    useEffect(()=>{
        Axios.post(link+"/products/findOneByID", {id: props.id})
            .then(res=>{
                setProduct(res.data)
            })
    }, [props.id, link])

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
        product===null
        ?<Spinner animation="border" />
        :
        <div className="d-flex flex-row e-commerce_topbar_cart_shortItem col-12">
            <div className="d-flex col-3 justify-content-center align-items-center">
                <img src={link+"/"+product.imageLeader} alt="not found"/>
            </div>
            <div className="d-flex flex-column col-6">
                <span>{product.name}</span>
                <span>price: ${product.price}</span>
                <span>amount: {props.amount}</span>
            </div>
            <div className="e-commerce_topbar_cart_shortItem_delete d-flex col-3 justify-content-end align-items-center" onClick={deleteProduct}>
                <i className="icon-trash"></i>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        deleteProduct: id => {dispatch({type: 'DELETE_PRODUCT', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortItem)