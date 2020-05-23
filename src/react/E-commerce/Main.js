import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from './UserContext'

import Home from './Home';
import Register from './Register';
import Login from './Login';
import ContentParticular from './ContentParticular'
import ProductPage from './ProductPage'
import ContentCart from './ContentCart'

import '../../css/E-commerce.css';


const Main = () => {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/e-commerce" component={Home} />
          <Route exact path="/e-commerce/register" component={Register} />
          <Route exact path="/e-commerce/login" component={Login} />
          <Route exact path="/e-commerce/cart" component={ContentCart} />
          <Route exact path="/e-commerce/:category" component={ContentParticular} />
          <Route exact path="/e-commerce/:category/:productID" component={ProductPage} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default Main;