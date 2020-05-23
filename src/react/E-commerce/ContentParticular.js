import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import LongItem from './LongItem'
import Topbar from './Topbar'
import Footer from './Footer'
import {LinkContext} from '../../LinkContext'

const ContentParticular = () => {

    const [items, setItems] = useState([])
    let { category } = useParams()
    const {link} = useContext(LinkContext)

    useEffect(() => {
        let parameter = category === "Recommended" ? "findRecommended" : "find";
        axios.post(link+"/products/" + parameter, { name: category })
            .then(res => {
                let products = res.data.map((element, index) => {
                    return <LongItem product={element} key={index} />
                })
                setItems(products)
            })
    }, [category, link])

    return (
        <div className="e-commerce_contentparticular container-fluid d-flex flex-column">
            <Topbar />
            <div className="e-commerce_contentparticular_name container">
                <h2>{category}</h2>
            </div>
            <div className="container">
                {items}
            </div>
            <Footer />
        </div>
    )
}

export default ContentParticular