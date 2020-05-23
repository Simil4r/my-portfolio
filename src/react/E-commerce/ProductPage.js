import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import Topbar from './Topbar'
import Footer from './Footer'
import ProductPageContent from './ProductPageContent'
import {LinkContext} from '../../LinkContext'

const ProductPage = () => {
    let {productID} = useParams()
    const [product, setProduct] = useState(null)
    const {link} = useContext(LinkContext)
    useEffect(()=>{
        axios.post(link+"/products/findOneByID", {id: productID})
            .then(res=>{
                setProduct(res.data)
            })
    }, [productID, link])
    return(
        <div className="e-commerce_itemparticular container-fluid d-flex flex-column">
            <Topbar />
            {product===null 
                ? <div className="container justify-content-center align-items-center"><Spinner animation="border"/></div>
                :<ProductPageContent product={product} />}
            <Footer />
        </div>
    )
}

export default ProductPage