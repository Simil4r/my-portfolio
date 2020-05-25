import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import Item from './Item'
import {LinkContext} from '../../LinkContext'

const Bar = props => {
    const [items, setItems] = useState(<Spinner animation='border'/>)
    const {link} = useContext(LinkContext)
    useEffect(() => {
        if(props.name==="Recommended"){
            axios.post(link+'/products/findRecommended')
            .then(res=>{
                var products = res.data.map((element, index)=>{
                    return <Link to={"/e-commerce/"+element.category+"/"+element._id} className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3" key={index} ><Item product={element}/></Link>
                })
                setItems(products)
            })
        }
        else{
            fetch('/.netlify/functions/productRead')
                .then(response=>response.json())
                .then(res=>{
                    var products = res.data.map((element, index)=>{
                        return <Link to={"/e-commerce/"+element.category+"/"+element._id} className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3" key={index}><Item product={element}/></Link>
                    })
                    setItems(products)
                })
        }
    }, [props.name, link])
    return(
        <div className='e-commerce_content_bar d-flex col-12 flex-column'>
            <div className='e-commerce_content_bar_name'>
                <h3>
                    <Link to={'/e-commerce/'+props.name}>
                        {props.name}
                    </Link>
                </h3>
            </div>
            <div className='e-commerce_content_bar_items d-flex col-12 flex-row flex-wrap justify-content-center'>
                {items}
            </div>
        </div>
    )
}

export default Bar