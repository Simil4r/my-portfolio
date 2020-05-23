import React, {useContext, useEffect,useState} from 'react'
import Bar from './Bar'
import Button from './Button'
import axios from 'axios'
import {UserContext} from './UserContext'
import {LinkContext} from '../../LinkContext'
import { connect } from 'react-redux'

const ProductPageContent = props => {

    const {user} = useContext(UserContext)
    const {link} = useContext(LinkContext)
    const [cartText, setCartText] = useState("ADD TO YOUR CART")

    useEffect(()=>{
        if(user){
            axios.post(link+"/carts/isInCart", {username: user, id: props.product._id})
            .then(res=>{
                if(res.data.length!==0)
                    setCartText("ALREADY IN CART")
                else 
                    setCartText("ADD TO YOUR CART")
            })
        }else{
            let match = props.cart.filter((element)=>{
                return element.id===props.product._id
            })
            if(match.length!==0)
                setCartText("ALREADY IN CART")
            else 
                setCartText("ADD TO YOUR CART")
        }
    },[user, props.product._id, props.cart, link])

    const addToCart = () => {
        if(user){
            axios.post(link+"/carts/addItem", {username: user, id: props.product._id})
            .then(()=>{
                props.addProduct(props.product._id)
            })
            .catch(err=>console.log(err))
        }else{
            props.addProduct(props.product._id)
        }
    }
    const buyNow = () => {
        console.log("buy now")
    }
    const styles={
        width: "250px"
    }
    return(
        <div className="e-commerce_productpagecontent container d-flex flex-row flex-wrap">
            <div className="d-flex flex-lg-row col-12 flex-wrap">
            <div className="e-commerce_productpagecontent_image d-flex col-12 col-lg-4 justify-content-center justify-content-lg-start order-1 order-lg-0">
                <img src={link+"/"+props.product.imageLeader} alt='not found' />
            </div>
            <div className="e-commerce_productpagecontent_description d-flex flex-column col-12 col-lg-8 order-0 order-lg-1 justify-content-center justify-content-lg-start">
                <h1>{props.product.name}</h1>
                <h2>${props.product.price}</h2>
                <h5>{props.product.description}</h5>
                <div className="e-commerce_productpagecontent_buttons d-flex flex-row justify-content-center">
                    <Button text={cartText} handleClick={()=>{if(cartText==="ADD TO YOUR CART")addToCart()}} styles={styles} />
                    <Button text="BUY NOW" handleClick={buyNow} styles={styles} />
                </div>
            </div>
            </div>
            <div className="e-commerce_productpagecontent_info d-flex flex-column">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nisi libero. Nulla vestibulum eros eros, quis dapibus purus porta ut. Mauris condimentum non dui eu rutrum. Phasellus et rutrum felis. Suspendisse potenti. Ut congue metus laoreet diam dignissim faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam semper dolor at posuere dignissim. Sed congue in lectus et iaculis. Nulla urna nisl, pretium in ex sed, posuere sagittis lacus. Sed tincidunt et nulla ac accumsan. Nullam ut purus nisi. Aliquam facilisis facilisis augue, vitae lacinia nibh rutrum ultricies.
                </p>
                <p>
                Nunc at dapibus erat. Morbi et risus a risus congue volutpat. Ut cursus justo et convallis venenatis. Vestibulum tempor porttitor neque, vitae malesuada ipsum mattis ac. Donec erat diam, lacinia in sapien et, tempor eleifend enim. Phasellus non diam eu ante cursus bibendum. Vivamus vitae sagittis libero. Curabitur cursus dui et maximus hendrerit. Integer ultrices a sem at tempor. Cras blandit, turpis et fringilla porttitor, lorem justo facilisis felis, ut laoreet magna dui nec nisl. Aliquam eu dolor at libero sollicitudin faucibus non id velit. Nulla convallis est sit amet est pellentesque ullamcorper. Proin fermentum ante id aliquam blandit. Donec mi ipsum, tincidunt nec erat ac, tincidunt vehicula diam.
                </p>
            </div>
            <Bar name="Recommended" />
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
        addProduct: id => {dispatch({type: 'ADD_PRODUCT', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContent)