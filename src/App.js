import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './react/Main/Main';
import Todolist from './react/Todolist/Main';
import Eshop from './react/E-Shop/Main'
import './css/App.css';
import { LinkContext } from './LinkContext'
import "./img/fontello-d33de368/css/fontello.css"

const App = () => {
  const [link, setLink] = useState("https://michalwarchol.netlify.app")
  return (
    <BrowserRouter>
      <LinkContext.Provider value={{link, setLink}}>
        <Route exact path='/' component={Main} />
        <Route path='/todolist' component={Todolist} />
        <Route path="/e-shop" component={Eshop} />
      </LinkContext.Provider>
    </BrowserRouter>
  )
}

export default App;
