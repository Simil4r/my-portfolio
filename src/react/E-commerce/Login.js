import React, {useState, useContext} from 'react'
import axios from 'axios'
import Button from './Button'
import {UserContext} from './UserContext'
import {LinkContext} from '../../LinkContext'
import { connect } from 'react-redux'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ready, setReady] = useState(false)

    const {setUser} = useContext(UserContext)
    const {link} = useContext(LinkContext)

    const username_func = (e) => {
        setUsername(e.target.value)
    }

    const password_func = (e) => {
        setPassword(e.target.value)
    }
    const handleClick = () => {
    setReady(false)
    axios.post(link+'/users/login', {username: username,password: password})
        .then(res=>{
            if(res.data.err)
                setReady(true)
            else{
                setUser(res.data.result)
                axios.post(link+"/carts/getUserCart", {username: username})
                    .then(res=>{
                        props.setProducts(res.data.items)
                        props.history.push("/e-commerce")
                    })
            }
        })
    }
    return (
        <div className='e-commerce'>
            <div className='e-commerce_registration d-flex flex-column justify-content-center align-items-center'>
                <h1 onClick={()=>props.history.push("/e-commerce")}>MW e-shop</h1>
                <h3>Welcome to MW e-shop, the best place to find broken phones :D</h3>
                <div className='d-flex col-8 flex-column flex-lg-row'>
                    <div className='d-flex col-12 col-lg-6 flex-column justify-content-center align-items-center'>
                        <h2>Login</h2>
                        <div className="e-commerce_form d-flex flex-column justify-content-center align-items-center">
                            <div className={'e-commerce_input'}>
                                <input
                                    type='text'
                                    value={username}
                                    onChange={username_func}
                                    placeholder='name' />
                            </div>
                            <div className={'e-commerce_input'}>
                                <input
                                    type='password'
                                    value={password}
                                    onChange={password_func}
                                    placeholder='password' />
                            </div>
                            {ready ? <p>Incorrect user name or password!</p> : null}
                            <Button text="LOGIN" handleClick={handleClick} />
                            <div className='e-commerce_link'><a href='/e-commerce/register'>No account? Register now</a></div>
                        </div>
                    </div>
                    <div className='e-commerce_info d-lg-flex col-lg-6 d-none justify-content-center align-items-center'>
                        <h3>
                            Thank you<br />for comming back<br />to MW e-shop :D</h3>
                    </div>
                </div>
                <span onClick={()=>props.history.push("/e-commerce")}>Go To Shop</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)