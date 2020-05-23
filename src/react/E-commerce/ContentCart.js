import React, { useState, useEffect } from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import Button from './Button'
import CartItem from './CartItem'
import {connect} from 'react-redux'

const ContentCart = props => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        let products = props.cart.map((element, index)=>{
            return <CartItem id={element.id} amount={element.amount} key={index}/>
        })
        setItems(products)
    }, [props.cart])
    const handleClick = () => {
        console.log("ORDER AND PAY")
    }
    const styles = {
        width: "200px"
    }
    return(
        <div className="container-fluid e-commerce_contentcart">
            <Topbar />
            <div className="container e-commerce_contentcart_content">
                <h1>My Cart</h1>
                <div className="e-commerce_contentcart_content_products">
                    {items.length!==0?items:<h1>YOUR CART IS CURRENTLY EMPTY</h1>}
                </div>
                <div className="container d-flex justify-content-end">
                    {items.length!==0?<Button text="ORDER AND PAY" handleClick={handleClick} styles={styles}/>:null}
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(ContentCart)