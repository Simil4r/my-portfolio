import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { UserContext } from './UserContext'
import Registration from './Registration'
import Login from './Login'
import Home from './Home'

import '../../css/Todolist.css';

function Main() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Route exact path="/todolist/registration" component={Registration} />
        <Route exact path="/todolist/login" component={Login} />
        <Route exact path="/todolist" component={Home} />
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default Main;