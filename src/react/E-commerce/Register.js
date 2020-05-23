import React, { useState, useContext } from 'react'
import axios from 'axios'
import Button from './Button'
import { UserContext } from './UserContext'
import {LinkContext} from '../../LinkContext'
import { connect } from 'react-redux'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [ready, setReady] = useState(true)

    const { setUser } = useContext(UserContext)
    const {link} = useContext(LinkContext)

    const username_func = (e) => {
        setUsername(e.target.value)
    }

    const password_func = (e) => {
        setPassword(e.target.value)
    }

    const confirm_func = (e) => {
        setConfirm(e.target.value)
    }


    const handleClick = () => {
        setReady(true)
        var ready = true;
        axios.get(link+'/users')
            .then(res => {
                var users = res.data.map(user => user.username)
                if (users.indexOf(username) !== -1) {
                    ready = false;
                }
                if (username.length < 4) {
                    ready = false;
                }
                if (password !== confirm) {
                    ready = false;
                }
                if (password.length < 6) {
                    ready = false;
                }
                if (users.indexOf(username) !== -1) {
                    ready = false;
                }
                if (ready) {
                    setReady(true)
                    const user = {
                        username: username,
                        password: password
                    }
                    axios.post(link+'/users/add', user)
                        .then(() => {
                            axios.post(link+'/carts/create', {username: username})
                            axios.post(link+'/users/login', { username: username, password: password })
                            .then(res => {
                                setUser(res.data.result)
                                axios.post(link+"/carts/getUserCart", {username: username})
                                .then(res=>{
                                    props.setProducts(res.data.items)
                                    props.history.push("/e-commerce")
                                })
                            })
                        }
                        )
                } else {
                    setReady(false)
                }
            })
    }

    return (
        <div className='e-commerce'>
            <div className='e-commerce_registration d-flex flex-column justify-content-center align-items-center'>
                <h1 onClick={()=>props.history.push("/e-commerce")}>MW e-shop</h1>
                <h3>Welcome to MW e-shop, the best place to find broken phones :D</h3>
                <div className='d-flex col-8 flex-column flex-lg-row'>
                    <div className='d-flex col-12 col-lg-6 flex-column align-items-center justify-content-center'>
                        <h2>Registration</h2>
                        <div className="e-commerce_form d-flex flex-column align-items-center">
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
                            <div className={'e-commerce_input'}>
                                <input
                                    type='password'
                                    value={confirm}
                                    onChange={confirm_func}
                                    placeholder='confirm' />
                            </div>
                            {ready ? null : <p>Something went wrong! Remember that your username should have at least 4 characters and your password 6!</p>}
                            <Button text="REGISTER" handleClick={handleClick} />
                            <div className='e-commerce_link'><a href='/e-commerce/login'>Have an account?</a></div>
                        </div>
                    </div>
                    <div className='e-commerce_info d-lg-flex col-lg-6 d-none justify-content-center align-items-center'>
                        <h3>
                            By registering to<br />MW e-shop App<br />you also gain access to <br /><a href='http://localhost:3000/todolist'>MW ToDoList App :)</a>
                            <br />You can check it out later <br />if you want!</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)