import React, { useEffect, useState } from 'react'
import ShortItem from './ShortItem'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const Cart = props => {
    const [items, setItems] = useState(null)

    useEffect(()=>{
            let products = props.cart.map((element, index)=>{
                return <ShortItem amount={element.amount} id={element.id} key={index} />
            })
            setItems(products)
    }, [props])
    return(
        <div className="e-commerce_topbar_cart">
            <h3><Link to="/e-commerce/cart">My Cart</Link></h3>
            <h5>total: {props.cart.length}</h5>
            <div className="d-flex justify-content-center align-items-center flex-column">
                {props.cart.length===0?"your cart is empty":items}
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
        setProducts: elements => {dispatch({type: 'SET_PRODUCTS', elements: elements})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)