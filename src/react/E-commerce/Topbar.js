import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import Button from './Button'
import Cart from './Cart'
import {UserContext} from './UserContext'

const Topbar = () => {
    const [myCart, setMyCart] = useState(false)

    const {user} = useContext(UserContext)

    const showCart = () => {
        setMyCart(!myCart)
    }
    const register = () => {
        window.open('http://localhost:3000/e-commerce/register', "_self")
    }
    const login = () => {
        window.open('http://localhost:3000/e-commerce/login', "_self")
    }
        return (
            <div className='e-commerce_topbar'>
                <div className='e-commerce_topbar_navbar d-flex flex-row col-12 flex-wrap'>
                    <h2 className='d-flex col-12 col-lg-6 justify-content-center'><Link to="/e-commerce">MW e-shop</Link></h2>
                    <div className='e-commerce_topbar_dropdown d-flex col-12 col-md-12 col-lg-3 justify-content-center justify-content-lg-end'>
                        <div className="e-commerce_topbar_dropdown_categories d-flex align-items-center flex-row">
                            <div className="category">
                                <Link to="/e-commerce/Desk">Desk</Link>
                            </div>
                            <div className="category">
                                <Link to="/e-commerce/Table">Table</Link>
                            </div>
                            <div className="category">
                                <Link to="/e-commerce/Gym">Gym</Link>
                            </div>
                        </div>
                        <i className="icon-basket" onClick={showCart}></i>
                    </div>
                    {user?<div className='e-commerce_topbar_buttons d-flex col-12 col-md-12 col-lg-2 justify-content-center justify-content-lg-start'>
                        <NavDropdown title={user}>
                            <NavDropdown.Item as="button"><Link to="/e-commerce/cart">My Cart</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/e-commerce/login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    :<div className='e-commerce_topbar_buttons d-flex col-12 col-md-12 col-lg-2 justify-content-center justify-content-lg-start'>
                        <Button text='Login' handleClick={login} />
                        <Button text='Register' handleClick={register} />
                    </div>}
                </div>
                {myCart?<Cart />:null}
            </div>
        )
}

export default Topbar